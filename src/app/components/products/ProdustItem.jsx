
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProdustItem = () => {
  return (
    <>
      <Link className="product-item" href="products/01">
        <Image
          src={"/assets/images/product/lamp1-trans.png"}
          alt="I love lamp"
          width={500}
          height={500}
          priority
        />
      </Link>
    </>
  );
};

export default ProdustItem;
