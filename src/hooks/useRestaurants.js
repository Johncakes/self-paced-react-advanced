import { useShallow } from "zustand/shallow";
import { useRestaurantStore } from "../stores/useRestaurantStore";

export default function useRestaurants() {
  const { restaurants, fetch, add } = useRestaurantStore(
    useShallow((state) => ({
      restaurants: state.restaurants,
      fetch: state.actions.fetch.fetchRestaurants,
      add: state.actions.add.addRestaurant,
    }))
  );

  const onAddRestaurant = async (restaurant) => {
    await add(restaurant);
    await fetch();
  };

  return {
    restaurants,
    fetchRestaurants: fetch,
    onAddRestaurant,
  };
}
