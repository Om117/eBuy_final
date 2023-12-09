import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/counter/ProductListSlice';
import userReducer from '../features/auth/AuthSlice'
import cartReducer from '../features/cart/CartSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
