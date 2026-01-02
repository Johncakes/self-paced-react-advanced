import { useAddRestaurantMutation } from "../query/useRestaurantQuery";

export default function useRestaurantActions() {
  const {
    mutateAsync: addRestaurant,
    isPending,
    error,
  } = useAddRestaurantMutation();

  const onAddRestaurant = (restaurant) => {
    return addRestaurant({
      ...restaurant,
      id: Date.now(),
    });
  };

  return {
    addRestaurant: onAddRestaurant,
    isAdding: isPending,
    addError: error,
  };
}
