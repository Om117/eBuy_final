import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/counter/ProductList";

function Home() {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
}

export default Home;
