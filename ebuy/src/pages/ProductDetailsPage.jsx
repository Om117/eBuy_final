import React from "react";
import Navbar from "../components/Navbar";
import ProductDetails from "../features/counter/ProductDetails";
function ProductDetailsPage() {
  return (
    <>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </>
  );
}

export default ProductDetailsPage;
