import { Check } from "lucide-react";
import React from "react";

function PasswordFeedback({ password }: { password: string }) {
  const isEightCharacters = password.length >= 8;
  const isOneNumber = new RegExp(/(.*\d.*)/).test(password);
  const isOneSpecial = new RegExp(/(.*\W.*)/).test(password);
  const checks = [
    { text: "At least 8 characters", isMet: isEightCharacters },
    { text: "At least one number (0-9)", isMet: isOneNumber },
    { text: "At least one special character", isMet: isOneSpecial },
  ];

  return (
    <>
      {checks.map(({ text, isMet }) => (
        <span
          key={text}
          className={`col-span-2 text-sm flex items-center ${
            isMet ? "text-background" : "text-muted-foreground"
          }`}
        >
          <Check
            className={`h-6 stroke-[1.5] mr-2 ${
              isMet ? "stroke-green-500" : "stroke-muted-foreground"
            }`}
          />{" "}
          {text}
        </span>
      ))}
    </>
  );
}

export default PasswordFeedback;
