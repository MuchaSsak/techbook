import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import verifyOTP from "@/services/auth/verifyOTP";

function useVerifyOTP() {
  const mutation = useMutation({
    mutationKey: ["verifyOTP"],
    mutationFn: (tokenHash: string) => verifyOTP(tokenHash),
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Logged in successfully!");
      router.push("/");
    }
  }, [error, isSuccess, router]);

  return mutation;
}

export default useVerifyOTP;
