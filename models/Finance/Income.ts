import mongoose, { Schema, Document } from "mongoose";

interface Category {
  value: string;
  label: string;
}

interface IncomeDoc extends Document {
  userId: string;
  title: string;
  amount: number;
  category: Category[];
  source: Category[];
  method: Category[];
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

const incomeSchema = new Schema<IncomeDoc>(
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
      type: [categorySchema],
      required: true,
      default: [],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Income || mongoose.model("Income", incomeSchema);
