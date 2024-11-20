import Link from "next/link";
import React from "react";

function ToS() {
  return (
    <p className="text-muted-foreground pt-4 text-xs sm:w-[50ch]">
      By clicking &quot;Continue with Google/GitHub&quot; above, you acknowledge
      that this is just a school project made by{" "}
      <Link
        className="light-link text-muted-foreground"
        href="https://github.com/MuchaSsak/"
        target="_blank"
      >
        Mateusz Muszarski
      </Link>{" "}
      and there aren&apos;t any General Terms and Conditions nor any Privacy
      Policy to agree to.
    </p>
  );
}

export default ToS;
