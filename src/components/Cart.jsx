import { useSelector } from "react-redux";
import ItemList from "./ResComponents/ItemList"; // Import the ItemList component
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "./redux/cardSlice";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items); //get the items from the store

    const dispatch = useDispatch(); //useDispatch is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
    //importing the action from the slice
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleRemoveCart = () => {
        dispatch(removeItem())
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-start py-10">
            <h1 className="font-bold text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-8">
                Your Cart
            </h1>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 mb-4"
                onClick={() => handleClearCart()}
            >
                Clear Cart
            </button>
            {cartItem.length === 0 ? (
                <p className="text-xl text-blue-600 animate-bounce">
                    Whoa, your cart is a blank canvas of possibilities! Start your epic shopping journey now!
                </p>
            ) : (
                <div className=" bg-white shadow-xl p-6 rounded-lg">
                    <ItemList
                        items={cartItem}
                    /> {/* Pass the cart items to ItemList */}
                    
                </div>
            )}
        </div>
    );
};

export default Cart;