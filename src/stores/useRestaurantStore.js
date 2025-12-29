import { getRestaurants, postRestaurant } from "../api/restaurants";
import { create } from "zustand";

export const useRestaurantStore = create((set) => ({
  restaurants: [],

  actions: {
    fetch: {
      fetchRestaurants: async () => {
        const data = await getRestaurants();
        set({ restaurants: data });
      },
    },
    add: {
      addRestaurant: async (restaurant) => {
        const newRestaurant = {
          ...restaurant,
          id: Date.now(),
        };
        await postRestaurant(newRestaurant);
      },
    },
  },
}));
