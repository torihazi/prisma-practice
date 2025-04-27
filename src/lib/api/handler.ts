import { Prisma } from "@/app/generated/prisma";
import { USER_FIELD_NAMES } from "@/lib/constants/user";
import { getAuthToken, verifyJWT } from "./auth";
import { NextRequest } from "next/server";
import { validateRequest } from "./validation";
import { pathIdSchema } from "@/schemas/requestSchema";
import prisma from "../prisma";

export type PathParams = {
  params: Promise<{ [key: string]: string }>;
};

type ApiHandler = (
  req: NextRequest,
  pathParams?: PathParams
) => Promise<Response>;

export const withErrorHandler = (handler: ApiHandler) => {
  return async (req: NextRequest, pathParams: PathParams) => {
    try {
      return await handler(req, pathParams);
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return Response.json(
            { error: getPrismaErrorMessage(error) },
            { status: 400 }
          );
        }
      }
      return Response.json(
        { error: "サーバーでエラーが発生しました" },
        { status: 500 }
      );
    }
  };
};

export const getPrismaErrorMessage = (
  error: Prisma.PrismaClientKnownRequestError
) => {
  switch (error.code) {
    case "P2002":
      const field = (error.meta?.target as string[])
        .map(
          (target) =>
            USER_FIELD_NAMES[target as keyof typeof USER_FIELD_NAMES] ?? target
        )
        .join(",");
      return `${field}は既に存在します`;
    default:
      return "サーバーでエラーが発生しました";
  }
};

type AuthenticatedHandler = (
  req: NextRequest,
  userId: number,
  pathParams?: PathParams
) => Promise<Response>;

export const withAuth = (handler: AuthenticatedHandler) => {
  return withErrorHandler(async (req: NextRequest, pathParams?: PathParams) => {
    const token = await getAuthToken();
    if (token === null) {
      return Response.json(
        {
          error: "認証が必要です",
        },
        {
          status: 401,
        }
      );
    }

    const { userId } = await verifyJWT(token);
    return await handler(req, parseInt(userId), pathParams);
  });
};

type OrganizationAuthenticateHandler = (
  req: NextRequest,
  userId: number,
  organizationId: number,
  pathParams?: PathParams
) => Promise<Response>;

export const withOrganizationAuth = (
  handler: OrganizationAuthenticateHandler
) => {
  return withAuth(
    async (req: NextRequest, userId: number, pathParams?: PathParams) => {
      const params = await pathParams?.params;
      const idValidation = validateRequest(params, pathIdSchema);
      if (!idValidation.success) {
        return idValidation.error;
      }

      const { id } = idValidation.data;

      const userOrganization = await prisma.userOrganization.findFirst({
        where: {
          userId,
          organizationId: id,
          role: "ADMIN",
        },
      });
      if (userOrganization === null) {
        return Response.json(
          {
            error: "組織が存在しない、もしくは権限がありません",
          },
          {
            status: 404,
          }
        );
      }
      return handler(req, userId, id, pathParams);
    }
  );
};
