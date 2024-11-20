import React from "react";

import Heading from "@/components/pages-ui/(auth)/login/Heading";
import LoginForm from "@/components/pages-ui/(auth)/login/LoginForm";
import OtherLinks from "@/components/pages-ui/(auth)/login/OtherLinks";
import ToS from "@/components/pages-ui/(auth)/ToS";

function Login() {
  return (
    <>
      <Heading />
      <LoginForm />
      <OtherLinks />
      <ToS />
    </>
  );
}

export default Login;
