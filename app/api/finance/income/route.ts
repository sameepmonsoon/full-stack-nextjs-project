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

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const pageNumber: number = parseInt(
      searchParams.get("pageNumber") || "1",
      10
    );
    const pageSize: number = parseInt(searchParams.get("pageSize") || "10", 10);
    const skipAmount = (pageNumber - 1) * pageSize;

    const query: any = { userId };

    if (searchParams.get("thisDay")) {
      query.$expr = { $eq: [{ $dayOfMonth: "$date" }, currentDay] };
    }
    if (searchParams.get("thisMonth")) {
      query.$expr = { $eq: [{ $month: "$date" }, currentMonth] };
    }
    if (searchParams.get("thisYear")) {
      query.$expr = { $eq: [{ $year: "$date" }, currentYear] };
    }

    const total = await Income.countDocuments(query);
    const data = await Income.find(query).skip(skipAmount).limit(pageSize);

    return NextResponse.json({ total, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}

//delete
export async function DELETE(request: any) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const incomeId = searchParams.get("incomeId");

    const deletedIncome = await Income.findByIdAndDelete(incomeId);
    if (!deletedIncome) {
      return NextResponse.json(
        { message: "Income not found", status: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Income deleted successfully", status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting income:", error);
    return NextResponse.json(
      { error: "Internal Server Error", status: false },
      { status: 500 }
    );
  }
}

export async function PATCH(request: any) {
  try {
    await connect();

    const body = await request.json();
    const updatedIncome = await Income.findByIdAndUpdate(body.userId, body, {
      new: true,
    });
    if (!updatedIncome) {
      return NextResponse.json(
        { message: "Income not found", status: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Income updated successfully",
        income: updatedIncome,
        status: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating income:", error);
    return NextResponse.json(
      { error: "Internal Server Error", status: false },
      { status: 500 }
    );
  }
}
