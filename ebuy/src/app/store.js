import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/counter/ProductListSlice';
import userReducer from '../features/auth/AuthSlice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/order/OrderSlice'
import userOrderReducer from '../features/user/UserSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: userOrderReducer,
  },
});
