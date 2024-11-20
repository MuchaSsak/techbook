import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import logout from "@/services/auth/logout";

function useLogout() {
  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) router.refresh();
  }, [error, isSuccess, router]);

  return mutation;
}

export default useLogout;
