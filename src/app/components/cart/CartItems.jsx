"use client";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  DeleteCart,
} from "@/app/redux/action/types";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
const CartItems = ({ index, cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-items">
      <div className="product">
        <div className="product-img">
          <Image
            src={cartItem.images[0].src}
            alt={cartItem.name}
            width={140}
            height={140}
            priority
          />
        </div>
        <h3 className="cart-title">{cartItem.name}</h3>
      </div>
      <div className="detail">
        <div className="cart-quantity">
          <span
            className="sub"
            onClick={() => dispatch(DecreaseQuantity(index))}
          >
            -
          </span>
          <span className="txt">{cartItem.quantity}</span>
          <span
            className="plus"
            onClick={() => dispatch(IncreaseQuantity(index))}
          >
            +
          </span>
        </div>
        <div className="cart-price">
          <p className="price">
            {(cartItem.quantity * cartItem.price).toLocaleString("en-US")} $
          </p>
        </div>
        <div className="cart-delete">
          <button
            className="remove"
            type="button"
            onClick={() => dispatch(DeleteCart(index))}
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
