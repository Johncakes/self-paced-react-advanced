import { useState, useEffect } from "react";
import { getRestaurants, postRestaurant } from "../api/restaurants";

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  };

  const addRestaurant = async (restaurant) => {
    const newRestaurant = {
      ...restaurant,
      id: Date.now(),
    };

    await postRestaurant(newRestaurant);
  };

  const onAddRestaurant = async (restaurants) => {
    await addRestaurant(restaurants);
    await fetchRestaurants();
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, onAddRestaurant };
}
