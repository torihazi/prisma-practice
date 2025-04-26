import prisma from "@/lib/prisma";
import { UserCreateInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/UserCreateInputSchema";
import { requestPasswordSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";

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

  const passwordValidation = requestPasswordSchema.safeParse(password);
  if (!passwordValidation.success) {
    return Response.json(
      { error: passwordValidation.error.errors },
      { status: 400 }
    );
  }

  const hash = bcrypt.hashSync(passwordValidation.data, 10);

  try {
    const user = await prisma.user.create({
      select: {
        id: true,
      },
      data: {
        userName,
        email,
        password: hash,
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
