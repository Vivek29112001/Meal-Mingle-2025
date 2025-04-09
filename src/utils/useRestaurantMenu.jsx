import { useState, useEffect } from "react";
import { API_URL } from "./contants";

export const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`${API_URL}${resId}`);
                const json = await response.json();
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [resId]);

    return resInfo;
};