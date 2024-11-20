"use client";

import React from "react";

import BookCard from "@/components/pages-ui/(main)/BookCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Separator } from "@/components/ui/separator";
import { useShoppingCart } from "@/contexts/ShoppingCart";
import useBooks from "@/hooks/books/useBooks";

function Home() {
  const { data: books, isLoading } = useBooks();
  const { dispatch } = useShoppingCart();

  return (
    <>
      <h1 className="text-3xl font-serif">Browse books</h1>
      <Separator className="mt-3 mb-6" />

      {isLoading && <LoadingSpinner />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] justify-center gap-8">
        {books?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={() =>
              dispatch({ type: "shoppingCart/books/add", payload: book })
            }
          />
        ))}
      </div>
    </>
  );
}

export default Home;
