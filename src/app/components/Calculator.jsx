import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducer/CalculatorSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment(Math.floor(Math.random() * 5) + 1))}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement(Math.floor(Math.random() * 5) + 1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Calculator;
