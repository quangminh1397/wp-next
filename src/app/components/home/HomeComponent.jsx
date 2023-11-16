import React from "react";
import TopPicks from "../products/TopPicks";
import ProductByCat from "../products/ProductByCat";

export default function Home() {
  return (
    <>
      <div className="wrap-content">
        <ProductByCat/>
        <TopPicks />
      </div>
    </>
  );
}
