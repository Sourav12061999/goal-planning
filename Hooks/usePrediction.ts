import React from "react";
import { FormDataTypes } from "../Components/Page/Personal/Form/form.types";
function usePrediction() {
  const Predict = (data: FormDataTypes, annualReturn: number = 12) => {
    const startSallary = data.currSallary;
    const startAge = data.currAge;
    const sallaryIncrement = data.yearlyIncrement;
    const sallaryArray = [startSallary];
    const expensesArray=data.monthlyExpense.map((el) =>{
        return [el.amount];
    })    
    let count = 0;
    for (let i = startAge + 1; i < data.retirementAge; i++) {
      const prevSallary = sallaryArray[count];
      sallaryArray.push(Math.floor(prevSallary + prevSallary * (sallaryIncrement / 100))); // Array of all the yearly sallaries from start age till retirement age
      data.monthlyExpense.forEach((el,i) =>{
        const prevExpense=expensesArray[i][count];
        expensesArray[i].push(Math.floor(prevExpense+prevExpense*el.increment/100));
      })
      count++
    }
    console.log(expensesArray);
  };
  return {Predict};
}

export default usePrediction;
