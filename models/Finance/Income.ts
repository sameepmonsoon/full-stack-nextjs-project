import mongoose from "mongoose";

const { Document, Schema } = mongoose;
interface incomeDoc extends Document {
  title: string;
  amount: number;
  lastName: string;
  source: string;
  method: "cash" | "cheque" | "bank";
  note: string;
  date: Date;
}
const incomeSchema = new Schema<incomeDoc>(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      unique: true,
      required: true,
    },
    source: {
      type: String,
      unique: true,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
      enum: ["cheque", "bank", "cash"],
      default: "cash",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Income ||
  mongoose.model("IncomeSchema", incomeSchema);
