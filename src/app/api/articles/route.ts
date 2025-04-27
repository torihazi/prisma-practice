import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { ArticleCreateWithoutUserInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/ArticleCreateWithoutUserInputSchema";
import { withAuth } from "@/lib/api/handler";

export const POST = withAuth(async (req: Request, userId: number) => {
  const res = await req.json();
  const bodyValidation = validateRequest(
    res,
    ArticleCreateWithoutUserInputSchema
  );
  if (!bodyValidation.success) {
    return bodyValidation.error;
  }
  const { title, content } = bodyValidation.data;

  const article = await prisma.article.create({
    data: {
      title,
      content,
      userId,
    },
  });
  return Response.json(article);
});
