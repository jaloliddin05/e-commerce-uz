import React, { useContext } from "react";
import logo from "../images/QPICK.svg";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";

const Header = () => {
  let { likedNaushnik, likedAirDots, korzinka } = useContext(Context);

  return (
    <>
      <header className="header">
        <div className="container header_container">
          <Link to="/" className="header_logo">
            <img
              src={logo}
              alt=""
              width={85}
              height={30}
              className="header_logo_img"
            />
          </Link>
          <form className="header_form">
            <span className="mobile_span"></span>
            <select name="" id="" className="header_select">
              <option value="">Выбрать модель телефона</option>
            </select>
          </form>
          <div className="header_btn_box">
            <Link to="/favorites" className="liked_products_btn"></Link>
            <span className="liked_products_num">
              {likedNaushnik.length + likedAirDots.length}
            </span>
            <Link to="/korzinka" className="korzinka_btn"></Link>
            <span className="korzinka_num">{korzinka.length}</span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
