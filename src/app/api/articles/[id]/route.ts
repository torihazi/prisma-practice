import prisma from "@/lib/prisma";
import { PathParams, withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { paginationQuerySchema, pathIdSchema } from "@/schemas/requestSchema";
import { ArticleUpdateWithoutUserInputSchema } from "../../../../../prisma/generated/zod/inputTypeSchemas/ArticleUpdateWithoutUserInputSchema";

export const GET = withAuth(
  async (_req: NextRequest, _userId: number, pathParams?: PathParams) => {
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
      include: {
        user: {
          select: {
            id: true,
            userName: true,
          },
        },
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
    return Response.json(article);
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

    const res = await req.json();
    const bodyValidation = validateRequest(
      res,
      ArticleUpdateWithoutUserInputSchema
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

    const { title, content } = bodyValidation.data;

    const updatedArticle = await prisma.article.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
    return Response.json(updatedArticle);
  }
);
