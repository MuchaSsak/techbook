import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import loginOTP from "@/services/auth/loginOTP";

function useLoginOTP() {
  const mutation = useMutation({
    mutationKey: ["loginOTP"],
    mutationFn: (formData: { email: string }) => loginOTP(formData),
  });

  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) toast.success("Sent the email!");
  }, [error, isSuccess]);

  return mutation;
}

export default useLoginOTP;
