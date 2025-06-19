import type { Middleware } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { addToCart, clearCart, removeItem, decreaseQuantity } from "../features/cart/cartSlice";

const EXPIRATION_DAYS = 2;

const CART_STORAGE_KEY = "audiophile_cart";

// Save to localStorage with timestamp
const saveCartToLocalStorage = (cart: RootState["cart"]["items"]) => {
    const data = {
        timestamp: Date.now(),
        items: cart
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(data))
}

// fetch from localStorage and validate expiration
export const fetchCartFromLocalStorage = (): null | RootState["cart"]["items"] => {
    const storedValue = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedValue) return null;

    try {

        const parsed = JSON.parse(storedValue);
        const isExpired = Date.now() - parsed.timestamp > EXPIRATION_DAYS * 24 * 60 * 60 * 1000;

        if (isExpired) {
            console.info("🕒 Cart expired — clearing localStorage...")

            localStorage.removeItem(CART_STORAGE_KEY)

            return null
        }

        return parsed.items

    } catch (error) {
        console.error("Failed to fetch cart:", error)
        return null
    }
}

// middleware 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const persistCart: Middleware = (store) => (next) => (action: any) => {

    const result = next(action);

    const watchActions = [
        addToCart.type,
        clearCart.type,
        removeItem.type,
        decreaseQuantity.type
    ]

    if (watchActions.includes(action.type)) {
        const state = store.getState() as RootState;
        saveCartToLocalStorage(state.cart.items);
    }

    return result;
}