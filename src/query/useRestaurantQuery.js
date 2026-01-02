import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRestaurants, postRestaurant } from "../api/restaurants";

const RESTAURANTS_QUERY_KEY = ["restaurants"];

export function useRestaurantQuery() {
  return useQuery({
    queryKey: RESTAURANTS_QUERY_KEY,
    queryFn: getRestaurants,
  });
}

export function useAddRestaurantMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRestaurant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESTAURANTS_QUERY_KEY });
    },
    mutationKey: ["addRestaurant"],
  });
}
