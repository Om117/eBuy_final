import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/counter/ProductListSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
