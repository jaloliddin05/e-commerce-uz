import React from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link, Outlet } from "react-router-dom";

const Chexol = () => {
  let { products, setChooseProduct } = useContext(Context);
  let chexolProducts = products.filter((pro) => pro.category === "chexol");

  function onClickUl(evt) {
    if (
      evt.target.matches(".chexol_link") ||
      evt.target.matches(".chexol_item_img")
    ) {
      let clickedProduct = chexolProducts.find(
        (air) => String(air.id) === String(evt.target.dataset.linkClick)
      );
      setChooseProduct(clickedProduct);
    }
  }

  return (
    <>
      <section className="chexol">
        <div className="container chexol_container">
          <h2 className="chexol_heading">Чехлы</h2>
          <ul onClick={onClickUl} className="chexol_list">
            {chexolProducts?.map((chex) => {
              return (
                <li key={chex.id} className="chexol_item">
                  <Link
                    to={`/products/${chex.name}/${chex.id}`}
                    className="chexol_link"
                    data-link-click={chex.id}
                  >
                    <img
                      src={chex.img.main}
                      alt=""
                      width={251}
                      height={292}
                      className="chexol_item_img"
                      data-link-click={chex.id}
                    />
                    <h3 className="chexol_item_heading">{chex.material.ru}</h3>
                  </Link>
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

export default Chexol;
