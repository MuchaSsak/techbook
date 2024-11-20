"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import ShoppingCartItem from "@/components/pages-ui/(main)/shopping-cart/ShoppingCartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useShoppingCart } from "@/contexts/ShoppingCart";

function ShoppingCart() {
  const router = useRouter();
  const { shoppingCart } = useShoppingCart();

  return (
    <>
      <h1 className="text-3xl font-serif">Your cart</h1>
      <Separator className="mt-3 mb-6" />

      {shoppingCart.books.length === 0 ? (
        <>
          <h3 className="text-muted-foreground italic text-lg pb-3">
            There is nothing to show here
          </h3>
          <Button variant="link" onClick={() => router.back()}>
            <ArrowLeft /> Go back
          </Button>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center gap-4">
            {shoppingCart.books
              .sort((a: BookFromShoppingCart, b: BookFromShoppingCart) =>
                ("" + a.title).localeCompare(b.title)
              )
              .map((book: BookFromShoppingCart) => (
                <ShoppingCartItem book={book} key={book.id} />
              ))}
          </div>

          <div className="my-12 bg-secondary py-4 px-10 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <h1 className="text-3xl font-serif">
              Total: $
              {shoppingCart.books
                .reduce(
                  (acc: number, cur: BookFromShoppingCart) =>
                    acc + cur.price * cur.quantity,
                  0
                )
                .toFixed(2)}
            </h1>

            <Link href="/checkout" tabIndex={-1}>
              <Button>Proceed to checkout</Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
