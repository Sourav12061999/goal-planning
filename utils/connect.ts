import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
let isConnected = false;
export const connect = async () =>{
    if(isConnected){
        return;
    }
  let db = await mongoose.connect(process.env.mongoDB_URL!);
  isConnected=true;
}

export default connect;