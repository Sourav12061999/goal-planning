import React from "react";
import type { NextPage } from "next";
import Form from "../../Components/Paged/Authentication/form";
import Head from "next/head";
const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ paddingTop: "5%" }}>
        <Form/>
      </main>
    </>
  );
};

export default Signin;
