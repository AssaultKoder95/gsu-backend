import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbUrl = process.env.MONGO_DB_URL || "";
    await mongoose.connect(mongodbUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
