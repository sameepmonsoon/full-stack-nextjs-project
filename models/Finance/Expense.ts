import mongoose, { Schema, Document } from "mongoose";

interface Category {
  value: string;
  label: string;
}

interface ExpenseDoc extends Document {
  userId: string;
  title: string;
  amount: number;
  category: Category[];
  source: Category[];
  method: String;
  note: string;
  date: Date;
}

const categorySchema = new Schema(
  {
    value: String,
    label: String,
  },
  { _id: false }
);

const expenseSchema = new Schema<ExpenseDoc>(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    source: {
      type: [categorySchema],
      default: [],
      required: true,
    },
    category: {
      type: [categorySchema],
      required: true,
      default: [],
    },
    note: {
      type: String,
      required: false,
    },
    method: {
      type: String,
      required: true,
      enum: ["cash", "bank", "cheque"],
      default: "cash",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Expense ||
  mongoose.model("Expense", expenseSchema);
