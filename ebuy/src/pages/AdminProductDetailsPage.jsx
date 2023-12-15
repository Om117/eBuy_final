import React from "react";
import AdminProductDetails from "../features/admin/AdminProductDetails";
import Navbar from "../components/Navbar";

function AdminProductDetailsPage() {
  return (
    <>
      <Navbar>
        <AdminProductDetails></AdminProductDetails>
      </Navbar>
    </>
  );
}

export default AdminProductDetailsPage;
