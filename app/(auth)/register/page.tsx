"use client";

import React, { useState } from "react";

import ConfirmEmail from "@/components/pages-ui/(auth)/register/ConfirmEmail";
import Heading from "@/components/pages-ui/(auth)/register/Heading";
import RegisterForm from "@/components/pages-ui/(auth)/register/RegisterForm";
import ToS from "@/components/pages-ui/(auth)/ToS";

function Register() {
  const [emailToConfirm, setEmailToConfirm] = useState("");

  return (
    <>
      {emailToConfirm ? (
        <ConfirmEmail email={emailToConfirm} />
      ) : (
        <>
          <Heading />
          <RegisterForm setEmail={setEmailToConfirm} />
          <ToS />
        </>
      )}
    </>
  );
}

export default Register;
