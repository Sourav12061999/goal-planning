import React, { useEffect } from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useGetUserMutation } from "../../../app/services/authApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { userAction } from "../../../app/features/user/userSlice";
import Link from "next/link";
function Signin() {
  const [getUserData, result] = useGetUserMutation();
  const userData = useSelector((state: RootState) => {
    return state.user;
  });
  const { getUser } = userAction;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("userid") != null && !userData.isSignedin) {
      getUserData(localStorage.getItem("userid") || "");
    }
  }, []);
  if (result.isSuccess) {
    dispatch(getUser({ email: result.data.email, name: result.data.name }));
  }

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      {!userData.isSignedin ? (
        <>
          <Link href={"/Authentication/signin"}>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
          </Link>
          <Link href={"/Authentication/signup"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Avatar size={"md"} name={userData.name} />
        </>
      )}
    </Stack>
  );
}

export default Signin;
