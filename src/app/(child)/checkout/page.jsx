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
  const orderData = {
    billing: {
      first_name: "John",
      last_name: "Doe",
      address_1: "123 Main Street",
      city: "Cityville",
      state: "CA",
      postcode: "12345",
      country: "US",
      email: "john.doe@example.com",
      phone: "555-555-5555",
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "123 Main Street",
      city: "Cityville",
      state: "CA",
      postcode: "12345",
      country: "US",
    },
    line_items: [
      {
        id: 2,
        name: "T-shirt",
        product_id: 30,
        variation_id: 0,
        quantity: 1,
      },
    ],
  };
  const test = JSON.stringify(orderData);
  console.log('testtttttttttt', test);

  const handleOrderSubmit = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      console.log("check data:", data);

      if (data.success) {
        console.log("Order created:", data.order);
      } else {
        console.error("Error placing order:", data.error);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
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
                            <p className="txt">Number: {cart.quantity}</p>
                            <p className="price">Price: {cart.price}$</p>
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
