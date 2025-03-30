import { useState, useEffect } from "react";
import "./CSS/restaurant.css";
import { FaStar } from "react-icons/fa";
import { ShimmerUI } from "./ShimmerUI";
import Recommended from "./RestaurantCards/Recomanded";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(
                    "/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.2182644&lng=79.5129767&restaurantId=148023&catalog_qa=undefined&submitAction=ENTER"
                );
                const json = await data.json();
                console.log("Fetched Data:", json);
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (resInfo === null) return <ShimmerUI />

    const { name, avgRating, costForTwoMessage, cuisines, totalRatingsString, sla } = resInfo?.cards[2]?.card.card.info || {};

    return (
        <>
            <div className="card-container">
                <h1 className="header-name">{name}</h1>
                <div className="menu">
                    <div className="menu-info">
                        <h4 className="rating">
                            <FaStar color="green" /> {avgRating} ({totalRatingsString})
                        </h4>
                        <h4>{costForTwoMessage}</h4>
                    </div>
                    <h4 className="cuisine">{Array.isArray(cuisines) ? cuisines.join(", ") : "Cuisines not available"}</h4>
                    <div className="menu-info">
                        <p className="outlet">Outlet</p>
                        <p className="location">Haldwani Locality</p>
                    </div>
                    <h4 className="h44">{sla?.deliveryTime} mins</h4>
                </div>
            </div>
            <Recommended />
        </>
    );
};

export default RestaurantMenu;