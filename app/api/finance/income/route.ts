import Income from "@/models/Finance/Income";
import connect from "@/utils/db_config";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: any, res: NextResponse) {
  try {
    await connect();
    console.log("Inside income-page");

    const body = await request.json();

    const incomeDetail = await Income.create({
      title: body.title,
      userId: body.userId,
      source: body.source,
      date: body.date,
      method: body.method,
      note: body.note,
      amount: body.amount,
      category: body.category,
    });

    return NextResponse.json(
      { message: "Income Detail Added !", incomeDetail },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
