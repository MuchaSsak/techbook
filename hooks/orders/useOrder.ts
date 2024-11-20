import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import { useShoppingCart } from "@/contexts/ShoppingCart";
import useUser from "@/hooks/auth/useUser";
import order from "@/services/orders/order";
import type { OrderFromCheckout } from "@/typings/order";

function useOrder() {
  const { data: user } = useUser();
  const { shoppingCart, dispatch } = useShoppingCart();
  const booksIdsTotal: string[] = [];
  shoppingCart.books.forEach((book: BookFromShoppingCart) => {
    for (let i = 0; i < book.quantity; i++) {
      booksIdsTotal.push(book.id);
    }
  });

  const mutation = useMutation({
    mutationKey: ["order"],
    mutationFn: (formData: OrderFromCheckout) =>
      order({
        user_id: user!.id,
        books_id: [...booksIdsTotal],
        ...formData,
      }),
  });

  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Successfully placed your order!");
      dispatch({ type: "shoppingCart/clear" });
    }
  }, [error, isSuccess, dispatch]);

  return mutation;
}

export default useOrder;
