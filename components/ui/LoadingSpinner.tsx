import React, { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps extends ComponentProps<"div"> {
  className?: string;
}

function LoadingSpinner({ className, ...props }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "inline-block size-16 animate-spin rounded-full border-4 border-solid border-foreground border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      )}
      role="status"
      {...props}
    />
  );
}

export default LoadingSpinner;
