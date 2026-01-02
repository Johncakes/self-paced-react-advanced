import { useRestaurantQuery } from "../query/useRestaurantQuery";

export default function useRestaurantsData() {
  const { data: restaurants = [], isLoading, error } = useRestaurantQuery();

  return {
    restaurants,
    isLoading,
    error,
  };
}
