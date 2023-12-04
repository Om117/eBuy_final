import React from 'react';
import ProductList, { Product } from './features/counter/ProductList';
import './App.css';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import ProductDetails from './features/counter/ProductDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
]);


function App() {
  return (
    <div >
      {/* <LoginPage /> */}
      <RouterProvider router={router} />
      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
