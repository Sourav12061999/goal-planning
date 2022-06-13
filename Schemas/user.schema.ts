import { Schema, model, models } from "mongoose";
import { userDataType } from "../GlobalTypes";
const userSchema = new Schema<userDataType>({
    name:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:false,
    },
})

const users = models.users ||  model("users",userSchema);

export default users;