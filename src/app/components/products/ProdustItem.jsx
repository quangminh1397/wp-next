import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProdustItem = () => {
  return (
    <>
      <Link className="product-item" href="products/01">
        <div className="product-card">
          <div className="card-img">
            <Image
              src={"/assets/images/product/lamp1-trans.png"}
              alt="I love lamp"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="card-cont">
            <h3 className="card-ttl">product01</h3>
            <p className="price">1000$</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProdustItem;
