"use client";
import React from "react";
import { Field, reduxForm } from "redux-form";

const Checkout = () => {
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
                    <p className="input_cus"><input type="text" /></p>
                  </li>
                  <li>
                    <label htmlFor="">mail</label>
                    <p className="input_cus"><input type="text" /></p>
                  </li>
                </ul>
              </div>
              {/* <div className="form-content">
                <div className="form-fields">
                  <label className="input-wrap name required">
                    <span className="hide-content">Name</span>
                    <Field
                      component="input"
                      className="name"
                      required="required"
                      placeholder="Name"
                      name="name"
                      type="text"
                      aria-label="Name"
                    />
                  </label>
                  <label className="input-wrap email required">
                    <span className="hide-content">Email address</span>
                    <Field
                      component="input"
                      className="email"
                      required="required"
                      placeholder="Email address"
                      name="email"
                      type="email"
                      aria-label="Email"
                    />
                  </label>
                </div>
                <button type="button" className="continue">
                  submit
                </button>
              </div> */}
            </div>
            <div className="block">
              <h3 className="checkout-ttl">SUMMARY</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Checkout;
