"use client";

import { ShoppingCart, Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

import Logo from "@/components/svg/Logo";
import { Button } from "@/components/ui/button";
import PingIndicator from "@/components/ui/PingIndicator";
import { useShoppingCart } from "@/contexts/ShoppingCart";
import useLogout from "@/hooks/auth/useLogout";

function NavBar() {
  const { mutate, isPending } = useLogout();
  const { shoppingCart } = useShoppingCart();

  return (
    <nav className="bg-secondary h-16 w-full sticky left-0 top-0 py-5 max-xl:px-24 max-sm:px-6 max-2xl:px-48 2xl:px-72 flex items-center justify-end gap-6">
      <Link href="/" className="h-full mr-auto max-sm:hidden">
        <Logo color="black" className="h-full" />
      </Link>
      <Link href="/shopping-cart" className="relative">
        {shoppingCart.books.length > 0 && <PingIndicator />}
        <ShoppingCart />
      </Link>
      <Link href="/checkout">
        <Wallet />
      </Link>
      <Button onClick={() => mutate()} disabled={isPending}>
        Log out
      </Button>
    </nav>
  );
}

export default NavBar;
