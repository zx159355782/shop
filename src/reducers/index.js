import { combineReducers } from "redux";
import products from "./products";
import googleAuthReducer from "./gooleAuthReducer";
import productsReducers from "./productsReducers";

export default combineReducers({
  products,
  auth: googleAuthReducer,
  currentProducts: productsReducers,
});
