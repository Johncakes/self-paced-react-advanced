import {
  useRestaurantQuery,
  useAddRestaurantMutation,
} from "../query/useRestaurantQuery";

export default function useRestaurants() {
  const restaurants = useRestaurantQuery().data || [];
  const addRestaurantMutation = useAddRestaurantMutation();

  const onAddRestaurant = (restaurant) => {
    return addRestaurantMutation.mutateAsync({
      ...restaurant,
      id: Date.now(),
    });
  };

  return {
    restaurants,
    onAddRestaurant,
  };
}
