import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { ArticleCreateWithoutUserInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/ArticleCreateWithoutUserInputSchema";
import { withAuth } from "@/lib/api/handler";
import { NextRequest } from "next/server";
import { paginationQuerySchema } from "@/schemas/requestSchema";
import { TagCreateWithoutArticleTagInputSchema } from "../../../../prisma/generated/zod";

export const GET = withAuth(async (req: NextRequest, userId: number) => {
  const searchParams = req.nextUrl.searchParams;
  const query = Object.fromEntries(searchParams);
  const queryValidation = validateRequest(query, paginationQuerySchema);
  if (!queryValidation.success) {
    return queryValidation.error;
  }

  const { take, skip } = queryValidation.data;

  const tags = await prisma.tag.findMany({
    take,
    skip,
  });
  return Response.json(tags);
});

export const POST = withAuth(async (req: NextRequest, userId: number) => {
  const res = await req.json();
  const bodyValidation = validateRequest(
    res,
    TagCreateWithoutArticleTagInputSchema
  );
  if (!bodyValidation.success) {
    return bodyValidation.error;
  }
  const { name } = bodyValidation.data;

  const tag = await prisma.tag.create({
    data: {
      name,
    },
  });
  return Response.json(tag);
});
