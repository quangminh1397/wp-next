import React from "react";
import ProdustItem from "./ProdustItem";

const ProductsRelated = () => {
  return (
    <section className="box-sec">
      <div className="inner">
        <h3 className="c-title01">Related Product</h3>
        <ul className="list-products">
          <li className="item">
            <ProdustItem />
          </li>
          <li className="item">
            <ProdustItem />
          </li>
          <li className="item">
            <ProdustItem />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductsRelated;
