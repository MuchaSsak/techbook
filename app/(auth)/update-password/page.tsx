import React from "react";

import LoginLink from "@/components/pages-ui/(auth)/LoginLink";
import UpdatePasswordForm from "@/components/pages-ui/(auth)/update-password/UpdatePasswordForm";
import Logo from "@/components/svg/Logo";

function UpdatePassword() {
  return (
    <>
      <Logo className="w-40" />
      <h1 className="font-serif text-5xl pt-4">Change your password</h1>
      <h3 className="text-muted-foreground pb-4">Enter your new password</h3>

      <UpdatePasswordForm />
      <LoginLink />
    </>
  );
}

export default UpdatePassword;
