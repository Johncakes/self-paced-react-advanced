import { useAddRestaurantMutation } from "../query/useRestaurantQuery";

export default function useRestaurantActions() {
  const {
    mutate: addRestaurantMutation,
    isPending,
    error,
    variables,
  } = useAddRestaurantMutation();

  const onAddRestaurant = (restaurant) => {
    return addRestaurantMutation({
      ...restaurant,
      id: Date.now(),
    });
  };

  return {
    onAddRestaurant,
    isPending,
    error,
    variables,
  };
}
