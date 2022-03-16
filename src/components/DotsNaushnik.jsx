import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link, Outlet } from "react-router-dom";

const Dotsnaushnik = () => {
  let { products, setLikedAirDots, setChooseProduct } = useContext(Context);

  let [like, setLike] = useState([]);

  let air_dots_products = products.filter((pro) => pro.category === "air_dots");

  function inputChecked(a, b) {
    let checkedHeart = air_dots_products.find(
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
      return like;
    }
    const names = new Set();
    like = like.filter((item) =>
      !names.has(JSON.stringify(item)) ? names.add(JSON.stringify(item)) : false
    );
    window.localStorage.setItem("likeD", JSON.stringify(like));
    setLikedAirDots(like);
  }

  function onClickUl(evt) {
    if (
      evt.target.matches(".naushnik_link") ||
      evt.target.matches(".naushnik_item_img")
    ) {
      let clickedProduct = air_dots_products.find(
        (air) => String(air.id) === String(evt.target.dataset.linkClick)
      );
      setChooseProduct(clickedProduct);
    }
  }

  return (
    <>
      <section className="naushnik">
        <div className="container naushnik_container">
          <h2 className="naushnik_heading">Беспроводные наушники</h2>
          <ul onClick={onClickUl} className="naushnik_list">
            {air_dots_products?.map((air) => {
              return (
                <li key={air.id.toString()} className="naushnik_item">
                  <label className="naushnik_label">
                    <input
                      type="checkbox"
                      className="naushnik_heart_input visually-hidden"
                      onChange={(e) => inputChecked(e.target.checked, air.id)}
                    />
                    <span className="naushnik_heart_img_span"></span>
                  </label>
                  <Link
                    to={`/products/${air.name}/${air.id}`}
                    className="naushnik_link"
                    data-link-click={air.id}
                  >
                    <img
                      src={air.img.main}
                      alt=""
                      width={220}
                      height={237}
                      className="naushnik_item_img"
                      data-link-click={air.id}
                    />
                  </Link>
                  <div className="naushnik_item_body">
                    <div className="naushnik_body_left">
                      <h3 className="naushnik_item_heading">{air.name}</h3>
                      <p className="naushnik_item_rate">
                        <span className="naushnik_span_star"></span>
                        {air.rate}
                      </p>
                    </div>
                    <p className="naushnik_item_cost">{air.price}$</p>
                  </div>

                  <Outlet />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dotsnaushnik;
