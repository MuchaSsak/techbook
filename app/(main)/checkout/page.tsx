"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import CheckoutForm from "@/components/pages-ui/(main)/checkout/CheckoutForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useShoppingCart } from "@/contexts/ShoppingCart";

function Checkout() {
  const router = useRouter();
  const { shoppingCart } = useShoppingCart();

  return (
    <>
      <h1 className="text-3xl font-serif">Checkout</h1>
      <Separator className="my-3" />

      {shoppingCart.books.length === 0 ? (
        <>
          <h3 className="text-muted-foreground italic text-lg py-3">
            Your shopping cart is empty!
          </h3>
          <Button variant="link" onClick={() => router.back()}>
            <ArrowLeft /> Go back
          </Button>
        </>
      ) : (
        <>
          <p className="pb-3 text-muted-foreground sm:w-[28rem]">
            Your name and contact information will be inserted into the order
            automatically.
          </p>
          <CheckoutForm />
        </>
      )}
    </>
  );
}

export default Checkout;
