import Link from "next/link";
import React from "react";

function OtherLinks() {
  return (
    <>
      <Link className="light-link pt-4" href="/login-otp">
        Log in via OTP
      </Link>
      <Link className="light-link" href="/forgot-password">
        Forgot password?
      </Link>
    </>
  );
}

export default OtherLinks;
