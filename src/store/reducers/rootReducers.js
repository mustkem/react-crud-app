import { combineReducers } from "redux";

import products from "./products";
import productDetail from "./products-detail";

const rootReducer = combineReducers({
  products,
  productDetail,
});
export default rootReducer;
