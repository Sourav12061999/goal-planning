import React, { useEffect, useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useGetUserQuery } from "../../../app/services/authApi";
function Signin() {
  const [userID, setUserID] = useState<string | null>(null);
  const { data, error, isLoading, isFetching, isSuccess } = useGetUserQuery(
    userID || "",
    {
      skip: userID ? false : true,
    }
  );
  console.log(data);
  
  useEffect(() => {
    if (localStorage.getItem("userid") != null) {
      setUserID(localStorage.getItem("userid"));
    }
  }, []);

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      {
        !data?(<>
        <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
      >
        Sign In
      </Button>
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
        </>):(
          <>
           <Avatar size={"md"} name={data?.name}/>
          </>
        )
      }
    </Stack>
  );
}

export default Signin;
