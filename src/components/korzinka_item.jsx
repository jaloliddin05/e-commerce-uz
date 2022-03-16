import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../Context/Context";

const KorzinkaItem = ({ krz, onDelete }) => {
  let { korzinka, setTotalCost } = useContext(Context);
  let [count, setCount] = useState(0);

  const Incrment = () => {
    let index = korzinka.findIndex((el) => el.id === krz.id);
    korzinka[index].totalPrice = ((count + 1) * krz.price).toFixed(2);
    korzinka[index].totalOrder = count + 1;
    window.localStorage.setItem("korzinka", JSON.stringify(korzinka));

    function findTotal() {
      let result = 0;
      JSON.parse(window.localStorage.getItem("korzinka")).forEach((el) => {
        result += Number(el.totalPrice);
        return result;
      });
      return result;
    }

    setTotalCost(findTotal());
    return setCount(count + 1);
  };
  const Decrment = () => {
    if (count > 0) {
      let index = korzinka.findIndex((el) => el.id === krz.id);
      korzinka[index].totalPrice = ((count - 1) * krz.price).toFixed(2);
      korzinka[index].totalOrder = count - 1;
      window.localStorage.setItem("korzinka", JSON.stringify(korzinka));

      function findTotal() {
        let result = 0;
        JSON.parse(window.localStorage.getItem("korzinka")).forEach((el) => {
          result += Number(el.totalPrice);
          return result;
        });
        return result;
      }

      setTotalCost(findTotal());
      return setCount(count - 1);
    }
  };

  return (
    <li className="korzinka_item">
      <button
        onClick={() => onDelete(krz.id)}
        className="korzinka_item_delete"
      ></button>
      <div className="korzinka_item_top">
        <img
          src={krz.img.main}
          alt=""
          width={147}
          height={136}
          className="korzinka_item_img"
        />
        <div className="korzinka_item_info">
          <h3 className="korzinka_item_heading">{krz.name}</h3>
          <p className="korzinka_item_price">{krz.price}$</p>
        </div>
      </div>
      <div className="korzinka_item_bottom">
        <div className="incr_decr_box">
          <button onClick={Decrment} className="korzinka_decr_btn">
            -
          </button>
          <p className="korzinka_product_number">{count}</p>
          <button onClick={Incrment} className="korzinka_incr_btn">
            +
          </button>
        </div>
        <p className="korzinka_product_cost">
          {(Number(krz.price) * count).toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default KorzinkaItem;
