import { COUNTRIES } from "@/lib/constants";

type OrderFromCheckout = {
  country: (typeof COUNTRIES)[number];
  address: string;
  postal_code: string;
};

interface OrderToDB extends OrderFromCheckout {
  user_id: string;
  books_id: string[];
}
