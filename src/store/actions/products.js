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

export const onGetProductDetail = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL,
    payload: data,
  };
};

export const getProductDetail = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "get",
      url: "/products/" + id,
    })
      .then(function (response) {
        dispatch(onGetProductDetail(response.data));
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
    console.log(payload);
    httpInstance({
      method: "put",
      url: "/products/" + id,
      data: payload,
    })
      .then(function (response) {
        dispatch(onGetProductDetail(response.data));
        res(response);
      })
      .catch(function (error) {
        rej(error.response);
      });
  });
};

export const onDeleteProduct = (id) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const deleteProduct = (id) => (dispatch) => {
  return new Promise((res, rej) => {
    httpInstance({
      method: "delete",
      url: "/products/" + id,
    })
      .then(function (response) {
        dispatch(onDeleteProduct(id));
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
