"use client";
import React from "react";
import CartItems from "@/app/components/cart/CartItems";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state._todoProduct);
  const ListCart = [];
  let TotalCart = 0;

  //sửa lại thành map()
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

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
        <div className="cart-product">
          {ListCart &&
            ListCart.map((cart, index) => {
              return <CartItems index={index} key={index} cartItem={cart}/>;
            })}
        </div>
        <div className="cart-total">
          <p>Total : {Number(TotalCart).toLocaleString('en-US')} $</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
