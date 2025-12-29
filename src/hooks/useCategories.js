import { useShallow } from "zustand/shallow";
import { useCategoryStore } from "../stores/useCategoryStore.js";

export default function useCategories() {
  const { selectedCategory, setCategory } = useCategoryStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
      setCategory: state.actions.setCategory,
    }))
  );

  return {
    selectedCategory,
    setCategory,
  };
}
