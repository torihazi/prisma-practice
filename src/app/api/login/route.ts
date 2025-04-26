import prisma from "@/lib/prisma";
import { requestLoginSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";
export const POST = withErrorHandler(async (req: Request) => {
  const res = await req.json();
  const bodyValidation = validateRequest(res, requestLoginSchema);
  if (!bodyValidation.success) {
    return bodyValidation.error;
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
});
