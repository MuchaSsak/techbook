import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function OtherLinks() {
  return (
    <Link className="light-link flex items-center gap-1.5 pt-4" href="/login">
      <ArrowLeft className="h-5" /> Return to log in
    </Link>
  );
}

export default OtherLinks;
