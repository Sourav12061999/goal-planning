import React from "react";
import {
  HStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ExpenseType } from "./expense.types";
interface Props {
  setExpenses: Function;
  expense: ExpenseType;
  expenses:Array<ExpenseType>,
}
function Expenses({ expense, setExpenses,expenses }: Props) {
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: "expense" | "amount" | "increment"
  ) => {
    const index = expenses.findIndex((el) => el.id === expense.id);
      console.log(index);
    setExpenses(expenses.map((el,i) =>{
     if(index ===i){
       if(key ==="expense"){
        return {...el,[key]:event.target.value}
       }else{
        return {...el,[key]:+event.target.value}
       }
     }else{
      return el;
     }
    }));
  };
  return (
    <HStack align={"flex-end"}>
      <Box>
        <FormControl isRequired>
          <FormLabel>Expense</FormLabel>
          <Input onChange={(e) => {
            inputHandler(e,"expense")
          }} value={expense.expense} type="text" />
        </FormControl>
      </Box>
      <Box>
        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input onChange={(e) => inputHandler(e,"amount")} value={expense.amount} type="number" />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="increment" isRequired>
          <FormLabel>Yearly Increment</FormLabel>
          <InputGroup>
            <Input
            onChange={(e) => inputHandler(e,"increment")}
              value={expense.increment}
              type="number"
              placeholder="Increment"
            />
            <InputRightElement
              pointerEvents="none"
              children={<AiOutlinePercentage color="gray.300" />}
            />
          </InputGroup>
        </FormControl>
      </Box>
      <Box>
        <Button
          onClick={() => {
            setExpenses((expenses: Array<ExpenseType>) => {
              return expenses.filter((el) => {
                return el.id != expense.id;
              });
            });
          }}
          leftIcon={<MdDelete />}
        ></Button>
      </Box>
    </HStack>
  );
}

export default Expenses;
