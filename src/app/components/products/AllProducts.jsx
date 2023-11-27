
import React from "react";
import useSWR from "swr";
import ProdustItem from "./ProdustItem";

const AllProducts = (data) => {
  return (
    <section className="box-sec">
      <div className="inner">
        <h3 className="c-title01">All Products</h3>
        {(!data && !error) ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-products">
            {data.data.map((product) => (
              <li key={product.id} className="item">
                <ProdustItem {...product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
