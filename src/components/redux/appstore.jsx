import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice"; //import the reducer from cardSlice

import reducer from "./cardSlice";
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
} //configure the store with the reducer}
)
export default appStore;

