import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProdustItem = (product) => {
  return (
    <>
      <Link className="product-item" href={`/products/${product.slug}`}>
        <div className="product-card">
          <div className="card-img">
            <Image
              src={product.images[0].src}
              alt={product.name}
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="card-cont">
            <h3 className="card-ttl">{product.name}</h3>
            <p className="price">1000$</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProdustItem;
