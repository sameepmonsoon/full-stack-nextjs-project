import Expense from "@/models/Finance/Expense";
import connect from "@/utils/db_config";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { verifyToken } from "../../middleware";

export async function POST(request: any, res: NextResponse) {
  try {
    await connect();
    // verifyToken(request, res, async () => {
    const body = await request.json();
    const expenseDetail = await Expense.create({
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
      { message: "Expense Detail Added !", expenseDetail, status: true },
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

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
    const currentYear = currentDate.getFullYear();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const pageNumber: number = parseInt(
      searchParams.get("pageNumber") || "1",
      10
    );
    const pageSize: number = parseInt(searchParams.get("pageSize") || "10", 10);
    const skipAmount = (pageNumber - 1) * pageSize;

    // Build the query object based on userId
    const query: any = { userId };

    // Check for filters for "this day", "this month", and "this year"
    if (searchParams.get("thisDay")) {
      query.$expr = { $eq: [{ $dayOfMonth: "$date" }, currentDay] };
    }
    if (searchParams.get("thisMonth")) {
      query.$expr = { $eq: [{ $month: "$date" }, currentMonth] };
    }
    if (searchParams.get("thisYear")) {
      query.$expr = { $eq: [{ $year: "$date" }, currentYear] };
    }

    // Retrieve total count and paginated data
    const total = await Expense.countDocuments(query);
    const data = await Expense.find(query).skip(skipAmount).limit(pageSize);

    return NextResponse.json({ total, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
