import { createClient } from "@/services/supabase/client";

async function loginOTP(tokenHash: string) {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "magiclink",
    });

    if (error) throw error;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default loginOTP;
