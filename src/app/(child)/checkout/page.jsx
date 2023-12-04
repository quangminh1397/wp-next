"use client";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Axios from "axios";
// import { productsApi } from "@/app/api/productsApi";

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state._todoProduct);
  const ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  const handleOrderSubmit = async () => {
    try {
      const result = await Axios.post(
        "http://demo01-woo.local.vn/wp-json/wc/v3/orders",
        ListCart,
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: "ck_56e0860e9f6be3a37b027a2236ff11b6ad43df4d",
            password: "cs_e57f39e802d72d3a120dc2e1ef2053eda4d361c4",
          },
        }
      );

      console.log("Order created:", result.data);
    } catch (error) {
      console.error("Error creating order:", error);
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
                      <>
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
                      </>
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
