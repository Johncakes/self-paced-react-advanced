import styles from "./RestaurantList.module.css";
import RestaurantListItem from "./RestaurantListItem";
import getCategoryIcon from "../../../utils/getCategoryIcon";

export default function RestaurantList({
  filteredRestaurants,
  openModal,
  setSelectedRestaurant,
}) {
  const handleSelect = (restaurant) => {
    openModal();
    setSelectedRestaurant(restaurant);
  };

  return (
    <section className={`${styles["restaurant-list-container"]}`}>
      <ul className={`${styles["restaurant-list"]}`}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            icon={getCategoryIcon(restaurant.category)}
            onClick={() => handleSelect(restaurant)}
          />
        ))}
      </ul>
    </section>
  );
}
