import { useMemo } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";
// import { useRestaurants } from "../stores/useRestaurantStore.js";
import useRestaurants from "./useRestaurants.js";
import { useCategoryStore } from "../stores/useCategoryStore.js";

export default function useFilteredRestaurants() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const { restaurants } = useRestaurants();

  const filtered = useMemo(
    () => getFilteredRestaurant(restaurants, selectedCategory),
    [restaurants, selectedCategory]
  );

  return filtered;
}
