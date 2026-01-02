import RestaurantListItem from "./RestaurantListItem";
import getCategoryIcon from "../../../utils/getCategoryIcon";
import styled from "styled-components";
import useFilteredRestaurants from "../../../hooks/useFilteredRestaurants.js";

export default function RestaurantList({ openModal, setSelectedRestaurant }) {
  const filteredRestaurants = useFilteredRestaurants();

  const handleSelect = (restaurant) => {
    if (restaurant.isPending) return; // Disable click for pending items
    openModal("DETAIL_RESTAURANT");
    setSelectedRestaurant(restaurant);
  };

  return (
    <ListContainer>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            icon={getCategoryIcon(restaurant.category)}
            onClick={() => handleSelect(restaurant)}
            style={restaurant.isPending ? { opacity: 0.6, cursor: "wait" } : {}}
          />
        ))}
      </ul>
    </ListContainer>
  );
}

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
