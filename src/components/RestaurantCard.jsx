import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality, deliveryTime } = resData;
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 flex flex-col">
      {/* Image on Top */}
      <div className="w-full">
        <img
          className="w-full h-48 object-cover rounded-md"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      {/* Details Below */}
      <div className="w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow border-t-2 border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-600">{name}</h3>
        <div className="mt-3">
          <h4 className="text-gray-600">{locality}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-800">Rating: {avgRating} stars</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-800">Cost for Two: {costForTwo}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-800">Delivery Time: {deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
}

//higher order components
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Changed label style to ensure it's at the top in front of the card */}
        <label className="absolute z-10 top-0 left-0 bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export const withisVegLAbel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const isVeg = resData?.isVeg;
    const labelText = isVeg === 1 ? 'Veg' : 'Non-Veg';
    const bgColor = isVeg === 1 ? 'bg-green-500' : 'bg-red-500';
    return (
      <div className="relative">
        <label className={`absolute z-10 top-0 right-0 ${bgColor} text-white m-2 p-2 rounded-lg`}>
          {labelText}
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;