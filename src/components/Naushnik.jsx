import React from "react";
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";

const Naushnik = () => {
  let { products, setLikedNaushnik, setChooseProduct } = useContext(Context);
  let [like, setLike] = useState([]);
  let naushnik_products = products.filter((pro) => pro.category === "naushnik");

  function inputChecked(a, b) {
    let checkedHeart = naushnik_products.find(
      (air) => String(air.id) === String(b)
    );
    if (a) {
      setLike((lk) => {
        lk.push(checkedHeart);
        return lk;
      });
    } else {
      setLike((lk) => {
        if (lk?.includes(checkedHeart)) {
          let index = lk.findIndex((l) => String(l.id) === String(b));
          lk.splice(index, 1);
          return lk;
        }
      });
    }
    const names = new Set();
    like = like.filter((item) =>
      !names.has(JSON.stringify(item)) ? names.add(JSON.stringify(item)) : false
    );
    window.localStorage.setItem("likeN", JSON.stringify(like));
    setLikedNaushnik(like);
  }

  function onClickUl(evt) {
    if (
      evt.target.matches(".naushnik_link") ||
      evt.target.matches(".naushnik_item_img")
    ) {
      let clickedProduct = naushnik_products.find(
        (naush) => String(naush.id) === String(evt.target.dataset.linkClick)
      );
      setChooseProduct(clickedProduct);
    }
  }

  return (
    <>
      <section className="naushnik">
        <div className="container naushnik_container">
          <h2 className="naushnik_heading">Наушники</h2>
          <ul onClick={onClickUl} className="naushnik_list">
            {naushnik_products?.map((naush) => {
              return (
                <li key={naush.id.toString()} className="naushnik_item">
                  <label className="naushnik_label">
                    <input
                      type="checkbox"
                      className="naushnik_heart_input visually-hidden"
                      onChange={(e) => inputChecked(e.target.checked, naush.id)}
                    />
                    <span className="naushnik_heart_img_span"></span>
                  </label>
                  <Link
                    to={`/products/${naush.name}/${naush.id}`}
                    className="naushnik_link"
                    data-link-click={naush.id}
                  >
                    <img
                      src={naush.img.main}
                      alt=""
                      width={220}
                      height={237}
                      className="naushnik_item_img"
                      data-link-click={naush.id}
                    />
                  </Link>
                  <div className="naushnik_item_body">
                    <div className="naushnik_body_left">
                      <h3 className="naushnik_item_heading">{naush.name}</h3>
                      <p className="naushnik_item_rate">
                        <span className="naushnik_span_star"></span>
                        {naush.rate}
                      </p>
                    </div>
                    <p className="naushnik_item_cost">{naush.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Naushnik;
