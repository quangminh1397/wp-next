// "use client";
// import React from "react";
// import { Provider } from "react-redux";
// const Providers = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default Providers;

"use client";
import store from "./stores";
import { Provider } from "react-redux";
export default function ReduxProvider({ children }) {
  return (
      <Provider store={store}>
          {children}
      </Provider>
  );
}
