import React from "react";
import Navbar from "./Navbar";
import ProductList from "../features/counter/ProductList";
import { Link } from "react-router-dom";

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
