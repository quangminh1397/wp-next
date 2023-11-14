import React from "react";
import ProdustItem from "./products/ProdustItem";

const TopPicks = () => {
  return (
    <section className="toppick">
      <div className="inner">
        <h2 className="c-title01">Top picks</h2>
        <ul className="list-products">
          <li className="product-item">
            <ProdustItem />
          </li>
          <li className="product-item">
            <ProdustItem />
          </li>
          <li className="product-item">
            <ProdustItem />
          </li>
          <li className="product-item">
            <ProdustItem />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopPicks;
