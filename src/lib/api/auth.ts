import * as jose from "jose";
import { cookies } from "next/headers";
export type JWTPayload = {
  userId: string;
  userName: string;
};

const JWT_SECRET = process.env.JWT_SECRET ?? "invalid";
const COOKIE_NAME = "auth-token";
const ISSURE = "prisma-practice";
const AUDIENCE = "prisma-practice-audience";

export const singJWT = async (payload: JWTPayload): Promise<string> => {
  const secret = new TextEncoder().encode(JWT_SECRET);
  const alg = "HS256";

  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(ISSURE)
    .setAudience(AUDIENCE)
    .setExpirationTime("24h")
    .sign(secret);
};

export const verifyJWT = async (token: string): Promise<JWTPayload> => {
  const secret = new TextEncoder().encode(JWT_SECRET);
  const { payload } = await jose.jwtVerify<JWTPayload>(token, secret, {
    issuer: ISSURE,
    audience: AUDIENCE,
  });

  return {
    userId: payload.userId,
    userName: payload.userName,
  };
};

export const setAuthToken = async (token: string) => {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
};

export const getAuthToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? null;
};
