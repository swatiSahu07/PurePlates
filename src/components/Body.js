import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/restaurants";
import { RES_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer/Shimmer";


const Body = () => {
  const shimmerCardsArray = Array(10).fill(null);
  // let resList = restaurantList;
  // TODO Implementation UseState
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterListOfRestaurants, setfilterListOfRestaurant] = useState([]);
  const [cardHeading, setListCardHeading] = useState();
  const [searchText, setSearchText] = useState("");

  // TODO Implementation UseEffect
  useEffect(() => {
    getRestaurant();
  }, []);

  filterRestaurants = (typeOfFilter, value) => {
    console.log("hi", typeOfFilter, value);
    const filterdList = listOfRestaurants.filter((res) => {
      let data = [];
      if (typeOfFilter === "avgRating") {
        data = res.info.avgRating >= value;
      }
      if (typeOfFilter === "search") {
        data =
          res.info.name.toLowerCase().includes(value) ||
          res.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(value)
          );
      }
      return data;
    });
    setfilterListOfRestaurant(filterdList);

    console.log("filterdList", filterdList);
  };

  // * Restaurant API call
  getRestaurant = async () => {
    const object = await fetch(RES_API);
    const jsonData = await object.json();

    // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // optional chaining -jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?. restaurants
    const result = jsonData?.data?.cards?.[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants
      ? jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      : [];
    const text = await jsonData?.data?.cards[1]?.card?.card?.header?.title;

    console.log("data", jsonData.data.cards[1].card.card.header.title);
    // * Now passing resturant in our main varibale
    setListOfRestaurant(result);
    setfilterListOfRestaurant(result);
    setListCardHeading(text);
  };

  const TopRow = () => {
    return (
      <div>
        <div className="row">
        <div className="search">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search by name, delivery time, or cuisines"
            />{" "}
            <button
              onClick={() => {
                filterRestaurants("search", searchText.toLowerCase());
              }}
            >
              Search{" "}
            </button>
          </div>
          <div className="top-restaurant">
            <button
              className="btn-light"
              onClick={() => {
                filterRestaurants("avgRating", 4);
              }}
            >
              {" "}
              Top Rated restaurants
            </button>
          </div>
         
        </div>
      </div>
    );
  };

  return (
    <div className="body">
      <div className="top-row-container">
        {listOfRestaurants.length > 0 ? <TopRow /> : ""}
        {cardHeading ? <h4> &nbsp;{cardHeading}</h4> : <p>Access denied</p>}
      </div>
      <div className="Res-Container">
        {/* // * show shimmer UI  */}
        {listOfRestaurants.length === 0
          ? shimmerCardsArray.map((_, index) => <Shimmer key={index} />)
          : ""}
        {filterListOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
