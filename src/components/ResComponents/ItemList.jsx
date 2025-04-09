import React from 'react';
import { CDN_URL } from '../../utils/contants';

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {items.map((item, key) =>
                <div key={item.card.info.id}
                    className="w-full mx-auto my-4 bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-xl p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-transparent hover:border-indigo-300">
                    {/* Centered image at the top */}
                    <img src={CDN_URL + (item.card.info.imageId ? item.card.info.imageId : item.card.info.defaultimageId)}
                        className="w-28 h-28 object-cover rounded-full shadow-md border-2 border-indigo-200 mx-auto" />
                    <div className="flex flex-col items-center mt-4">
                        <span className="font-bold text-1xl text-gray-800" style={{ textAlign: 'justify' }}>
                            {item.card.info.name}
                        </span>
                        <span className="text-xl text-indigo-600 font-semibold">
                            ₹{item.card.info.price ?
                                item.card.info.price / 100 :
                                item.card.info.defaultPrice / 100}
                        </span>
                        <p className="text-base text-gray-700 leading-relaxed mt-2" style={{ textAlign: 'justify' }}>
                            {item.card.info.description}
                        </p>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition duration-200 ease-in-out">
                        Add-To-Card
                    </button>
                </div>
            )}
        </div>
    )
}
export default ItemList;