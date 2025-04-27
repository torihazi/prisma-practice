import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { paginationQuerySchema } from "@/schemas/requestSchema";

export const GET = withAuth(async (req: NextRequest, userId: number) => {
  const searchParams = req.nextUrl.searchParams;
  const query = Object.fromEntries(searchParams);
  const queryValidation = validateRequest(query, paginationQuerySchema);
  if (!queryValidation.success) {
    return queryValidation.error;
  }

  const { take, skip } = queryValidation.data;

  const articles = await prisma.article.findMany({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          userName: true,
        },
      },
      articleTags: {
        include: {
          tag: true,
        },
      },
    },
    take,
    skip,
  });
  return Response.json(articles);
});
