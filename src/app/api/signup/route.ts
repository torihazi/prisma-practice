import prisma from "@/lib/prisma";
import { UserCreateInputSchema } from "../../../../prisma/generated/zod/inputTypeSchemas/UserCreateInputSchema";
import { requestPasswordSchema } from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { withErrorHandler } from "@/lib/api/handler";
import { validateRequest } from "@/lib/api/validation";

export const POST = withErrorHandler(async (req: Request) => {
  const res = await req.json();
  const bodyValidation = validateRequest(res, UserCreateInputSchema);
  if (!bodyValidation.success) {
    return bodyValidation.error;
  }
  const { userName, email, password } = bodyValidation.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ userName }, { email }],
    },
  });

  if (existingUser !== null) {
    return Response.json(
      { error: "ユーザーが既に存在します" },
      { status: 400 }
    );
  }

  const passwordValidation = validateRequest(password, requestPasswordSchema);
  if (!passwordValidation.success) {
    return passwordValidation.error;
  }

  const hash = bcrypt.hashSync(passwordValidation.data, 10);

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
});
