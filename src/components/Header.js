import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
// import SmallCart from "./SmallCart";

import logo from "../img/logo.jpg";

const Header = ({ fetchProducts, currentUserId }) => {
  // const [smallCart, setSmallCart] = useState(false);

  useEffect(() => {
    if (currentUserId) fetchProducts(currentUserId);
  }, [currentUserId, fetchProducts]);

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header-logo-img" />
        </Link>
      </div>
      <ul className="header-menu">
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/products">商品</Link>
        </li>
        <li>
          <GoogleAuth />
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          {/* {smallCart ? <SmallCart /> : ""} */}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchProducts })(Header);
