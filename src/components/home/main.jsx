import React, { useContext, useRef, useState } from 'react';
import Menu1 from './menu1';
import TopRestaurant from './top-restaurant';
import UserContext from '../../utils/UserContext.jsx';

const Main = () => {
  const { loggedInUser } = useContext(UserContext);

  const menuScrollRef = useRef(null);
  const restaurantScrollRef = useRef(null);

  const [restaurantHeading, setRestaurantHeading] = useState('');

  const handleScroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-100 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition ease-in-out duration-500 flex flex-col">
      <h1 className="text-4xl font-bold text-center">Welcome to MealMingle</h1>

      {/* Menu Section */}
      <div className="w-full flex justify-between items-center p-2 mt-4">
        <h2 className="text-xl font-bold">{loggedInUser || 'Guest'} - What's on your mind</h2>
        <div className="flex items-center space-x-2">
          <button className="text-2xl bg-gray-200 px-3 py-1 rounded" onClick={() => handleScroll('left', menuScrollRef)}>&larr;</button>
          <button className="text-2xl bg-gray-200 px-3 py-1 rounded" onClick={() => handleScroll('right', menuScrollRef)}>&rarr;</button>
        </div>
      </div>
      <Menu1 ref={menuScrollRef} />

      {/* Top Restaurant Section */}
      <div className="w-full flex justify-between items-center p-2 mt-4">
        <h2 className="text-xl font-bold">{restaurantHeading || "Loading top restaurants..."}</h2>
        <div className="flex items-center space-x-2">
          <button className="text-2xl bg-gray-200 px-3 py-1 rounded" onClick={() => handleScroll('left', restaurantScrollRef)}>&larr;</button>
          <button className="text-2xl bg-gray-200 px-3 py-1 rounded" onClick={() => handleScroll('right', restaurantScrollRef)}>&rarr;</button>
        </div>
      </div>
      <TopRestaurant ref={restaurantScrollRef} onTitleLoad={setRestaurantHeading} />
    </div>
  );
};

export default Main;
