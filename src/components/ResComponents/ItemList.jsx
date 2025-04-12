// ResComponents/ItemList.jsx
import React from 'react';
import { CDN_URL } from '../../utils/contants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cardSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const getItemQuantity = (id) => {
        const item = cartItems.find(i => i.card.info.id === id);
        return item ? item.quantity : 0;
    };

    const handleAdd = (item) => dispatch(addItem(item));
    const handleRemove = (item) => dispatch(removeItem(item));

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {items.map((item) => {
                const itemId = item.card.info.id;
                const quantity = getItemQuantity(itemId);

                return (
                    <div key={itemId}
                        className="w-full mx-auto my-4 bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-xl p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-transparent hover:border-indigo-300 flex flex-col justify-between">
                        
                        <img
                            src={CDN_URL + (item.card.info.imageId || item.card.info.defaultimageId)}
                            className="w-28 h-28 object-cover rounded-full shadow-md border-2 border-indigo-200 mx-auto"
                        />

                        <div className="flex flex-col items-center mt-4">
                            <span className="font-bold text-1xl text-gray-800">
                                {item.card.info.name}
                            </span>
                            <span className="text-xl text-indigo-600 font-semibold">
                                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </span>
                            <p className="text-base text-gray-700 leading-relaxed mt-2 text-center">
                                {item.card.info.description}
                            </p>
                        </div>

                        {quantity === 0 ? (
                            <button
                                className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition duration-200 ease-in-out"
                                onClick={() => handleAdd(item)}
                            >
                                Add Item
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="px-4 py-1 text-xl bg-red-500 text-white rounded-full shadow hover:bg-red-600"
                                >-</button>
                                <span className="font-bold text-xl">{quantity}</span>
                                <button
                                    onClick={() => handleAdd(item)}
                                    className="px-4 py-1 text-xl bg-green-500 text-white rounded-full shadow hover:bg-green-600"
                                >+</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
