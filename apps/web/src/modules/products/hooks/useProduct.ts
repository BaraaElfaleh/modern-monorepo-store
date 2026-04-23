import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/service";

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => ProductService.getById(id),
    enabled: !!id,
  });
};