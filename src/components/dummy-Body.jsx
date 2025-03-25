import React from 'react';
import RestaurantCard from './RestaurantCard';
// import resObj from '../utils/mockData';
import { useState, useEffect } from 'react';
import { ShimmerUI } from './ShimmerUI';

const Body = () => {

  const [listOfResturant, setListOfResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch
    ('/api/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')


    const json = await data.json();

    console.log(json);

    const restaurants = json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;
    setListOfResturant(restaurants);


  }

  // if(listOfResturant.length === 0){
  //   return <h1>Loading....</h1>
  // }

  if(listOfResturant.length === 0){
    return <ShimmerUI />
  }

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className='filter-btn'
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.avgRating > 4
            );
            setListOfResturant(filterList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard */}
        {/* <RestaurantCard resName="Meghna food" cuisine=" Briyani, north India, Asia"/> */}
        {/* < RestaurantCard resData={resObj[1]} /> 
         < RestaurantCard resData={resObj[2]} />
         < RestaurantCard resData={resObj[3]} />
         < RestaurantCard resData={resObj[4]} />
         < RestaurantCard resData={resObj[5]} />
         < RestaurantCard resData={resObj[6]} /> */}
        {/* <RestaurantCard resName="Domnik Pizza" cuisine="Pizza,Italian,Pasta,Burger"/> */}
        {/* <RestaurantCard resName="KFC" cuisine=" Burget,Fast Food"/> */}

        {
          listOfResturant.map((resData) => {
            return <RestaurantCard key={resData.info.id} resData={resData} />
          })
        }

      </div>
    </div>
  )
}

export default Body;

