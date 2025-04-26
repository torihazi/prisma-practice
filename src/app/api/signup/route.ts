import prisma from "@/lib/prisma";
import { UserCreateInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/UserCreateInputSchema";
export async function POST(request: Request) {
  const res = await request.json();
  const bodyValidation = UserCreateInputSchema.safeParse(res);
  if (!bodyValidation.success) {
    return Response.json(
      { error: bodyValidation.error.errors },
      { status: 400 }
    );
  }
  const { userName, email, password } = bodyValidation.data;

  try {
    const user = await prisma.user.create({
      data: {
        userName,
        email,
        password,
      },
    });
    return Response.json(user);
  } catch (error) {
    return Response.json(
      { error: "ユーザの作成に失敗しました" },
      { status: 500 }
    );
  }
}
