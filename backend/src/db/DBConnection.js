import mongoose from "mongoose";
const connectDB = async function(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error :", error);
        process.exit(1);
    }
}
export default connectDB