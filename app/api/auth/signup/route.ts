// import { UserAuth } from "@/models/UserAuth";
import UserAuth from "@/models/UserAuth";
import connect from "@/utils/db_config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: any, res: NextApiResponse) {
  try {
    await connect();

    const body = await request.json();
    const notHashedPassword = body.password;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);
    const createdUser = await UserAuth.create(body);
    return NextResponse.json({ message: createdUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
