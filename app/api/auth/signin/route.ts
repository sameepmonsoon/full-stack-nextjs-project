import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  const body = await request.json();

  const { username, password } = body;

  if (!username && !password) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  // Always check this
  const secret = process.env.JWT || "";

  const token = sign(
    {
      username,
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  );

  const response = {
    message: "Authenticated!",
    token,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": "name" },
  });
}
