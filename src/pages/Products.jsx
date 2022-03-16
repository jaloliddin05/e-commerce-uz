import React, { useContext } from "react";
import { Context } from "../Context/Context";
import logo from "../images/products_logo.svg";
import "./Products.css";

const Products = () => {
  let { chooseProduct, setKorzinka } = useContext(Context);

  function onClickKorzinka() {
    setKorzinka((krz) => {
      const names = new Set();
      krz = [...krz, chooseProduct];
      krz = krz.filter((item) =>
        !names.has(JSON.stringify(item))
          ? names.add(JSON.stringify(item))
          : false
      );
      window.localStorage.setItem("korzinka", JSON.stringify(krz));
      return krz;
    });
  }

  return (
    <section className="products_selected">
      <div className="container products_container1">
        <div className="products_container1_top">
          <label>
            <input
              type="checkbox"
              className="naushnik_heart_input visually-hidden"
            />
            <span className="naushnik_heart_img_span"></span>
          </label>
          <img src={logo} alt="" width={86} height={53} className="logo" />
        </div>
        <div className="product_img_box">
          <img
            src={chooseProduct?.img?.main}
            alt=""
            width={285}
            height={250}
            className="product_images"
          />
          <img
            src={chooseProduct?.img?.top}
            alt=""
            width={285}
            height={250}
            className="product_images"
          />
          <img
            src={chooseProduct?.img?.right}
            alt=""
            width={285}
            height={250}
            className="product_images"
          />
          <img
            src={chooseProduct?.img?.bottom}
            alt=""
            width={285}
            height={250}
            className="product_images"
          />
          <img
            src={chooseProduct?.img?.left}
            alt=""
            width={285}
            height={250}
            className="product_images"
          />
        </div>
        <div className="products_container1_bottom">
          <p className="product_name"></p>
          <p className="product_price"></p>
        </div>
      </div>
      <div className="container products_container2">
        <div className="products_container2_left">
          <div className="overview_top">Описание и характеристики</div>
          <ul className="overview_list">
            {chooseProduct?.info?.split("&").map((inf) => {
              return (
                <li key={inf.id} className="overview_item">
                  {inf}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="products_container2_right">
          <button className="buy_product">Купить!</button>
          <button onClick={onClickKorzinka} className="korzinka_product">
            <span className="korzinka_img"></span>
            Добавить в корзину
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
