import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText));

  return filterData;
}

const Body = () => {
    // State Variable- Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);
      // Optional Chaining
      setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0) {
      return <Shimmer />;
    }

  return (
    <div className="body">
      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }} 
        />

        <button 
          className="search-btn"
          onClick= {()=> {
            const data= filterData(searchText, listOfRestaurants);
            setListOfRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList= listOfRestaurants.filter(res=> res.data.avgRating > 4)
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
