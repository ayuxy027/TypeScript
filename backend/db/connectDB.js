import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected : ", process.env.MONGODB_URI);
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit with a failure code if the database cannot connect
  }
};