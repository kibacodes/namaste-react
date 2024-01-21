import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText));

  return filterData;
}

const Body = () => {
    // State Variable- Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [searchText, setSearchText] = useState("");

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
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
