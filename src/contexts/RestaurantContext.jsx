import { createContext, useMemo } from "react";
import useRestaurants from "../hooks/useRestaurants.js";

export const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const { restaurants, onAddRestaurant } = useRestaurants();

  const value = useMemo(
    () => ({ restaurants, onAddRestaurant }),
    [restaurants, onAddRestaurant]
  );

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}
