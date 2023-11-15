import CartItems from "@/app/components/cart/CartItems";
import React from "react";

const Cart = () => {
  return (
    <div className="page-cart">
      <div className="inner">
        <h2 className="page-ttl">SHOPPING CART</h2>
        <div className="cart-heading">
          <p className="heading-product">Product</p>
          <div className="cart-heading-gr">
            <p className="heading-quantity">Quantity</p>
            <p className="heading-price">Price</p>
          </div>
        </div>
        <div className="card-product">
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Cart;
