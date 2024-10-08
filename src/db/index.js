import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB=async()=>{
    try{
        const connectionInstance=mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection}`)
    }
    catch(error){
        console.log("MONGODB connect error",error)
        process.exit(1)
    }
}


export default connectDB