import React from "react";
import { connect } from "react-redux";

const SmallCart = ({ currentProducts }) => {
  const renderCartList = () => {
    return currentProducts.map((product) => {
      return (
        <div className="cart-product" key={product.name}>
          <div className="cart-product-description">
            <img
              className="cart-product-description-photo"
              src={product.photo}
              alt=""
            />
            <span className="cart-product-description-name">
              {product.name}
            </span>
          </div>
          <p>{`$${product.price}`}</p>
        </div>
      );
    });
  };

  return <div className="cart-small">{renderCartList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    currentProducts: state.currentProducts,
  };
};

export default connect(mapStateToProps)(SmallCart);
