import React, { useState, useEffect, forwardRef } from "react";
import { CDN_URL, MENU_URL } from "../../utils/contants";

const Menu1 = forwardRef((props, ref) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL);
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();
        const data = json?.data?.cards?.find(
          (card) => card?.card?.card?.imageGridCards?.info
        )?.card?.card?.imageGridCards?.info;

        if (data && Array.isArray(data)) {
          setCategories(data);
        } else {
          setError("No data found. Check API structure.");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div
      ref={ref}
      className="flex overflow-x-auto space-x-4  w-full scrollbar-hide scroll-smooth"
    >
      {categories.map((item) => (
        <div
          key={item.id}
          className="min-w-[150px] flex-shrink-0 bg-white shadow-md rounded-xl p-2 hover:scale-105 transition-transform"
        >
          <img
            src={`${CDN_URL}${item.imageId}`}
            alt={item.accessibility?.altText || item.action?.text}
            className="rounded-xl w-full h-38 object-cover"
          />
        </div>
      ))}
    </div>
  );
});

export default Menu1;
