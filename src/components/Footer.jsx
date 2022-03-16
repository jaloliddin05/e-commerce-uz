import React from "react";
import vk from "../images/VK.svg";
import tg from "../images/Telegram.svg";
import insta from "../images/Instagram.svg";
import wt_up from "../images/Whatsapp.svg";
import logo from "../images/QPICK.svg";
import globus from "../images/globus.svg";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="home_footer">
      <div className="container footer_container">
        <Link to="/products" className="footer_logo_link">
          <img
            src={logo}
            alt=""
            width={85}
            height={30}
            className="footer_logo_img"
          />
        </Link>
        <ul className="footer_page_list">
          <li className="footer_page_item">
            <Link to="/favorites" className="footer_item_link">
              Избранное
            </Link>
          </li>
          <li className="footer_page_item">
            <Link to="/korzinka" className="footer_item_link">
              Корзина
            </Link>
          </li>
          <li className="footer_page_item">
            <Link to="/contacts" className="footer_item_link">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="footer_languages">
          <Link to="/services" className="footer_languages_desc">
            Условия сервиса
          </Link>
          <div className="footer_languages_bootom">
            <img
              src={globus}
              alt=""
              width={20}
              height={20}
              className="footer_globus_img"
            />
            <label className="footer_lang_label">
              <input
                type="radio"
                name="lang"
                className="footer_lang_input visually-hidden"
              />
              <span className="footer_lang_span">UZ</span>
            </label>

            <label className="footer_lang_label">
              <input
                type="radio"
                name="lang"
                className="footer_lang_input visually-hidden"
              />
              <span className="footer_lang_span">EN</span>
            </label>

            <label className="footer_lang_label">
              <input
                type="radio"
                name="lang"
                className="footer_lang_input visually-hidden"
              />
              <span className="footer_lang_span">RU</span>
            </label>
          </div>
        </div>
        <div className="footer_messangers">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="vk_link footer_messanger_img"
          >
            <img src={vk} alt="" width={30} height={30} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="instagram_link footer_messanger_img"
          >
            <img src={insta} alt="" width={30} height={30} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="telegram_link footer_messanger_img"
          >
            <img src={tg} alt="" width={30} height={30} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="whats_up_link footer_messanger_img"
          >
            <img src={wt_up} alt="" width={30} height={30} />
          </a>
        </div>
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
