import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { hydrateCart } from "../features/cart/cartSlice";
import  checkoutReducer from "../features/checkoutSlice";

import { fetchCartFromLocalStorage, persistCart } from "../middleware/persistCart";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout:checkoutReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistCart)
});

// Rehydrate state from localStorage at load time
const storedCart = fetchCartFromLocalStorage();
if (storedCart) {
    store.dispatch(hydrateCart(storedCart))
}

// Types 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;