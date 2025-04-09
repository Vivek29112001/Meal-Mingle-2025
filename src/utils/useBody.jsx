import { useState, useEffect } from "react";
import { RESTORENT_DATA_URL } from "./contants";

export const useBody = () => {
    const [listOfResturant, setListOfResturant] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    console.log("Body Render", listOfResturant)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                RESTORENT_DATA_URL
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            console.log(json); // Log the fetched data to understand its structure

            // Optional chaining to safely access nested properties
            const restaurants = json?.data?.cards?.find(card => card.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // Added error handling for missing restaurant data
            if (!restaurants) {
                console.error("Restaurants data not found");
                setListOfResturant([]);
                setOriginalList([]);
                return;
            }

            setListOfResturant(restaurants);
            setOriginalList(restaurants);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const handleSearch = () => {
        const filteredRestaurants = originalList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListOfResturant(filteredRestaurants);
    };

    const filterTopRated = () => {
        const filteredList = listOfResturant.filter(
            (res) => res.info.avgRating > 4
        );
        setListOfResturant(filteredList);
    };

    return {
        listOfResturant,
        searchText,
        setSearchText,
        handleSearch,
        filterTopRated,
    };
};