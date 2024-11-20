"use client";

import { ArrowLeft, ArrowRight, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useShoppingCart } from "@/contexts/ShoppingCart";

function ShoppingCartItem({ book }: { book: BookFromShoppingCart }) {
  const { dispatch } = useShoppingCart();

  return (
    <Card className="flex">
      <CardContent className="p-0 max-xl:hidden">
        <Image
          className="h-48 object-cover mx-auto"
          src={book.image_url}
          alt="Book cover"
          width={250}
          height={300}
        />
      </CardContent>
      <CardHeader className="flex-grow justify-between">
        <div>
          <CardTitle className="text-2xl">{book.title}</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <span className="text-xl text-foreground/60">{book.author}</span>
            <span className="text-lg italic">
              {book.genre} • {book.pages} pages
            </span>
          </CardDescription>
        </div>

        <div className="items-center flex justify-between gap-2 max-xs:flex-col max-xs:items-start max-xs:pt-4">
          <h3 className="text-xl font-medium w-max">
            {book.quantity > 1
              ? `$${book.price} • (${book.quantity}x)`
              : `$${book.price}`}
          </h3>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                dispatch({
                  type: "shoppingCart/books/decrement",
                  payload: book.id,
                })
              }
            >
              <ArrowLeft />
            </Button>
            <span className="font-medium text-lg">{book.quantity}x</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                dispatch({
                  type: "shoppingCart/books/increment",
                  payload: book.id,
                })
              }
            >
              <ArrowRight />
            </Button>

            <Button
              variant="destructive"
              className="ml-3"
              size="icon"
              onClick={() =>
                dispatch({
                  type: "shoppingCart/books/delete",
                  payload: book.id,
                })
              }
            >
              <Trash />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default ShoppingCartItem;
