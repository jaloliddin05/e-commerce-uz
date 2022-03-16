import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import "./Favorites.css";

const Favorites = () => {
  let { likedAirDots, likedNaushnik, setChooseProduct } = useContext(Context);

  function onClickUlP(evt) {
    if (
      evt.target.matches(".favorites_link") ||
      evt.target.matches(".favorites_item_img")
    ) {
      let clickedProduct = likedAirDots.find(
        (air) => String(air.id) === String(evt.target.dataset.linkClick)
      );
      setChooseProduct(clickedProduct);
    }
  }
  function onClickUlN(evt) {
    if (
      evt.target.matches(".favorites_link") ||
      evt.target.matches(".favorites_item_img")
    ) {
      let clickedProduct = likedNaushnik.find(
        (air) => String(air.id) === String(evt.target.dataset.linkClick)
      );
      setChooseProduct(clickedProduct);
    }
  }

  return (
    <>
      <section className="favorites">
        <div className="favorites_container container">
          <h2 className="favorites_heading">Избранное</h2>
          <h3
            className={
              likedAirDots.length > 0 ? "favorites_airdots_heading" : "none"
            }
          >
            Беспроводные наушники
          </h3>
          <ul
            onClick={onClickUlP}
            className="favorites_list_air_dots favorites_list"
          >
            {JSON.parse(window.localStorage.getItem("likeD"))?.map((likeP) => {
              return (
                <li key={likeP.id} className="favorites_item">
                  <label className="favorites_label">
                    <input
                      type="checkbox"
                      className="favorites_heart_input visually-hidden"
                      defaultChecked
                    />
                    <span className="favorites_heart_img_span"></span>
                  </label>
                  <Link
                    to={`/products/${likeP.name}/${likeP.id}`}
                    className="favorites_link"
                    data-link-click={likeP.id}
                  >
                    <img
                      src={likeP.img.main}
                      alt=""
                      width={220}
                      height={237}
                      className="favorites_item_img"
                      data-link-click={likeP.id}
                    />
                  </Link>

                  <div className="favorites_item_body">
                    <div className="favorites_body_left">
                      <h3 className="favorites_item_heading">{likeP.name}</h3>
                      <p className="favorites_item_rate">
                        <span className="favorites_span_star"></span>
                        {likeP.rate}
                      </p>
                    </div>
                    <p className="favorites_item_cost">{likeP.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <h3
            className={
              likedNaushnik.length > 0 ? "favorites_naushnik_heading" : "none"
            }
          >
            Наушники
          </h3>
          <ul
            onClick={onClickUlN}
            className="favorites_list_air_naushnik favorites_list"
          >
            {JSON.parse(window.localStorage.getItem("likeN"))?.map((likeN) => {
              return (
                <li key={likeN.id} className="favorites_item">
                  <label className="favorites_label">
                    <input
                      type="checkbox"
                      className="favorites_heart_input visually-hidden"
                      defaultChecked
                    />
                    <span className="favorites_heart_img_span"></span>
                  </label>
                  <Link
                    to={`/products/${likeN.name}/${likeN.id}`}
                    className="favorites_link"
                    data-link-click={likeN.id}
                  >
                    <img
                      src={likeN.img.main}
                      alt=""
                      width={220}
                      height={237}
                      className="favorites_item_img"
                      data-link-click={likeN.id}
                    />
                  </Link>
                  <div className="favorites_item_body">
                    <div className="favorites_body_left">
                      <h3 className="favorites_item_heading">{likeN.name}</h3>
                      <p className="favorites_item_rate">
                        <span className="favorites_span_star"></span>
                        {likeN.rate}
                      </p>
                    </div>
                    <p className="favorites_item_cost">{likeN.price}$</p>
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

export default Favorites;
