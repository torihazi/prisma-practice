import prisma from "@/lib/prisma";
import {
  PathParams,
  withErrorHandler,
  withOrganizationAuth,
} from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { pathIdSchema } from "@/schemas/requestSchema";
import { OrganizationUpdateInputSchema } from "../../../../../prisma/generated/zod";

export const GET = withAuth(
  async (_req: NextRequest, _userId: number, pathParams?: PathParams) => {
    const params = await pathParams?.params;
    const idValidation = validateRequest(params, pathIdSchema);
    if (!idValidation.success) {
      return idValidation.error;
    }

    const { id } = idValidation.data;

    const organization = await prisma.organization.findUnique({
      where: {
        id,
      },
      include: {
        articles: true,
        userOrganizations: {
          include: {
            user: {
              select: {
                id: true,
                userName: true,
              },
            },
          },
        },
      },
    });
    if (organization === null) {
      return Response.json(
        {
          error: "組織が見つかりません",
        },
        {
          status: 404,
        }
      );
    }
    return Response.json(organization);
  }
);

export const PUT = withOrganizationAuth(
  async (req: NextRequest, userId: number, organizationId: number) => {
    const res = await req.json();
    const bodyValidation = validateRequest(res, OrganizationUpdateInputSchema);
    if (!bodyValidation.success) {
      return bodyValidation.error;
    }
    const updateOrganization = await prisma.organization.update({
      where: {
        id: organizationId,
      },
      data: bodyValidation.data,
    });

    return Response.json(updateOrganization);
  }
);

export const DELETE = withOrganizationAuth(
  async (_req: NextRequest, _userId: number, organizationId: number) => {
    await prisma.organization.delete({
      where: {
        id: organizationId,
      },
    });
    return Response.json({
      message: "組織を削除しました",
    });
  }
);
