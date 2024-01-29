"use server";
import UserAuth from "@/models/UserAuth";
import connect from "@/utils/db_config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: any, res: NextApiResponse) {
  try {
    await connect();
    const body = await request.json();

    const notHashedPassword = body.password;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);
    const createdUser = await UserAuth.create(body);

    const { firstName, lastName, email, phone, _id: id } = createdUser;
    redirect(`/admin/home`);
    return NextResponse.json(
      {
        message: "user Created",
        userData: { firstName, lastName, email, phone, id },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
