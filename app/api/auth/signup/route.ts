// import { UserAuth } from "@/models/UserAuth";
import UserAuth from "@/models/UserAuth";
import connect from "@/utils/db_config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();

    // const body = request.body;
    // const pass = body.password;

    // console.log(body, pass);

    // if (!pass?.length || pass.length < 5) {
    //   throw new Error("Password must be at least 5 characters");
    // }

    // const notHashedPassword = pass;
    // const salt = bcrypt.genSaltSync(10);
    // body.password = bcrypt.hashSync(notHashedPassword, salt);

    // const createdUser = await UserAuth.create(body);

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
}