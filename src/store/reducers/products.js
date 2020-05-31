import { actionTypes } from "../action-types/action-types";

const initialState = {};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case actionTypes.SET_COVERAGE_AREA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return { ...state };
  }
}
