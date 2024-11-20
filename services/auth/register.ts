import { createClient } from "@/services/supabase/client";

async function register({
  firstName,
  lastName,
  email,
  password,
}: RegisterFormValues) {
  const supabase = createClient();

  // 1) Check if email is unique
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .or(`email.ilike.${email}`);

    if (error) throw error;
    if (data.length > 0) throw new Error("Email is already taken!");
  } catch (err) {
    console.error(err);
    throw err;
  }

  // 2) Create account
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      // Store the rest of the information in user's raw metadata
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default register;
