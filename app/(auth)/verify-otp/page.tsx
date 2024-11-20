"use client";

import { PackageCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

import LoginLink from "@/components/pages-ui/(auth)/LoginLink";
import Logo from "@/components/svg/Logo";
import { Button } from "@/components/ui/button";
import useVerifyOTP from "@/hooks/auth/useVerifyOTP";

function VerifyOTP() {
  const searchParams = useSearchParams();
  const { mutate, isPending } = useVerifyOTP();
  const otpToken = searchParams.get("token_hash") ?? "";

  return (
    <>
      <Logo className="w-40" />
      <PackageCheck className="size-32 mx-auto pt-4 stroke-[1.15]" />
      <h1 className="font-serif text-5xl text-center">Verify your OTP</h1>
      <h3 className="text-muted-foreground pb-4 text-center">
        Click the button below to verify your OTP code
      </h3>

      <Button
        variant="secondary"
        onClick={() => mutate(otpToken)}
        className="sm:w-[28rem] max-sm:w-full"
        disabled={isPending}
      >
        Log in
      </Button>

      <LoginLink />
    </>
  );
}

export default VerifyOTP;
