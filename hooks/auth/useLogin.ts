import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import login from "@/services/auth/login";

function useLogin() {
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (formData: LoginFormValues) => login(formData),
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

export default useLogin;
