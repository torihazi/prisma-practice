import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
import { USER_FIELD_NAMES } from "@/lib/constants/user";
import { z } from "zod";

const FIELD_NAMES = {
  ...USER_FIELD_NAMES,
} as const;

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const fieldNames = (issue.path as string[])
    .map((path) => FIELD_NAMES[path as keyof typeof FIELD_NAMES] ?? path)
    .join(",");

  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      return {
        message: `${fieldNames}は${issue.expected}型で入力してください`,
      };
    case z.ZodIssueCode.invalid_string:
      return {
        message: `${fieldNames}の形式が正しくありません`,
      };
    case z.ZodIssueCode.too_small:
      return {
        message: `${fieldNames}は${issue.minimum}文字以上で入力してください`,
      };
    case z.ZodIssueCode.too_big:
      return {
        message: `${fieldNames}は${issue.maximum}文字以下で入力してください`,
      };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
