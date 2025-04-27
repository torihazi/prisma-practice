import { Prisma } from "@/app/generated/prisma";
import { USER_FIELD_NAMES } from "@/lib/constants/user";
import { getAuthToken, verifyJWT } from "./auth";
import { NextRequest } from "next/server";

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
