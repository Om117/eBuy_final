import React from "react";
import Navbar from "../components/Navbar";
import ProductForm from "../features/admin/ProductForm";

function AdminProductFormPage() {
  return (
    <Navbar>
      <h1 className="mx-auto font-bold text-center mb-2 text-2xl">
        Add/Edit Product
      </h1>
      <ProductForm></ProductForm>
    </Navbar>
  );
}

export default AdminProductFormPage;
