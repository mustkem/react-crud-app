import { actionTypes } from "../action-types/action-types";

const initialState = {};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL: {
      return {
        ...action.payload,
      };
    }

    default:
      return { ...state };
  }
}
