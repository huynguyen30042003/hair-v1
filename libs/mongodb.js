import mongoose from "mongoose";
const connectMongoDB =  async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect to database");
    } catch (error) {
        console.log(error);
    }
}
export default connectMongoDB;