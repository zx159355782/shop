import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TO_CART,
  FETCH_PRODUCTS,
  CLEAR_CART,
  DELETE_FROM_CART,
} from "./types";
import shop from "../api/shop";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addToCart = (product, userId, count) => async (dispatch) => {
  const response = await shop.put(`${userId}/${product.id}.json`, {
    ...product,
    count: count,
  });

  dispatch({
    type: ADD_TO_CART,
    payload: response.data,
  });
};

export const deleteFromCart = (product, userId) => async (dispatch) => {
  await shop.delete(`${userId}/${product.id}.json`);
  dispatch({ type: DELETE_FROM_CART, payload: product.id });
};

export const fetchProducts = (userId) => async (dispatch) => {
  const response = await shop.get(`${userId}.json`);
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};
