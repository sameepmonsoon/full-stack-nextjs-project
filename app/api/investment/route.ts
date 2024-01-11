import connect from "@/utils/db_config";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: any, res: NextApiResponse) {
  try {
    await connect();
    const body = await request.json();

    return NextResponse.json(
      { message: { message: "success" } },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
