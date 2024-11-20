import Link from "next/link";
import React from "react";

import Logo from "@/components/svg/Logo";

function Heading() {
  return (
    <>
      <Logo className="w-40" />
      <h1 className="font-serif text-5xl pt-4">Create account</h1>
      <h3 className="text-muted-foreground pb-4">
        Already have an account?{" "}
        <Link className="light-link" href="/login">
          Log in
        </Link>
      </h3>
    </>
  );
}

export default Heading;
