import ItemList from "./ItemList";
import React, {useState} from "react";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false)
    // console.log(data);
    const handleClick = () =>{
        if(!showItems){
            setShowItems(true)
        }else{
            setShowItems(false)
        }
    }
    return (
        <div>
            <div className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between items-center" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>▼</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>
    )
}
export default RestaurantCategory;