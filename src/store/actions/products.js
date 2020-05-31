import httpInstance from "../../helpers/http-client";
import { actionTypes } from "../action-types/action-types";

export const onGetProducts = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload: data,
  };
};

export const getProducts = () => (dispatch) => {
  console.log();
  return new Promise((res, rej) => {
    httpInstance({
      method: "get",
      url: "/products",
    })
      .then(function (response) {
        dispatch(onGetProducts(response.data));
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej();
      });
  });
};

export const updateProduct = (id, payload) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "put",
      url: "/products/" + id,
      data: payload,
    })
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        rej(error.response);
      });
  });
};

export const deleteProduct = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "delete",
      url: "/products/" + id,
    })
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        rej(error.response);
      });
  });
};

export const addProduct = (payload) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "post",
      url: "/products",
      data: payload,
    })
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        rej(error.response);
      });
  });
};
