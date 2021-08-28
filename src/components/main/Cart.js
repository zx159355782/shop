import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions";

const Cart = ({ currentProducts, currentUserId, deleteFromCart }) => {
  const renderCartList = () => {
    if (Object.keys(currentProducts).length > 0 && currentUserId) {
      return Object.keys(currentProducts).map((p) => {
        return (
          <div className="cart-product" key={currentProducts[p].name}>
            <div className="cart-product-description">
              <img
                className="cart-product-description-photo"
                src={currentProducts[p].photo}
                alt=""
              />
              <span className="cart-product-description-name">
                {currentProducts[p].name}
              </span>
            </div>
            <div className="cart-product-price">
              <span>數量: {currentProducts[p].count}</span>
              <span>
                $ {currentProducts[p].price * currentProducts[p].count}
              </span>
              <span
                className="delete"
                onClick={() =>
                  deleteFromCart(currentProducts[p], currentUserId)
                }
              >
                刪除
              </span>
            </div>
          </div>
        );
      });
    } else if (!currentUserId) {
      return <div style={{ textAlign: "center" }}>請先登入帳號</div>;
    } else {
      return <div style={{ textAlign: "center" }}>載入中...或尚未加入商品</div>;
    }
  };
  return <div className="cart">{renderCartList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    currentProducts: state.currentProducts,
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { deleteFromCart })(Cart);
