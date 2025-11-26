import { createContext, useMemo, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setCategory] = useState("전체");

  const value = useMemo(
    () => ({ selectedCategory, setCategory }),
    [selectedCategory]
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
