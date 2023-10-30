
import { ADD, SUB } from './types';

export const increment = (value) => (dispatch) => {
  dispatch({ type: ADD , payload: value });
}

export const decrement = (value) => (dispatch) => {
  dispatch({ type: SUB, payload: value });
}