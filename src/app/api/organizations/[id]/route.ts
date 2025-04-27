import prisma from "@/lib/prisma";
import { PathParams, withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { pathIdSchema } from "@/schemas/requestSchema";
import { ArticleUpdateInputSchema } from "../../../../../prisma/generated/zod";

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

export const PUT = withAuth(
  async (req: NextRequest, userId: number, pathParams?: PathParams) => {
    const params = await pathParams?.params;
    const idValidation = validateRequest(params, pathIdSchema);
    if (!idValidation.success) {
      return idValidation.error;
    }

    const { id } = idValidation.data;

    const { tagIds, ...res } = await req.json();
    const bodyValidation = validateRequest(
      {
        ...res,
        user: { connect: { id: userId } },
        articleTags: { create: tagIds.map((tagId: number) => ({ tagId })) },
      },
      ArticleUpdateInputSchema
    );
    if (!bodyValidation.success) {
      return bodyValidation.error;
    }

    const article = await prisma.article.findUnique({
      where: {
        id,
      },
    });
    if (article === null) {
      return Response.json(
        {
          error: "記事が見つかりません",
        },
        {
          status: 404,
        }
      );
    }
    if (article.userId !== userId) {
      return Response.json(
        {
          error: "記事を編集する権限がありません",
        },
        {
          status: 403,
        }
      );
    }

    const updateArticle = await prisma.$transaction(async (tx) => {
      await tx.articleTag.deleteMany({
        where: {
          articleId: id,
        },
      });
      return await tx.article.update({
        where: {
          id,
        },
        data: bodyValidation.data,
      });
    });

    return Response.json(updateArticle);
  }
);

export const DELETE = withAuth(
  async (req: NextRequest, userId: number, pathParams?: PathParams) => {
    const params = await pathParams?.params;
    const idValidation = validateRequest(params, pathIdSchema);
    if (!idValidation.success) {
      return idValidation.error;
    }

    const { id } = idValidation.data;

    const article = await prisma.article.findUnique({
      where: {
        id,
      },
    });
    if (article === null) {
      return Response.json(
        {
          error: "記事が見つかりません",
        },
        {
          status: 404,
        }
      );
    }
    if (article.userId !== userId) {
      return Response.json(
        {
          error: "記事を編集する権限がありません",
        },
        {
          status: 403,
        }
      );
    }

    await prisma.article.delete({
      where: {
        id,
      },
    });
    return Response.json({
      message: "記事を削除しました",
    });
  }
);
