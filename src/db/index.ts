import mongoose from "mongoose";
import { MONGO_URI } from "../utils/constants";

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connected..");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export default connectDB;
