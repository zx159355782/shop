import React from "react";
import { connect } from "react-redux";
import Item from "../Item";

const Products = ({ products }) => {
  const renderProducts = () => {
    return products.map((product) => {
      return <Item product={product} key={product.name} />;
    });
  };
  return (
    <div className="products">
      <div className="items">{renderProducts()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Products);
