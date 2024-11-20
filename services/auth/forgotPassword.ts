import { PROJECT_URL } from "@/lib/constants";
import { createClient } from "@/services/supabase/client";

async function forgotPassword({ email }: { email: string }) {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${PROJECT_URL}/update-password`,
    });

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default forgotPassword;
