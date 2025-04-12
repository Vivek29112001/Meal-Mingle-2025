import {createSlice} from '@reduxjs/toolkit'; //import createSlice from redux toolkit

const cardSlice = createSlice({
    name:"cart",
    initialState:{
        items: [],  ///card items will be stored here
    },
    reducers:{
        //all functions of card will be written here 
        addItem: (state, action) => {
            const existingItem = state.items.find(
                item => item.card.info.id === action.payload.card.info.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            //mutating the state over here direfct modification
            // state.items.push(action.payload); //push the item to the cart
        },
        removeItem:(state,action)=>{
            const index = state.items.findIndex(
                item => item.card.info.id === action.payload.card.info.id
            );
            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1); // Remove from cart if quantity is 0
                }
            }
            // state.items.pop(action.payload); //pop the item from the cart
        },
        clearCart:(state,action)=>{
            state.items.length= 0; //clear the cart
        },
    }
})

export const {addItem, removeItem , clearCart} = cardSlice.actions; //export the actions
// export const selectCartItems = (state) => state.cart.items; //export the items from the cart
export default cardSlice.reducer; //export the reducer