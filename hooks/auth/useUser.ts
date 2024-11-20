import { useQuery } from "@tanstack/react-query";

import user from "@/services/auth/user";

function useUser() {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => user(),
  });

  return query;
}

export default useUser;
