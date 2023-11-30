import React from "react";
import Navbar from "./Navbar";
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
