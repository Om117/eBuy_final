import React from "react";
import UserOrders from "../features/user/UserOrders";
import Navbar from "../components/Navbar";

function UserOrdersPage() {
  return (
    <Navbar>
      <UserOrders></UserOrders>
    </Navbar>
  );
}

export default UserOrdersPage;
