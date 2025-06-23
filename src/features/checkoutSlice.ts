import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CartItemProps } from "../components/Cart/Item";

export interface CheckoutFormValues {
    paymentMethod?: "e-Money" | "Cash on Delivery";
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    emoneyNumber: string;
    emoneyPin: string;
}



interface Order {
    // id: string;
    items: CartItemProps[];
    total: number;
    form: CheckoutFormValues;
    // date: string;
}

interface CheckoutState {
    order: Order | null;
}

const initialState: CheckoutState = {
    order: null,
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        placeOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload;
        },
        clearOrder: (state) => {
            state.order = null;
        },
    },
});

export const { placeOrder, clearOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
