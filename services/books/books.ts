import { createClient } from "@/services/supabase/client";

async function books() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.from("books").select("*");

    if (error) throw error;

    const booksFromDB: BookFromDB[] = data;
    return booksFromDB;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default books;
