import { useCategory } from "../contexts/CategoryContext.jsx";
import { useRestaurant } from "../contexts/RestaurantContext.jsx";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";

export default function useFilteredRestaurants() {
  const { selectedCategory } = useCategory();
  const { restaurants } = useRestaurant();

  const filtered = getFilteredRestaurant(restaurants, selectedCategory);

  return filtered;
}
