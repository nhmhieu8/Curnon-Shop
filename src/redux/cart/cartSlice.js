import { createSlice } from '@reduxjs/toolkit';

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    cartItems,
    isShowCart: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            let duplicated = false;
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === newItem.id) {
                    duplicated = true;
                    return { ...item, quantity: item.quantity + 1 };
                } else return item;
            });

            if (!duplicated) state.cartItems.push({ ...newItem, quantity: 1 });

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

            state.isShowCart = true;
        },

        increaseQuantity: (state, action) => {
            const increasedItem = action.payload;
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === increasedItem.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else return item;
            });

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        decreaseQuantity: (state, action) => {
            const descreasedItem = action.payload;
            if (descreasedItem.quantity === 1)
                state.cartItems = state.cartItems.filter((item) => item.id !== descreasedItem.id);
            else
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === descreasedItem.id) return { ...item, quantity: item.quantity - 1 };
                    else return item;
                });

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        deleteItem: (state, action) => {
            const deleteItem = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== deleteItem.id);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        resetItem: (state) => {
            state.cartItems = [];
            state.isShowCart = false;

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        showCart: (state) => {
            state.isShowCart = true;
        },

        hideCart: (state) => {
            state.isShowCart = false;
        },
    },
});

export const { addItem, deleteItem, resetItem, increaseQuantity, decreaseQuantity, showCart, hideCart } =
    cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectIsShowCart = (state) => state.cart.isShowCart;

export default cartSlice.reducer;
