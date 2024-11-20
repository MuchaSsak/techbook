import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import books from "@/services/books/books";

function useBooks() {
  const query = useQuery({
    queryKey: ["books"],
    queryFn: () => books(),
  });

  const { error } = query;

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  return query;
}

export default useBooks;
