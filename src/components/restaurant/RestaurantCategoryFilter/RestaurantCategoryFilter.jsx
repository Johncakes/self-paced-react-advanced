import styles from "./RestaurantCategoryFilter.module.css";
import categories from "../../../constants/category";

export default function RestaurantCategoryFilter({
  category,
  onChangeCategory,
}) {
  return (
    <section className={`${styles["restaurant-filter-container"]}`}>
      <select
        name="category"
        id="category-filter"
        className={`${styles["restaurant-filter"]}`}
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
        aria-label="카테고리 필터"
      >
        {categories.map((categoryItem) => (
          <option key={categoryItem.key} value={categoryItem.value}>
            {categoryItem.value}
          </option>
        ))}
      </select>
    </section>
  );
}
