import React from "react";
import AdminOrders from "../features/admin/AdminOrders";
import Navbar from "../components/Navbar";

function AdminOrdersPage() {
  return (
    <>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </>
  );
}

export default AdminOrdersPage;
