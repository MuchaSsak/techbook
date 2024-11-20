import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import forgotPassword from "@/services/auth/forgotPassword";

function useForgotPassword() {
  const mutation = useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: (formData: { email: string }) => forgotPassword(formData),
  });

  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) toast.success("Sent the email!");
  }, [error, isSuccess]);

  return mutation;
}

export default useForgotPassword;
