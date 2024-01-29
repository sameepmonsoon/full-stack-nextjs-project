import Income from "@/models/Finance/Income";
import connect from "@/utils/db_config";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { verifyToken } from "../../middleware";

export async function POST(request: any, res: NextResponse) {
  try {
    await connect();
    // verifyToken(request, res, async () => {
    const body = await request.json();
    const incomeDetail = await Income.create({
      title: body.title,
      userId: body.userId,
      source: [body.source],
      date: body.date,
      method: body.method?.value,
      note: body.note,
      amount: body.amount,
      category: [body.category],
    });
    return NextResponse.json(
      { message: "Income Detail Added !", incomeDetail, status: true },
      { status: 200 }
    );
    // });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { error: error.message, status: false },
      { status: 400 }
    );
  }
}
export async function GET(request: any) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const param = searchParams.get("userId");
    const pageNumber: any = searchParams.get("pageNumber") || 1;
    const pageSize: any = searchParams.get("pageSize") || 10;
    const skipAmount = (pageNumber - 1) * pageSize;
    const total = await Income.countDocuments({ userId: param });
    const data = await Income.find({ userId: param })
      .skip(skipAmount)
      .limit(pageSize);

    return NextResponse.json({ total, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
