import React from "react";
import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  area,
  deliveryTime,
}) => {
  // console.log(restaurantList.restaurantList[0].data.name);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f2f2f2",
      }}
    >
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="food-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
