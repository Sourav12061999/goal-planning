import { Schema, model, models } from "mongoose";
const personalSchema = new Schema({
    currAge:Number,
    retirementAge:Number,
    currSallary:Number,
    yearlyIncrement:Number,
    monthlyExpense:[
        {
            expense:String,
            amount:Number,
            id:Number,
            increment:Number
        }
    ],
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
    }
})

const personal = models.personals ||  model("personals",personalSchema);

export default personal;