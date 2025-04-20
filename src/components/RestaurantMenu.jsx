import { ShimmerUI } from "./ShimmerUI";
import React, { useState, useContext } from "react";
import UserContext from "../utils/UserContext.jsx";
import { RITEM_CDN_URL } from "../utils/contants";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResComponents/RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId); // custom hook
    // console.log(resInfo);

    const [showIndex, setShowIndex] = useState(0);

    // Access userName from the context
    const { loggedInUser } = useContext(UserContext);
    

    if (resInfo === null) return <ShimmerUI />;

    const restaurantName = resInfo?.cards?.[0]?.card?.card?.text || "Restaurant Name Not Available";

    console.log("All cards:", resInfo?.cards);

    // Dynamically find the menu card (adjust index if needed)
    const menuCard = resInfo?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR);
    console.log("Menu card:", menuCard);

    // Filter categories whose type is ItemCategory
    const menuCategories = menuCard
        ? menuCard.groupedCard.cardGroupMap.REGULAR.cards.filter(
            c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        : [];
    console.log("Menu categories:", menuCategories);


    return (
        <div className="text-center ">
            <h1 className="text-3xl font-bold">{restaurantName}</h1>
            <h2>Welcome, {loggedInUser ? loggedInUser : 'Guest'}</h2>
            <p className="m-8 font-bold">Menu</p>
            {/* we have to do mapping to get any thing from menuCard */}
            
            {menuCategories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex} // true if index matches
                    setShowIndex={() => setShowIndex(prev => prev===index ? true : index)} // toggle index on click
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;