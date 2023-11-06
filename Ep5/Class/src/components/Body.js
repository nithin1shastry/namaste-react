import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../utils/restaurantList";
import { useState } from "react";
export const Body = () => {
  //State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  let listOfRestaurantsJS = [
    {
      data: {
        id: "334475",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "1.0",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating <= 1
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
