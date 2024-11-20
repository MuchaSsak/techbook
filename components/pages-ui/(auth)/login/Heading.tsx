import Link from "next/link";
import React from "react";

import Logo from "@/components/svg/Logo";

function Heading() {
  return (
    <>
      <Logo className="w-40" />
      <h1 className="font-serif text-5xl pt-4">Log in</h1>
      <h3 className="text-muted-foreground pb-4">
        Don&apos;t have an account?{" "}
        <Link className="light-link" href="/register">
          Register now
        </Link>
      </h3>
    </>
  );
}

export default Heading;
