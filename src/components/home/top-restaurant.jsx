import React, { useState, useEffect, forwardRef } from "react";
import { CDN_URL, MENU_URL } from "../../utils/contants";

const TopRestaurant = forwardRef(({ onTitleLoad }, ref) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL);
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();

        const card = json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.id === "top_brands_for_you" &&
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const data = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const title = card?.card?.card?.header?.title;

        if (title && onTitleLoad) {
          onTitleLoad(title); // ⬅️ Pass title to Main
        }

        if (data && Array.isArray(data)) {
          setRestaurants(data);
        } else {
          setError("No restaurant data found. Check API structure.");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [onTitleLoad]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div
        ref={ref}
        className="flex overflow-x-auto no-scrollbar space-x-6 w-full scroll-smooth"
        style={{ minWidth: "100%" }}
      >
        {restaurants.map((restaurant) => {
          const info = restaurant.info;
          return (
            <div
              key={info.id}
              className="w-[calc(100%/3)] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-6 hover:scale-105 transition-transform hover:shadow-2xl"
            >
              <img
                src={`${CDN_URL}${info.cloudinaryImageId}`}
                alt={info.name}
                className="rounded-xl w-full h-40 object-cover mb-3 shadow-md"
              />
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {info.name}
              </h2>
              <p className="text-sm text-gray-700 font-medium">
                📍 {info.locality}, {info.areaName}
              </p>
              <div className="flex items-center text-sm mt-2">
                <span className="text-yellow-500 font-semibold mr-2">
                  ⭐ {info.avgRating}
                </span>
                <span className="text-gray-500">{info.sla.slaString}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TopRestaurant;
