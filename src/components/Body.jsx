import React from 'react';
import RestaurantCard from './RestaurantCard';
// import resObj from '../utils/mockData';
import { useState, useEffect } from 'react';
import { ShimmerUI } from './ShimmerUI';

const Body = () => {

  const [listOfResturant, setListOfResturant] = useState([]);

  const [originalList, setOriginalList] = useState([]);

  const [searchText, setsearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        '/api/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json); // Log the fetched data to understand its structure

      // Optional chaining to safely access nested properties
      const restaurants = json?.data?.cards?.find(card => card.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setListOfResturant(restaurants);
        setOriginalList(restaurants);
      } else {
        console.error('Restaurants data not found');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  const handleSearch = () => {
    const filterRestaurants = originalList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    }
    );
    setListOfResturant(filterRestaurants);

  }


  if (listOfResturant.length === 0) {
    return <ShimmerUI />;
  }

  return listOfResturant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input
            type="text"
            placeholder="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }} />
          <button
            onClick={() => {
              // console.log(searchText)
              handleSearch();
            }}
          >Search
          </button>


        </div>
        <button className='filter-btn'
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturant(filterList);
          }}>
          Top Rated Restaurants
        </button>

      </div>
      <div className="res-container">
        {
          listOfResturant.map((resData) => {
            return <RestaurantCard key={resData.info.id} resData={resData.info} />
          })
        }
      </div>
    </div>
  );
};

export default Body;