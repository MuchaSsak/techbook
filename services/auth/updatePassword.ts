import { createClient } from "@/services/supabase/client";

async function updatePassword(password: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default updatePassword;
