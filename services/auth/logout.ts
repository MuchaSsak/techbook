import { createClient } from "@/services/supabase/client";

async function login() {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default login;
