import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSigninMutation } from "../../../app/services/authApi";
import { userDataType } from "../../../GlobalTypes";
import React, { useState , useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {authApi} from "../../../app/services/authApi";
import {RootState} from "../../../app/store";
import { useRouter } from "next/router";
import { userAction } from "../../../app/features/user/userSlice";
import RenderResult from "next/dist/server/render-result";
export default function Signin() {
  const [signinData, setSigninData] = useState<userDataType>({
    email: "",
    password: "",
  });
  const [SigninSubmit,result] = useSigninMutation();
  const updateForm = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setSigninData({ ...signinData, [key]: event.target.value.trim() });
  };
  const signinDataRedux = useSelector((state:RootState) =>{
    return state.user;
  })
  const dispatch = useDispatch();
  const router = useRouter();
  const { getUser} = userAction;
  useEffect(() => {
    if(result.isSuccess && result.data && result.data.id){
      localStorage.setItem("userid",result.data.id);
      dispatch(getUser({name:result.data.name,email:result.data.email}));
    }
    if(result.isError){
      console.log('Error');
    }
  }, [result])
  useEffect(() => {
    if(signinDataRedux.isSignedin){
     router.replace("/");
    }
  }, [signinDataRedux.isSignedin])
  
  
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  updateForm(event, "email");
                }}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  updateForm(event, "password");
                }}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() =>{
                  SigninSubmit(signinData);
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
