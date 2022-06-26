import { ExpenseType } from "../Expenses/expense.types";
export type FormDataTypes = {
    currAge:number,
    retirementAge:number,
    currSallary:number,
    yearlyIncrement:number,
    monthlyExpense:Array<ExpenseType>,
    _id?:string,
    userid:string
}