import React, { useContext } from "react";
import "./Checkout.css";
import { Link, Outlet } from "react-router-dom";
import checkout_map from "../images/checkout_map.png";
import { Context } from "../Context/Context";

const Checkout = () => {
  const { totalCost } = useContext(Context);

  return (
    <section className="checkout">
      <div className="container checkout_container">
        <div className="checkout_left">
          <div className="checkout_main">
            <div className="checkout_main_top">
              <h3 className="checkout_main_heading"></h3>
              <p className="dostavka_cost_desc"></p>
            </div>
            <img
              src={checkout_map}
              alt=""
              width={375}
              height={146}
              className="checkout_main_img"
            />
            <p className="checkout_main_dostavka_desc">
              <span className="location_img"></span>
              Адрес доставки
            </p>
            <form className="checkout_form">
              <select name="" id="" className="checkout_select">
                <option defaultValue="Город " value="">
                  Город
                </option>
                <option value="Tashkent">Tashkent</option>
                <option value="Almati">Almati</option>
                <option value="Moscow">Moscow</option>
              </select>
              <input
                type="text"
                className="street_input"
                placeholder="Улица / Район"
              />
              <input type="text" className="dom_input" placeholder="Дом" />
              <input
                type="text"
                className="podezd_input"
                placeholder="Подъезд"
              />
              <input
                type="text"
                className="kvartira_input"
                placeholder="Квартира"
              />
            </form>
          </div>
        </div>
        <div className="checkout_right">
          <div className="checkout_right_top">
            <h3 className="checkout_right_top_heading">Ваш заказ</h3>
            <ul className="checkout_right_top_list">
              {JSON.parse(window.localStorage.getItem("korzinka"))?.map(
                (krz) => {
                  return (
                    <li className="checkout_right_top_item">
                      <p className="checkout_right_top_item_name">
                        {`${krz.totalOrder}x   ${krz.name}`}
                      </p>
                      <p className="checkout_right_top_item_price">
                        {krz.totalPrice}$
                      </p>
                    </li>
                  );
                }
              )}
            </ul>
            <div className="checkout_right_top_dostavka">
              <p className="dostavka">Доставка</p>
              <p className="dostavka_price">500$</p>
            </div>
            <div className="checkout_right_top_oplata">
              <p className="oplata">К оплате</p>
              <p className="oplata_price">{totalCost}$</p>
            </div>
          </div>
          <div className="checkout_right_oplata">
            <h3 className="checkout_right_oplata_heading">Способ оплаты</h3>
            <label className="checkout_right_oplata_label">
              <input
                type="radio"
                name="oplata"
                className="checkout_right_oplata_input visually-hidden"
              />
              <span className="checkout_right_oplata_span">
                💳 Счет на kaspi.kz
              </span>
            </label>
            <label className="checkout_right_oplata_label">
              <input
                type="radio"
                name="oplata"
                className="checkout_right_oplata_input visually-hidden"
              />
              <span className="checkout_right_oplata_span">
                📰 Есть промокод?
              </span>
            </label>
          </div>
          <div className="checkout_right_tel_box">
            <h3 className="checkout_right_tel_box_heading">Номер получателя</h3>
            <input
              type="tel"
              className="checkout_right_tel_box_input"
              placeholder="+7 ___ ___ __ __"
            />
          </div>
          <Link to="/conclusion" className="checkout_link">
            Закончить оформление
          </Link>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Checkout;
