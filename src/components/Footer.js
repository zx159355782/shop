import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/products">商品</Link>
            </li>
            <li>
              <Link to="cart">購物車</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li className="ig">
              <i className="fab fa-instagram"></i>
            </li>
            <li className="line">
              <i className="fab fa-line"></i>
            </li>
            <li className="fb">
              <i className="fab fa-facebook-square"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright © 2021 ... All rights reserved.</div>
    </div>
  );
};

export default Footer;
