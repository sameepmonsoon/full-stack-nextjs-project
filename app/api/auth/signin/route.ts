import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import UserAuth from "@/models/UserAuth";
import bcrypt from "bcrypt";
import connect from "@/utils/db_config";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  try {
    await connect();
    const body = await request.json();
    const { emailAddress, password: userPassword } = body;
    console.log(emailAddress, userPassword);
    if (!emailAddress || !userPassword) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await UserAuth.findOne({
      $or: [{ username: emailAddress }, { email: emailAddress }],
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const isCorrect = await bcrypt.compare(userPassword, user.password);

    if (!isCorrect) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    const { password, ...othersData } = user._doc;

    const secret = process.env.JWT_SECRET || "";

    const token = sign({ password }, secret, {
      expiresIn: MAX_AGE,
    });

    const response = {
      message: "Authenticated!",
      token,
      userDetails: othersData,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Set-Cookie": `authToken=${token}; HttpOnly; Path=/; Max-Age=${MAX_AGE}; SameSite=Strict`,
      },
    });
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
