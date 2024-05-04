import { configureStore } from "@reduxjs/toolkit";

//STEP2 CREATE ROOT STORE AND CONNECT USERSLICE OR OTHER SLICES
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
