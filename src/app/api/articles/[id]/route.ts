import prisma from "@/lib/prisma";
import { PathParams, withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { paginationQuerySchema, pathIdSchema } from "@/schemas/requestSchema";

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
