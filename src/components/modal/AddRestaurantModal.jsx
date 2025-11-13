import { useState } from "react";
import styles from "./Modal.module.css";
import Modal from "./Modal";
import categories from "../../constants/category";

export default function AddRestaurantModal({ closeModal, onAddRestaurant }) {
  const [restaurantInfo, setRestaurantInfo] = useState({
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurantInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await onAddRestaurant(restaurantInfo);
    closeModal();
  };

  return (
    <Modal title="새로운 음식점" onBackdropClick={closeModal}>
      <form method="post" onSubmit={handleSubmit}>
        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select
            name="category"
            id="category"
            required
            value={restaurantInfo.category}
            onChange={handleChange}
            autoFocus
          >
            <option value="">선택해 주세요</option>
            {categories
              .filter((category) => category.key !== "all")
              .map((categoryItem) => (
                <option key={categoryItem.key} value={categoryItem.value}>
                  {categoryItem.value}
                </option>
              ))}
          </select>
        </div>

        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={restaurantInfo.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="description" className="text-caption">
            설명
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={restaurantInfo.description}
            onChange={handleChange}
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className={styles["button-container"]}>
          <button
            type="submit"
            className={`${styles.button} ${styles["button--primary"]} text-caption`}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
