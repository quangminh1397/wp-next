import ProductDetails from "@/app/components/products/ProductDetails";
import ProductsRelated from "@/app/components/products/ProductsRelated";
import React from "react";

export default function ProductSingle() {
  return (
    <>
      <div className="single-product">
        <h2 className="page-ttl">Page detail</h2>
        <ProductDetails />
        <ProductsRelated />
      </div>
    </>
  );
}
