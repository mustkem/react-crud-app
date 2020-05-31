import { connect } from "react-redux";

import ProductDetail from "../components/ProductDetail/ProductDetail";

import { getProductDetail, updateProduct } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (id) => dispatch(getProductDetail(id)),
    updateProduct: (id, payload) => dispatch(updateProduct(id, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
