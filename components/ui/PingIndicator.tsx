import React from "react";

function PingIndicator() {
  return (
    <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-foreground/90" />
      </span>
    </div>
  );
}

export default PingIndicator;
