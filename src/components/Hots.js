import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions";

const Hots = ({ products, addToCart, currentUserId }) => {
  const hots = () => {
    return products.filter((product) => {
      return product.hot;
    });
  };

  const add = (hot, currentUserId) => {
    if (currentUserId) {
      addToCart(hot, currentUserId);
    }
  };

  const renderHots = () => {
    return hots().map((hot) => {
      return (
        <div key={hot.name + hot.hot} className="item">
          <img className="item-photo" src={hot.photo} alt="" />
          <p className="item-name">{hot.name}</p>
          <p className="item-price">$ :{hot.price}</p>
          <button className="item-add" onClick={() => add(hot, currentUserId)}>
            加入購物車
          </button>
        </div>
      );
    });
  };

  return (
    <div className="hots">
      <h2 className="hots-title">熱銷商品</h2>
      <div className="items">{renderHots()}</div>
      <Link to="/products" className="hots-btn">
        MORE<i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products, currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { addToCart })(Hots);
