import Income from "@/models/Finance/Income";
import Expense from "@/models/Finance/Expense";
import connect from "@/utils/db_config";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const param = searchParams.get("userId");
    const aggregatedIncomeData: any = await Income.aggregate([
      {
        $match: { userId: param },
      },
      {
        $group: {
          _id: null,
          totalSum: { $sum: "$amount" },
        },
      },
    ]);
    const aggregatedExpenseData: any = await Expense.aggregate([
      {
        $match: { userId: param },
      },
      {
        $group: {
          _id: null,
          totalSum: { $sum: "$amount" },
        },
      },
    ]);
    const totalExpense = aggregatedExpenseData[0]?.totalSum || 0;
    const totalIncome = aggregatedIncomeData[0]?.totalSum || 0;
    const totalBalance = totalIncome - totalExpense;
    return NextResponse.json({
      totalBalance,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
