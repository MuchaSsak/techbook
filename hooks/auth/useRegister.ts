import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

import register from "@/services/auth/register";

function useRegister() {
  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (formData: RegisterFormValues) => register(formData),
  });

  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) toast.success("Created your account!");
  }, [error, isSuccess]);

  return mutation;
}

export default useRegister;
