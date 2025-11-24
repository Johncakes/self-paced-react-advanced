import { CategoryProvider } from "./CategoryContext.jsx";
import { RestaurantProvider } from "./RestaurantContext.jsx";

export default function AppContextProvider({ children }) {
  return (
    <CategoryProvider>
      <RestaurantProvider>{children}</RestaurantProvider>
    </CategoryProvider>
  );
}
