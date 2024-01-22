import mongoose from "mongoose";

const { Document, Schema } = mongoose;
interface Category {
  value: string;
  label: string;
}
interface incomeDoc extends Document {
  userId: string;
  title: string;
  amount: number;
  category: Category[];
  source: Category[];
  method: "cash" | "cheque" | "bank";
  note: string;
  date: Date;
}
const incomeSchema = new Schema<incomeDoc>(
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
      type: [
        {
          value: String,
          label: String,
        },
      ],
      default: [],
      required: true,
    },
    category: {
      type: [
        {
          value: String,
          label: String,
        },
      ],
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
      enum: ["cash", "cheque", "bank"],
      default: "cash",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Income || mongoose.model("Income", incomeSchema);
