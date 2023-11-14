import ProductDetails from "@/app/components/products/ProductDetails";
import React from "react";

export default function ProductSingle() {
  return (
    <>
      <div className="single-product">
        <div className="inner">
          <ProductDetails />
        </div>
      </div>
    </>
  );
}
