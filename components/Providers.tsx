"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { Toaster } from "@/components/ui/sonner";
import { ShoppingCartProvider } from "@/contexts/ShoppingCart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />

      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default Providers;
