import React from "react";
import { HStack, Box, FormControl, FormLabel, Input,Button } from "@chakra-ui/react";
import {MdDelete} from "react-icons/md";
import {ExpenseType} from "./expense.types"
interface Props{
    setExpenses:Function,
    expense:ExpenseType,
}
function Expenses({expense,setExpenses}:Props) {
  return (
    <HStack align={"flex-end"}>
      <Box>
        <FormControl  isRequired>
          <FormLabel>Expense</FormLabel>
          <Input value={expense.expense} type="text" />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="lastName" isRequired>
          <FormLabel>Amount</FormLabel>
          <Input value={expense.amount} type="number" />
        </FormControl>
      </Box>
      <Box>
        <Button onClick={() =>{
            setExpenses((prev:Array<ExpenseType>) =>{
                return prev.filter((el) =>{
                    return el.id != expense.id;
                })
            })
        }} leftIcon={<MdDelete/>}></Button>
      </Box>
    </HStack>
  );
}

export default Expenses;
