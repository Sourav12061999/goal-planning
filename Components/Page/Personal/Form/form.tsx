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
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { ExpenseType } from "../Expenses/expense.types";
import Expenses from "../Expenses/expenses";
import {BsPlusLg} from "react-icons/bs";
export default function Form() {
  const [expenseState, setExpenseState] = useState<Array<ExpenseType>>([
    {
      expense: "My Expense",
      amount: 100,
      id: Date.now(),
    },
  ]);
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={3} px={6}>
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
                  <Input type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Retirement Age</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="sallary" isRequired>
              <FormLabel>Current Monthly Sallary(After Tax)</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="increment" isRequired>
              <FormLabel>Yearly Increment</FormLabel>
              <InputGroup>
                <Input type="number" placeholder="Increment" />
                <InputRightElement
                  pointerEvents="none"
                  children={<AiOutlinePercentage color="gray.300" />}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
            <HStack  style={{marginBottom:"30px"}}>
                <Text fontSize={"2xl"}>Add Your Monthly Expenses</Text>
                <Button onClick={() =>{
                    setExpenseState([...expenseState,{
                        expense:"My Expense",
                        amount:100,
                        id:Date.now(),
                    }])
                }} colorScheme={"blue"} leftIcon={<BsPlusLg/>}></Button>
            </HStack>
            {expenseState.map((element) => (
              <React.Fragment>
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
