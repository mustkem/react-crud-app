import { actionTypes } from "../action-types/action-types";

const initialState = {};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      console.log(state);

      return {
        ...state,
        products: action.payload,
      };
    }

    case actionTypes.DELETE_PRODUCT: {
      let products =
        state.products &&
        state.products.filter((item) => item.id !== action.payload);
      return {
        ...state,
        products: products,
      };
    }

    default:
      return { ...state };
  }
}
