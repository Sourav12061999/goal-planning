import React from 'react'
import {FormDataTypes} from "../Components/Page/Personal/Form/form.types";
function usePrediction(data:FormDataTypes,annualReturn:number=12) {
    const startSallary=data.currSallary;
    const startAge=data.currAge;
    const sallaryIncrement=data.yearlyIncrement;
    const sallaryArray=[startSallary];
    let count=0;
    for(let i=startAge+1;i<data.retirementAge;i++){
        const prevSallary=sallaryArray[count];
        sallaryArray.push(prevSallary+prevSallary*(sallaryIncrement/100))// Array of all the yaerly sallaries from start age till retirement age
    }

}

export default usePrediction