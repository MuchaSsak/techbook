import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "sonner";

const initialState: ShoppingCartState = {
  books: [],
};

export const ShoppingCartContext = createContext(initialState);

function reducer(state: ShoppingCartState, action: ShoppingCartAction) {
  switch (action.type) {
    case "shoppingCart/load/initialState": {
      return initialState;
    }

    case "shoppingCart/load/storedState": {
      return {
        ...state,
        books: action.payload.books,
      };
    }

    case "shoppingCart/clear": {
      localStorage.removeItem("shoppingCart");
      return initialState;
    }

    case "shoppingCart/books/add": {
      let newShoppingCart: ShoppingCartState = { ...state };

      // Check if there is already an identical book in cart
      const sameBook = state.books.find(
        (book) => book.id === action.payload.id
      );
      if (sameBook) {
        newShoppingCart = {
          ...state,
          books: [
            ...state.books.filter((book) => book.id !== sameBook.id),
            { ...sameBook, quantity: sameBook.quantity + 1 },
          ],
        };
      } else {
        newShoppingCart = {
          ...state,
          books: [...state.books, { ...action.payload, quantity: 1 }],
        };
      }

      localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
      toast.success("Added the book to your shopping cart!");
      return newShoppingCart;
    }

    case "shoppingCart/books/delete": {
      const newShoppingCart: ShoppingCartState = {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

      localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
      toast.success("Removed the book from your shopping cart!");
      return newShoppingCart;
    }

    case "shoppingCart/books/increment": {
      const sameBook = state.books.find((book) => book.id === action.payload);
      if (!sameBook) return;

      const newShoppingCart: ShoppingCartState = {
        ...state,
        books: [
          ...state.books.filter((book) => book.id !== action.payload),
          { ...sameBook, quantity: sameBook.quantity + 1 },
        ],
      };

      localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
      return newShoppingCart;
    }

    case "shoppingCart/books/decrement": {
      const sameBook = state.books.find((book) => book.id === action.payload);
      if (!sameBook || sameBook.quantity === 1) return state;

      const newShoppingCart: ShoppingCartState = {
        ...state,
        books: [
          ...state.books.filter((book) => book.id !== action.payload),
          { ...sameBook, quantity: sameBook.quantity - 1 },
        ],
      };

      localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
      return newShoppingCart;
    }

    default: {
      throw new Error("Unknown dispatch action type");
    }
  }
}

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shoppingCart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedState = JSON.parse(
      localStorage.getItem("shoppingCart") ?? "null"
    );

    if (storedState === null)
      dispatch({ type: "shoppingCart/load/initialState" });
    if (storedState !== null)
      dispatch({
        type: "shoppingCart/load/storedState",
        payload: storedState,
      });
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined)
    throw new Error("useShoppingCart used outside of ShoppingCardProvider");
  return context;
}
