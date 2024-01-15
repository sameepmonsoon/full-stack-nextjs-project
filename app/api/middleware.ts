// middleware.ts
import { verify, Secret } from "jsonwebtoken";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export function verifyToken(req: any, res: NextResponse, next: () => void) {
  const token = req.cookies.authToken || "";
  const secret: Secret = process.env.JWT_SECRET || "";

  // Verify the token
  verify(token, secret, (err: any, decoded: any) => {
    if (err) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (decoded.exp <= Date.now() / 1000) {
      return NextResponse.json({ message: "Token expired" }, { status: 401 });
    }

    req.userId = decoded.userId;
    next();
  });
}
