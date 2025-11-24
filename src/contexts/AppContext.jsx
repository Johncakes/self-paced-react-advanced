import { createContext } from "react";
import { useMemo, useState } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant";
import useRestaurants from "../hooks/useRestaurants";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [selectedCategory, setCategory] = useState("전체");
  const { restaurants, onAddRestaurant } = useRestaurants();
  const filteredRestaurants = useMemo(() => {
    return getFilteredRestaurant(restaurants, selectedCategory);
  }, [restaurants, selectedCategory]);

  const value = {
    selectedCategory,
    setCategory,
    restaurants,
    onAddRestaurant,
    filteredRestaurants,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
