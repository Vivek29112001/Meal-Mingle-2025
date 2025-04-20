import React , {useContext} from 'react';
import RestaurantCard, { withPromotedLabel, withisVegLAbel } from './RestaurantCard';
import { useBody } from '../utils/useBody';
import { ShimmerUI } from './ShimmerUI';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Main from './home/main.jsx';
import UserContext from "../utils/UserContext.jsx"; // Corrected import
const Body = () => {
  // import use boduhook (custom hook) here from useBody.jsx

  const {
    listOfResturant,
    searchText,
    setSearchText,
    handleSearch,
    filterTopRated,
  } = useBody();

  const RestaurantCardPromed = withPromotedLabel(RestaurantCard) //higher order component
  const RestaurantisVeg = withisVegLAbel(RestaurantCard) //higher order component

  const onlineStatus = useOnlineStatus()  //customHook

  // Generate random index for adding a promoted tag to one card
  const randomIndex = Math.floor(Math.random() * listOfResturant.length);

  if (onlineStatus === false) {
    return <h1>Looks like you are offline Please check internet connection</h1>
  }

  if (listOfResturant.length === 0) {
    return <ShimmerUI />;
  }

  const {loggedInUser,setUserName} = useContext(UserContext);


  return listOfResturant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="bg-gradient-to-r from-purple-200 to-blue-100 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition ease-in-out duration-500 flex flex-col container mx-auto p-4">
      <Main />
      <div className="flex flex-col sm:flex-row items-center justify-between my-4">
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <button
            onClick={() => {
              handleSearch();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded ml-2"
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mt-4 sm:mt-0"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            filterTopRated(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className='search m-4 p-4 flex items-center'>
          <label>UserName:</label>
          <input className='border border-black p-2' 
          value={loggedInUser}
          onChange= {(e)=> setUserName(e.target.value)}/>
        </div>
      </div>





      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          listOfResturant.map((resData, index) => (
            <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
              {(resData.info.promoted || index === randomIndex) ? (
                <RestaurantCardPromed resData={resData.info} />
              ) : (
                resData.info.isVeg ? (
                  <RestaurantisVeg resData={resData.info} />
                ) : (
                  <RestaurantCard resData={resData.info} />
                )
              )}
            </Link>
          ))
        }
      </div>
    </div>
  );
};



export default Body;