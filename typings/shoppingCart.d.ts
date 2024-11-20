type ShoppingCartState = {
  books: BookFromShoppingCart[];
};

type ShoppingCartAction = {
  type: ShoppingCartActionTypes;
  payload?: any;
};

type ShoppingCartActionTypes =
  | "shoppingCart/load/initialState"
  | "shoppingCart/load/storedState"
  | "shoppingCart/clear"
  | "shoppingCart/books/add"
  | "shoppingCart/books/delete"
  | "shoppingCart/books/increment"
  | "shoppingCart/books/decrement";
