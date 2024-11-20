import { createClient } from "@/services/supabase/client";

async function user() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw error;
    return data.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default user;
