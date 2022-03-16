import React, { useContext } from "react";
import "./Korzinka.css";
import korzinka_img from "../images/korzinka_page.png";
import korzinka_map from "../images/korzinka_map.png";
import { Link } from "react-router-dom";
import KorzinkaItem from "../components/korzinka_item";
import { Context } from "../Context/Context";

const Korzinka = () => {
  let { korzinka, totalCost } = useContext(Context);

  const onDelete = (i) => {
    let index = korzinka.findIndex((kr) => String(kr.id) === String(i));
    korzinka.splice(index, 1);
    window.localStorage.setItem("korzinka", JSON.stringify(korzinka) || []);
    document.location.reload();
  };

  return (
    <section className="korzinka_uz">
      {JSON.parse(window.localStorage.getItem("korzinka"))?.length > 0 ||
      JSON.parse(window.localStorage.getItem("korzinka")) !== null ? (
        <div className="container korzinka_uz_container">
          <ul className="korzinka_list">
            {JSON.parse(window.localStorage.getItem("korzinka")).map((krz) => {
              return (
                <KorzinkaItem key={krz.id} onDelete={onDelete} krz={krz} />
              );
            })}
            <img
              src={korzinka_map}
              alt=""
              width={673}
              height={288}
              className="korzinka_map"
            />
          </ul>
          <div className="korzinka_right">
            <div className="korzinka_right_top">
              <p className="total_cost_desc">ИТОГО</p>
              <p className="total_cost">{totalCost}</p>
            </div>
            <Link to="/" className="korzinka_right_link">
              Перейти к оформлению
            </Link>
          </div>
        </div>
      ) : (
        <div className="korzinka_uz_container2">
          <img
            src={korzinka_img}
            alt=""
            width={540}
            height={504}
            className="korzinka_uz_img"
          />
          <Link to="/products" className="korzinka_uz_link">
            В каталог товаров
          </Link>
        </div>
      )}
    </section>
  );
};

export default Korzinka;
