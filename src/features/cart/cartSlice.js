import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],

  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId of deleted item
      //the condition in filter are the things that stay in array
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId to increase quantity
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      console.log(item.quantity, item.unitPrice, item.totalPrice);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        //using reducer within slice
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export default cartSlice.reducer;
