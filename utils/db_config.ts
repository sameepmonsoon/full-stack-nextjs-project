import mongoose from "mongoose";

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable is not defined.");
    }

    await mongoose.connect(process.env.MONGO);

    console.log("Connected to MongoDB!");
  } catch (error: any) {
    console.error("Connection failed:", error.message);
    throw new Error("Connection failed!");
  }
};

export default connect;
