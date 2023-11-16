import AllProducts from "@/app/components/products/AllProducts";
import React from "react";

export default function Product() {
  return (
    <>
      <div className="page-products">
        <h2 className="page-ttl">Page Products</h2>
        <AllProducts />
      </div>
    </>
  );
}
