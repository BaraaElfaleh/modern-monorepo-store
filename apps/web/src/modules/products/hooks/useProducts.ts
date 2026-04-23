import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductService.getAll,
  });
};