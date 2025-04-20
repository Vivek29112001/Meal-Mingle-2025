import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality, deliveryTime } = resData;
  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-100 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition ease-in-out duration-500 flex flex-col">
      {/* Image on Top */}
      <div className="w-full">
        <img
          className="w-full h-48 object-cover rounded-md border-2 border-gray-300 shadow-sm"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      {/* Details Below */}
      <div className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
        <h3 className="text-2xl font-bold text-indigo-600">{name}</h3>
        <div className="mt-3">
          <h4 className="text-gray-600">📍{locality}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        </div>
        <div className="mt-3">
          <h4 className="text-gray-800"> ⭐ Rating: {avgRating} stars</h4>
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
        {/* Updated label style for promoted restaurants */}
        <label className="absolute z-10 top-0 left-0 bg-indigo-600 text-white m-2 p-2 rounded-full">
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
        <label className={`absolute z-10 top-0 right-0 ${bgColor} text-white m-2 p-2 rounded-full`}>
          {labelText}
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;