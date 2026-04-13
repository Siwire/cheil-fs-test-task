import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};
