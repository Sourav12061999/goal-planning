import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { ExpenseType } from "../Expenses/expense.types";
import Expenses from "../Expenses/expenses";
import { BsPlusLg } from "react-icons/bs";
export default function Form() {
  const [expenseState, setExpenseState] = useState<Array<ExpenseType>>([
    {
      expense: "My Expense",
      amount: 100,
      id: Date.now(),
      increment: 0,
    },
  ]);
  const [formState, setFormState] = useState({
    currAge:20,
    retirementAge:60,
    currSallary:20000,
    yearlyIncrement:10,
    monthlyExpense:expenseState
  })
  useEffect(() => {
    setFormState({...formState,monthlyExpense:expenseState})
  }, [expenseState])
  
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFormState({ ...formState, [key]: +event.target.value });
  };
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={3} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Enter The Details
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            see the power of compounding ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Current Age</FormLabel>
                  <Input onChange={(e) =>{
                     inputHandler(e,"currAge")
                  }} type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Retirement Age</FormLabel>
                  <Input onChange={(e) =>{
                     inputHandler(e,"retirementAge")
                  }}  type="number" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="sallary" isRequired>
              <FormLabel>Current Monthly Sallary(After Tax)</FormLabel>
              <Input onChange={(e) =>{
                     inputHandler(e,"currSallary")
                  }}  type="number" />
            </FormControl>
            <FormControl id="increment" isRequired>
              <FormLabel>Yearly Increment</FormLabel>
              <InputGroup>
                <Input type="number" onChange={(e) =>{
                     inputHandler(e,"yearlyIncrement")
                  }} placeholder="Increment" />
                <InputRightElement
                  pointerEvents="none"
                  children={<AiOutlinePercentage color="gray.300" />}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <HStack style={{ marginBottom: "30px" }}>
                <Text fontSize={"2xl"}>Add Your Monthly Expenses</Text>
                <Button
                  onClick={() => {
                    setExpenseState([
                      ...expenseState,
                      {
                        expense: "My Expense",
                        amount: 100,
                        id: Date.now(),
                        increment: 0,
                      },
                    ]);
                  }}
                  colorScheme={"blue"}
                  leftIcon={<BsPlusLg />}
                ></Button>
              </HStack>
              {expenseState.map((element) => (
                <React.Fragment key={element.id}>
                  <Expenses expense={element} setExpenses={setExpenseState} />
                </React.Fragment>
              ))}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={(()=> console.log(formState)
                )}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
