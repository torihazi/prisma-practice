import prisma from "@/lib/prisma";
import { PathParams, withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { pathIdSchema } from "@/schemas/requestSchema";
import { paginationQuerySchema } from "@/schemas/requestSchema";

export const GET = withAuth(
  async (req: NextRequest, _userId: number, pathParams?: PathParams) => {
    const params = await pathParams?.params;
    const idValidation = validateRequest(params, pathIdSchema);
    if (!idValidation.success) {
      return idValidation.error;
    }

    const { id } = idValidation.data;

    const searchParams = req.nextUrl.searchParams;
    const query = Object.fromEntries(searchParams);
    const queryValidation = validateRequest(query, paginationQuerySchema);
    if (!queryValidation.success) {
      return queryValidation.error;
    }

    const { take, skip } = queryValidation.data;

    const articles = await prisma.article.findMany({
      where: {
        articleTags: {
          some: {
            tagId: id,
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            userName: true,
          },
        },
      },
      take,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    });
    return Response.json(articles);
  }
);
