import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";

const Item = ({ product, addToCart, currentUserId, currentProducts }) => {
  const add = () => {
    if (currentUserId && currentProducts[product.id]) {
      console.log(currentProducts[product.id].count);
      addToCart(product, currentUserId, currentProducts[product.id].count + 1);
    } else if (currentUserId && !currentProducts[product.id]) {
      addToCart(product, currentUserId, 1);
    }
  };

  return (
    <div className="item">
      <img className="item-photo" src={product.photo} alt="" />
      <p className="item-name">{product.name}</p>
      <p className="item-price">$ :{product.price}</p>
      <button className="item-add" onClick={add}>
        加入購物車
      </button>
    </div>
  );
};

const mapStateToPrpos = (state) => {
  return {
    currentUserId: state.auth.userId,
    currentProducts: state.currentProducts,
  };
};

export default connect(mapStateToPrpos, { addToCart })(Item);
