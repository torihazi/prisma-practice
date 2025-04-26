import prisma from "@/lib/prisma";
import { requestLoginSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const res = await request.json();
  const bodyValidation = requestLoginSchema.safeParse(res);
  if (!bodyValidation.success) {
    return Response.json(
      { error: bodyValidation.error.errors },
      { status: 400 }
    );
  }
  const { email, password } = bodyValidation.data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user === null) {
    return Response.json(
      { error: "メールアドレスもしくはパスワードが間違っています" },
      { status: 400 }
    );
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return Response.json(
      { error: "メールアドレスもしくはパスワードが間違っています" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "ログインに成功しました",
    user: {
      id: user.id,
      userName: user.userName,
      email: user.email,
    },
  });
}
