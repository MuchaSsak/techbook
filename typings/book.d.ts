type BookGenres =
  | "Romance"
  | "Mystery"
  | "Sci-Fi"
  | "Thriller"
  | "Biography"
  | "Comedy"
  | "True crime"
  | "Historical fiction"
  | "Children fiction"
  | "Absurdist fiction"
  | "Family saga"
  | "Fiction"
  | "Adventure"
  | "Fantasy";

type BookFromDB = {
  id: string;
  created_at: string;
  image_url: string;
  title: string;
  author: string;
  price: number;
  pages: number;
  genre: BookGenres;
};

interface BookFromShoppingCart extends BookFromDB {
  quantity: number;
}
