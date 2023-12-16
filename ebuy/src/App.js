import React, { useEffect } from 'react';
// import ProductList, { Product } from './features/counter/ProductList';
import './App.css';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
// import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
// import ProductDetails from './features/counter/ProductDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import PageNotFound from './pages/PageNotFound';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrders from './features/user/UserOrders';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/UserSlice';
import Logout from './components/Logout';
import AdminProtected from './components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailsPage from './pages/AdminProductDetailsPage';
import ProductForm from './features/admin/ProductForm';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/admin",
    element: <AdminProtected><AdminHome></AdminHome></AdminProtected>,
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
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><CheckOutPage /></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailsPage /></Protected>,
  },
  {
    path: "/admin/product-detail/:id",
    element: <AdminProtected><AdminProductDetailsPage /></AdminProtected>,
  },
  {
    path: "/admin/addproduct",
    element: <AdminProtected><AdminProductFormPage /></AdminProtected>,
  },
  {
    path: "/admin/admin-orders",
    element: <AdminProtected><AdminOrdersPage /></AdminProtected>,
  },
  {
    path: "/admin/addproduct/edit/:id",
    element: <AdminProtected><AdminProductFormPage /></AdminProtected>,
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/myorders",
    element: <Protected><UserOrdersPage></UserOrdersPage></Protected>,
  },
  {
    path: "/profile",
    element: <Protected><UserProfilePage></UserProfilePage></Protected>,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);


  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user])
  return (
    <div >
      {/* <LoginPage /> */}
      <RouterProvider router={router} />
      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
