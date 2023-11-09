import { resList, resLists } from "../utils/config";

import { useEffect, useState } from "react";
import RestaurentData from "./RestaurentData";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const modifieddata = data?.data?.cards;
      const rest_id = "restaurant_grid_listing";
      for (let arr of modifieddata) {
        if (arr.card.card.id === rest_id) {
          const responseData =
            arr?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setResData(responseData);
          setFilteredRes(responseData);
        }
      }
      console.log(modifieddata);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(resData);

  return resData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resData.filter(
              (item) => item.info.avgRating >= 4
            );
            setFilteredRes(filteredData);
          }}
        >
          Top Rated Restaurents
        </button>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="search here.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              const searchFilter = resData.filter((item) =>
                item.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRes(searchFilter);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurent-container">
        {filteredRes?.map((swiggyData) => (
          <RestaurentData swiggyData={swiggyData} key={swiggyData.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
