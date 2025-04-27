import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { UserOrganizationCreateInputSchema } from "../../../../../../prisma/generated/zod";
import { PathParams } from "@/lib/api/handler";
import { pathIdSchema } from "@/schemas/requestSchema";

export const POST = withAuth(
  async (req: NextRequest, userId: number, pathParams?: PathParams) => {
    const params = await pathParams?.params;
    const idValidation = validateRequest(params, pathIdSchema);
    if (!idValidation.success) {
      return idValidation.error;
    }

    const { id } = idValidation.data;

    const { userId: inviteUserId, role } = await req.json();
    const bodyValidation = validateRequest(
      {
        role,
        user: { connect: { id: inviteUserId } },
        organization: { connect: { id } },
      },
      UserOrganizationCreateInputSchema
    );
    if (!bodyValidation.success) {
      return bodyValidation.error;
    }

    const organization = await prisma.userOrganization.findFirst({
      where: {
        userId,
        organizationId: id,
        role: "ADMIN",
      },
    });
    if (organization === null) {
      return Response.json(
        {
          error: "組織が存在しない、もしくは権限がありません",
        },
        {
          status: 404,
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id: inviteUserId,
      },
    });
    if (user === null) {
      return Response.json(
        { error: "ユーザーが存在しません" },
        { status: 404 }
      );
    }

    const existingUserOrganization = await prisma.userOrganization.findFirst({
      where: {
        userId: inviteUserId,
        organizationId: id,
      },
    });
    if (existingUserOrganization !== null) {
      return Response.json(
        { error: "ユーザーは既に組織に参加しています" },
        { status: 400 }
      );
    }

    const userOrganization = await prisma.userOrganization.create({
      data: bodyValidation.data,
    });
    return Response.json(userOrganization);
  }
);
