import mongoose from "mongoose";
import colors from "colors";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected to ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`MongoDb error ${error}`.bgRed.white);
  }
};

export default connectDb;
