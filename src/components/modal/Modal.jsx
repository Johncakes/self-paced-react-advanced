import { useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ title, children, onBackdropClick }) {
  const containerRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onBackdropClick();
    }
  };

  return (
    <div className={`${styles.modal} ${styles["modal--open"]}`}>
      <div className={styles["modal-backdrop"]} onClick={onBackdropClick} />
      <div
        className={styles["modal-container"]}
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <h2 className={`${styles["modal-title"]} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
