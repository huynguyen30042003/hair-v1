import mongoose from "mongoose";
const connectDB =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;