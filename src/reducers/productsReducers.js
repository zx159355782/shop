import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_FROM_CART,
  FETCH_PRODUCTS,
} from "../actions/types";

const productsReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FROM_CART:
      const copy = Object.assign({}, state);
      delete copy[action.payload];
      return { ...copy };
    case FETCH_PRODUCTS:
      return { ...action.payload };
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default productsReducers;
