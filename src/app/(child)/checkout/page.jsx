"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ResetStore } from "@/app/redux/action/types";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue, reset } = useForm();
  const items = useSelector((state) => state._todoProduct);
  const ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  if (ListCart.length > 0) {
    const handleChange = (e) => {
      setValue(e.target.name, e.target.value);
    };
    const onSubmit = async (data) => {
      const orderData = {
        payment_method: "cash",
        payment_method_title: "Cash",
        set_paid: false,
        billing: {
          first_name: data.name,
          address_1: data.address,
          email: data.email,
          phone: data.phone,
        },
        shipping: {
          first_name: data.name,
          address_1: data.address,
        },
        line_items: ListCart.map((product) => ({
          product_id: product.id,
          quantity: product.quantity,
        })),
      };
      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        const data = await response.json();

        if (data.success) {
          console.log("Order created data:", data.order);
        } else {
          console.error("Error placing order:", data.error);
        }
      } catch (error) {
        console.error("Error placing order:", error);
      }
      reset();
      dispatch(ResetStore());
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                      <li>
                        <label htmlFor="name">Name</label>
                        <p className="input_cus">
                          <input
                            type="text"
                            name="name"
                            {...register("name", { required: "Required" })}
                            onChange={handleChange}
                          />
                          {errors?.name?.message && (
                            <span>{errors.name.message}</span>
                          )}
                        </p>
                      </li>
                      <li>
                        <label htmlFor="phone">Phone</label>
                        <p className="input_cus">
                          <input
                            type="text"
                            name="phone"
                            {...register("phone", { required: true })}
                            onChange={handleChange}
                          />
                          {errors?.phone?.message && (
                            <span>{errors.phone.message}</span>
                          )}
                        </p>
                      </li>
                      <li>
                        <label htmlFor="email">Email</label>
                        <p className="input_cus">
                          <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            onChange={handleChange}
                          />
                          {errors?.email?.message && (
                            <span>{errors.email.message}</span>
                          )}
                        </p>
                      </li>
                      <li>
                        <label htmlFor="address">Address</label>
                        <p className="input_cus">
                          <input
                            type="text"
                            name="address"
                            {...register("address", { required: true })}
                            onChange={handleChange}
                          />
                          {errors?.address?.message && (
                            <span>{errors.address.message}</span>
                          )}
                        </p>
                      </li>
                      <li>
                        <button type="submit" className="btn-primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
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
  } else {
    return (
      <div className="page-checkout">
        <section className="checkout">
          <div className="inner">
            <h2 className="page-ttl">CHECKOUT</h2>
            <div className="btn-primary">
              <Link href="/products">Shopping</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Checkout;
