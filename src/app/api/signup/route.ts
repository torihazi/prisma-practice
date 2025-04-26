import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  const { userName, email, password } = res;

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
