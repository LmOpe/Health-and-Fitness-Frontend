import { useQueryClient } from "@tanstack/react-query";

export function useGetQuery(key) {
  const queryClient = useQueryClient();
  const { data, status } = queryClient.getQueryData([key]);
  return { data, status };
}
