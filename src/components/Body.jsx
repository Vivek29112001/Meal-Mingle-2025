import React from 'react';
import RestaurantCard from './RestaurantCard';
import resObj from '../utils/mockData';
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
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
            resObj.map((resData)=>{
              return <RestaurantCard key={resData.id} resData ={resData}/>
            })
          }
  
        </div>
      </div>
    )
  }

  export default Body;