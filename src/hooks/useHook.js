import { useQuery } from "@tanstack/react-query";

import FetchData from "../api/query";

export const useHook = () =>
  useQuery({
    queryKey: ["photos"],
    queryFn: FetchData,
  });
