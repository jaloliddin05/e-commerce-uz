import { createContext, useEffect, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [likedAirDots, setLikedAirDots] = useState(
    JSON.parse(window.localStorage.getItem("likeD")) || []
  );
  const [likedNaushnik, setLikedNaushnik] = useState(
    JSON.parse(window.localStorage.getItem("likeN")) || []
  );
  const [korzinka, setKorzinka] = useState(
    JSON.parse(window.localStorage.getItem("korzinka")) || []
  );
  const [chooseProduct, setChooseProduct] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  let [adminInfo, setAdminInfo] = useState([]);

  useEffect(() => {
    fetch("https://e-commerce-my-uz.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        likedAirDots,
        setLikedAirDots,
        chooseProduct,
        setChooseProduct,
        likedNaushnik,
        setLikedNaushnik,
        korzinka,
        setKorzinka,
        totalCost,
        setTotalCost,
        adminInfo,
        setAdminInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
