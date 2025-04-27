import prisma from "@/lib/prisma";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
import { ArticleCreateWithoutUserInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/ArticleCreateWithoutUserInputSchema";
import { getAuthToken, verifyJWT } from "@/lib/api/auth";

export const POST = withErrorHandler(async (req: Request) => {
  const token = await getAuthToken();
  if (token === null) {
    return Response.json(
      {
        error: "認証が必要です",
      },
      {
        status: 401,
      }
    );
  }

  const { userId } = await verifyJWT(token);

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
      userId: parseInt(userId),
    },
  });
  return Response.json(article);
});
