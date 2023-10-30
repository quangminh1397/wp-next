"use client";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Calculator from "./Calculator";
import DisplayValue from "./DisplayValue";
import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../redux/reducer/CalculatorSlice";

const store = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
});

const ClientComponent = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Calculator />
        <DisplayValue />
      </Provider>
    </Fragment>
  );
};

export default ClientComponent;
