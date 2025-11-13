import styles from "./RestaurantList.module.css";

export default function RestaurantListItem({ restaurant, icon, onClick }) {
  return (
    <li className={`${styles["restaurant"]}`}>
      <button className={`${styles["restaurant-button"]}`} onClick={onClick}>
        <div className={`${styles["restaurant__category"]}`}>
          <img
            src={icon}
            alt={restaurant.category}
            className={`${styles["category-icon"]}`}
          />
        </div>
        <div className={`${styles["restaurant__info"]}`}>
          <h3 className={`${styles["restaurant__name"]} text-subtitle`}>
            {restaurant.name}
          </h3>
          <p className={`${styles["restaurant__description"]} text-body`}>
            {restaurant.description}
          </p>
        </div>
      </button>
    </li>
  );
}
