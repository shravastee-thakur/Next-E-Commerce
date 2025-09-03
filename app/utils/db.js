import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://devshravastee_db_user:EyMBLIkDQemvyInV@next-ecom.osactvo.mongodb.net/next-ecom?retryWrites=true&w=majority&appName=next-ecom"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
