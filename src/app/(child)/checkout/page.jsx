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
    id: 34,
    parent_id: 0,
    status: "pending",
    currency: "VND",
    version: "7.7.2",
    prices_include_tax: false,
    date_created: "2023-12-06T08:27:54",
    date_modified: "2023-12-06T08:27:54",
    discount_total: "0",
    discount_tax: "0",
    shipping_total: "0",
    shipping_tax: "0",
    cart_tax: "0",
    total: "0",
    total_tax: "0",
    customer_id: 0,
    order_key: "wc_order_vXDDdAhKJoAMG",
    billing: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: "",
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      phone: "",
    },
    payment_method: "",
    payment_method_title: "",
    transaction_id: "",
    customer_ip_address: "",
    customer_user_agent: "",
    created_via: "rest-api",
    customer_note: "",
    date_completed: null,
    date_paid: null,
    cart_hash: "",
    number: "34",
    meta_data: [],
    line_items: [],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    payment_url:
      "http://demo01-woo.local.vn/checkout/order-pay/34/?pay_for_order=true&key=wc_order_vXDDdAhKJoAMG",
    is_editable: true,
    needs_payment: false,
    needs_processing: false,
    date_created_gmt: "2023-12-06T08:27:54",
    date_modified_gmt: "2023-12-06T08:27:54",
    date_completed_gmt: null,
    date_paid_gmt: null,
    currency_symbol: "₫",
    _links: {
      self: [
        {
          href: "http://demo01-woo.local.vn/wp-json/wc/v3/orders/34",
        },
      ],
      collection: [
        {
          href: "http://demo01-woo.local.vn/wp-json/wc/v3/orders",
        },
      ],
    },
  };

  const handleOrderSubmit = async () => {
    try {
      const response = await axios.post("/api/orders", orderData);
      console.log("Order created:", response);
      return response;
    } catch (error) {
      console.error("Error creating order jsx:", error.message);
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
