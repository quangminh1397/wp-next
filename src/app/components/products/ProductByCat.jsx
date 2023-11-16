import React from "react";
import ProdustItem from "./ProdustItem";

const ProductByCat = () => {
  return (
    <section className="box-sec">
      <div className="inner">
        <h3 className="c-title01">Product By Category</h3>
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
          <li className="item">
            <ProdustItem />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductByCat;
