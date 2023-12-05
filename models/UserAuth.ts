import mongoose from "mongoose";

const { Document, Schema } = mongoose;
interface userAuthDoc extends Document {
  email: string;
  name: string;
  password: string;
  role: "admin" | "super-admin" | "user";
}
const userAuthSchema = new Schema<userAuthDoc>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin" || "super-admin" || "user"],
      default: "user",
    },
  },
  { timestamps: true }
);
export default mongoose.models.UserAuth ||
  mongoose.model("UserAuth", userAuthSchema);
