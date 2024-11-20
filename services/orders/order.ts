import { createClient } from "@/services/supabase/client";
import type { OrderToDB } from "@/typings/order";

async function order(order: OrderToDB) {
  const supabase = createClient();

  try {
    const { error } = await supabase.from("orders").insert([order]);

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default order;
