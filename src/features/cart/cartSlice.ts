import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemProps } from "../../components/Cart/Item";


interface CartState {
    items: CartItemProps[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<CartItemProps>) => {
            const item = action.payload;

            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string | number>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

export const { addToCart, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;