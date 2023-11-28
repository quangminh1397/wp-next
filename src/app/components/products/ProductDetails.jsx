import { AddCart } from "@/app/redux/action/types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = (product) => {
  const dispatch = useDispatch();
  return (
    <section className="product-detail box-sec">
      <div className="inner">
        <div className="box-img">
          <Image
            src={product.images[0].src}
            alt={product.name}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="box-desc">
          <h3 className="desc-ttl">{product.name}</h3>
          <div className="desc-cont">
            <p className="price">${product.price}</p>
            <div className="sec">
              <p>
                Abstract, sculptural, refined and edgy with a modern twist. Its
                symmetrical, spoked structure generates a clever geometric
                presence, which works well in a contemporary environment.
              </p>
            </div>
            <div className="btn-addtocard">
              <button onClick={() => dispatch(AddCart(product))}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
