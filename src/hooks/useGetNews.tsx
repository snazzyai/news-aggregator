import { getNews } from "services/api/news";
import { useQuery } from "@tanstack/react-query";

export default function useGetNews() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getNews,
  });

  return { isPending, isError, data, error };
}
