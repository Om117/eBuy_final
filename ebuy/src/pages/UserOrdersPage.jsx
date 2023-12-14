import React from "react";
import UserOrders from "../features/user/UserOrders";
import Navbar from "../components/Navbar";

function UserOrdersPage() {
  return (
    <Navbar>
      <h1 className="mx-auto text-2xl">My Orders</h1>
      <UserOrders></UserOrders>
    </Navbar>
  );
}

export default UserOrdersPage;
