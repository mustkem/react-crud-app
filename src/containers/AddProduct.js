import { connect } from "react-redux";

import AddProduct from "../components/AddProduct/AddProduct";

import { addProduct } from "../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (payload) => dispatch(addProduct(payload)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
