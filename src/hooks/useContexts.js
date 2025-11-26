import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext.jsx";
import { CategoryContext } from "../contexts/CategoryContext.jsx";

export const useRestaurantContext = () => {
  return useContext(RestaurantContext);
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
