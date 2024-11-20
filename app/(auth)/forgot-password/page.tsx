"use client";

import React from "react";

import EmailForm from "@/components/pages-ui/(auth)/EmailForm";
import LoginLink from "@/components/pages-ui/(auth)/LoginLink";
import Logo from "@/components/svg/Logo";
import useForgotPassword from "@/hooks/auth/useForgotPassword";

function ForgotPassword() {
  const mutation = useForgotPassword();

  return (
    <>
      <Logo className="w-40" />
      <h1 className="font-serif text-5xl pt-4">Forgot password</h1>
      <h3 className="text-muted-foreground pb-4">
        Enter your email to reset your password
      </h3>

      <EmailForm {...mutation} />
      <LoginLink />
    </>
  );
}

export default ForgotPassword;
