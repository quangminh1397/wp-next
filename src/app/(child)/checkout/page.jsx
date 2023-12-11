"use client";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state._todoProduct);
  const ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  const orderData = {};
  const handleOrderSubmit = async () => {
    const add = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    
  };

  return (
    <div className="page-checkout">
      <section className="checkout">
        <div className="inner">
          <h2 className="page-ttl">CHECKOUT</h2>
          <div className="checkout-cont">
            <div className="block">
              <h3 className="checkout-ttl">Your details</h3>
              <div className="form-cont">
                <ul>
                  <li>
                    <label htmlFor="">name</label>
                    <p className="input_cus">
                      <input type="text" />
                    </p>
                  </li>
                  <li>
                    <label htmlFor="">mail</label>
                    <p className="input_cus">
                      <input type="text" />
                    </p>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleOrderSubmit}
                    >
                      submit
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block">
              <h3 className="checkout-ttl">SUMMARY</h3>
              <div className="checkout-product">
                {ListCart &&
                  ListCart.map((cart, index) => {
                    return (
                      <div key={index} className="product">
                        <div className="product-image">
                          <Image
                            src={cart.images[0].src}
                            alt={cart.name}
                            width={140}
                            height={140}
                            priority
                          />
                        </div>
                        <div className="product-detail">
                          <h3>{cart.name}</h3>
                          <div className="sec">
                            <p className="txt">{cart.quantity}</p>
                            <p className="price">{cart.price}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="total">
                  <p>Total : {Number(TotalCart).toLocaleString("en-US")} $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
