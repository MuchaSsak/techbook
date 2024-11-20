import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import updatePassword from "@/services/auth/updatePassword";

function useUpdatePassword() {
  const mutation = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: (newPassword: string) => updatePassword(newPassword),
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Updated your password!");
      router.push("/");
    }
  }, [error, isSuccess, router]);

  return mutation;
}

export default useUpdatePassword;
