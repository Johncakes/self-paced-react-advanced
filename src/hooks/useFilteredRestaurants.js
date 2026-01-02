import { useMemo } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";
import useRestaurantsData from "./useRestaurantsData.js";
import { useCategoryStore } from "../stores/useCategoryStore.js";

export default function useFilteredRestaurants() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const { restaurants } = useRestaurantsData();

  const filtered = useMemo(
    () => getFilteredRestaurant(restaurants, selectedCategory),
    [restaurants, selectedCategory]
  );

  return filtered;
}
