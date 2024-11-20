import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function BookCard({
  book,
  onAddToCart,
}: {
  book: BookFromDB;
  onAddToCart: () => void;
}) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <CardContent className="px-0">
          <Image
            className="h-96 object-cover mx-auto"
            src={book.image_url}
            alt="Book cover"
            width={250}
            height={300}
          />
        </CardContent>
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-serif">{book.title}</CardTitle>
          <CardDescription>{book.author}</CardDescription>
          <h3 className="text-xl font-medium">${book.price}</h3>
        </CardHeader>
      </div>

      <CardFooter className="flex-col gap-4">
        <Separator />
        <Button className="w-full" onClick={() => onAddToCart()}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookCard;
