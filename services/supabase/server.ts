import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import {
  SUPABASE_PROJECT_URL,
  SUPABASE_PUBLIC_ANON_KEY,
} from "@/lib/constants";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY, {
    cookies: {
      async get(name: string) {
        return (await cookieStore).get(name)?.value;
      },
      async set(name: string, value: string, options: CookieOptions) {
        try {
          (await cookieStore).set({ name, value, ...options });
        } catch {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      async remove(name: string, options: CookieOptions) {
        try {
          (await cookieStore).set({ name, value: "", ...options });
        } catch {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
