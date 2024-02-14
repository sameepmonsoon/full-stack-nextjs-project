import Expense from "@/models/Finance/Expense";
import connect from "@/utils/db_config";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    const param = searchParams.get("userId");

    const aggregatedData: any = await Expense.aggregate([
      {
        $match: { userId: param, method: { $in: ["cash", "bank", "cheque"] } },
      },
      {
        $facet: {
          totalCashAmount: [
            {
              $match: { method: "cash" },
            },
            {
              $group: {
                _id: null,
                totalSum: { $sum: "$amount" },
              },
            },
          ],
          totalBankAmount: [
            {
              $match: { method: "bank" },
            },
            {
              $group: {
                _id: null,
                totalSum: { $sum: "$amount" },
              },
            },
          ],
          totalChequeAmount: [
            {
              $match: { method: "cheque" },
            },
            {
              $group: {
                _id: null,
                totalSum: { $sum: "$amount" },
              },
            },
          ],
        },
      },
    ]);

    const totalCashAmount = aggregatedData[0].totalCashAmount[0]?.totalSum || 0;
    const totalBankAmount = aggregatedData[0].totalBankAmount[0]?.totalSum || 0;
    const totalChequeAmount =
      aggregatedData[0].totalChequeAmount[0]?.totalSum || 0;

    const totalExpense = totalCashAmount + totalBankAmount + totalChequeAmount;

    return NextResponse.json({
      totalExpense,
      totalCashAmount,
      totalBankAmount,
      totalChequeAmount,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
