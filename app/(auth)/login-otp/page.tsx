"use client";

import Link from "next/link";
import React from "react";

import EmailForm from "@/components/pages-ui/(auth)/EmailForm";
import LoginLink from "@/components/pages-ui/(auth)/LoginLink";
import Logo from "@/components/svg/Logo";
import useLoginOTP from "@/hooks/auth/useLoginOTP";

function LoginOTP() {
  const mutation = useLoginOTP();

  return (
    <>
      <Logo className="w-40" />
      <h1 className="font-serif text-5xl pt-4">Log in via OTP</h1>
      <h3 className="text-muted-foreground pb-4">
        Don&apos;t have an account?{" "}
        <Link className="light-link" href="/register">
          Register now
        </Link>
      </h3>

      <EmailForm {...mutation} />
      <LoginLink />
    </>
  );
}

export default LoginOTP;
