import { PROJECT_URL } from "@/lib/constants";
import { createClient } from "@/services/supabase/client";

async function loginOTP({ email }: { email: string }) {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${PROJECT_URL}/verify-otp`,
        shouldCreateUser: false,
      },
    });

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default loginOTP;
