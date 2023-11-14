import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-detail">
        <div className="product-image">
          <Image
            src={"/assets/images/product/lamp1-trans.png"}
            alt="I love lamp"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="product-desc">
          <h3 className="product-ttl">Little Grey</h3>
          <div className="product-cont">
            <p className="price">$475</p>
            <div className="sec">
              <p>
                Abstract, sculptural, refined and edgy with a modern twist. Its
                symmetrical, spoked structure generates a clever geometric
                presence, which works well in a contemporary environment.
              </p>
            </div>
            <div className="btn-card">
              <button
              // type="button"
              // className="decrement number-button"
              // onClick={() => {
              //   updateQuantity(this.props.product.quantity - 1);
              // }}
              >
                {/* <span className="hide-content">Decrement quantity</span> */}
                <span aria-hidden="true">-</span>
              </button>
              <input
                className="quantity"
                name="number"
                type="number"
                min="1"
                max="10"
                value=""
                size="2"
                //   onChange={event => {
                //     updateQuantity(event.target.value);
                //   }}
              />
              <button
              // type="button"
              // className="increment number-button"
              // onClick={() => {
              //   updateQuantity(this.props.product.quantity + 1);
              // }}
              >
                {/* <span className="hide-content">Increment quantity</span> */}
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="btn-addtocard">
              <button
              // type="submit"
              // className="submit"
              // onClick={(e) => {
              //   addToCart(product.id);
              //   console.log(this.props.product.quantity);
              //   e.preventDefault();
              // }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;
