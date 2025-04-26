import { Prisma } from "@/app/generated/prisma";
import { USER_FIELD_NAMES } from "@/lib/constants/user";
type ApiHandler = (req: Request) => Promise<Response>;

export const withErrorHandler = (handler: ApiHandler) => {
  return async (req: Request) => {
    try {
      return await handler(req);
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return Response.json(
            { error: getPrismaErrorMessage(error) },
            { status: 400 }
          );
        }
      }
      return Response.json(
        { error: "サーバーでエラーが発生しました" },
        { status: 500 }
      );
    }
  };
};

export const getPrismaErrorMessage = (
  error: Prisma.PrismaClientKnownRequestError
) => {
  switch (error.code) {
    case "P2002":
      const field = (error.meta?.target as string[])
        .map(
          (target) =>
            USER_FIELD_NAMES[target as keyof typeof USER_FIELD_NAMES] ?? target
        )
        .join(",");
      return `${field}は既に存在します`;
    default:
      return "サーバーでエラーが発生しました";
  }
};
