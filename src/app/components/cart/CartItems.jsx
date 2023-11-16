import Image from "next/image";
import React from "react";

const CartItems = () => {
  return (
    <div className="cart-items">
      <div className="product">
        <div className="product-img">
          <Image
            src={"/assets/images/product/lamp1-trans.png"}
            alt="I love lamp"
            width={140}
            height={140}
            priority
          />
        </div>
        <h3 className="cart-title">product 01</h3>
      </div>
      <div className="detail">
        <div className="cart-quantity">
          <p className="hide-content">Product quantity.</p>
          <p className="hide-content">
            Change the quantity by using the buttons, or alter the input
            directly.
          </p>
          <button
            type="button"
            //   className="decrement number-button"
            //   onClick={() => {
            //     cart_decrement(item.id, item.quantity);
            //   }}
          >
            <span className="hide-content">Decrement quantity</span>
            <span aria-hidden="true">-</span>
          </button>
          <input
            className="quantity"
            name="number"
            type="number"
            min="1"
            max="10"
            size="2"
            //   defaultValue={item.quantity}
            //   onBlur={event => {
            //     cart_edit(item.id, event.target.value);
            //     console.log(event.target.value);
            //   }}
          />
          <button
            type="button"
            className="increment number-button"
            //   onClick={() => {
            //     cart_increment(item.id, item.quantity);
            //   }}
          >
            <span className="hide-content">Increment quantity</span>
            <span aria-hidden="true">+</span>
          </button>
        </div>
        <div className="cart-price">
          <p className="price">
            <span>
              <span className="hide-content">Price per item </span>$
              <span className="product-price">
                {/* {item.unit_price.amount / 100} */}
              </span>
              <span aria-hidden="true"> / </span>
            </span>
            <span className="hide-content">Product subtotal </span>$
            <span className="total-product-price">
              {/* {(item.unit_price.amount / 100) * item.quantity} */}
            </span>
          </p>
        </div>
        <div className="cart-delete">
          <button
            className="remove"
            type="button"
            //   onClick={() => {
            //     cart_edit(item.id, 0);
            //   }}
          >
            <span className="hide-content">Delete item</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15.55635 15.55635"
            >
              <rect
                fill="currentColor"
                x="-2.22183"
                y="6.77817"
                width="20"
                height="2"
                transform="translate(7.77817 -3.22183) rotate(45)"
              />
              <rect
                fill="currentColor"
                x="-2.22183"
                y="6.77817"
                width="20"
                height="2"
                transform="translate(18.77817 7.77817) rotate(135)"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
