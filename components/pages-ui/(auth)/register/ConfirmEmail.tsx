import { ArrowLeft, AtSign } from "lucide-react";
import Link from "next/link";
import React from "react";

import Logo from "@/components/svg/Logo";
import { Button } from "@/components/ui/button";

function ConfirmEmail({ email }: { email: string }) {
  return (
    <>
      <Logo className="w-40" />
      <AtSign className="size-32 mx-auto pt-4 stroke-[1.15]" />
      <h1 className="font-serif text-5xl text-center">Confirm email</h1>
      <h3 className="text-muted-foreground pb-4 text-center text-balance max-w-[40ch]">
        We&apos;ve sent a confirmation link to{" "}
        <Link href={`mailto:${email}`} target="_blank" className="light-link">
          {email}
        </Link>
        . Enter it in order to verify your email
      </h3>

      <Link href={`mailto:${email}`} target="_blank" tabIndex={-1}>
        <Button variant="secondary" className="sm:w-[28rem] max-sm:w-full">
          Go to inbox
        </Button>
      </Link>

      <Link className="light-link flex items-center gap-1.5 pt-4" href="login">
        <ArrowLeft className="h-5" /> Return to log in
      </Link>
    </>
  );
}

export default ConfirmEmail;
