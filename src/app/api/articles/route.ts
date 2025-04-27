import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { paginationQuerySchema } from "@/schemas/requestSchema";
import { ArticleCreateInputSchema } from "../../../../prisma/generated/zod";

export const GET = withAuth(async (req: NextRequest, userId: number) => {
  const searchParams = req.nextUrl.searchParams;
  const query = Object.fromEntries(searchParams);
  const queryValidation = validateRequest(query, paginationQuerySchema);
  if (!queryValidation.success) {
    return queryValidation.error;
  }

  const { take, skip } = queryValidation.data;

  const articles = await prisma.article.findMany({
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
  });
  return Response.json(articles);
});

export const POST = withAuth(async (req: NextRequest, userId: number) => {
  const { tagIds, ...res } = await req.json();
  const bodyValidation = validateRequest(
    {
      ...res,
      user: { connect: { id: userId } },
      articleTags: { create: tagIds.map((tagId: number) => ({ tagId })) },
    },
    ArticleCreateInputSchema
  );
  if (!bodyValidation.success) {
    return bodyValidation.error;
  }

  const article = await prisma.article.create({
    data: bodyValidation.data,
  });
  return Response.json(article);
});
