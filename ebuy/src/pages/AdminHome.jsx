import React from "react";
import Navbar from "../components/Navbar";
import AdminProductList from "../features/admin/AdminProductList";

function AdminHome() {
  return (
    <>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </>
  );
}

export default AdminHome;
