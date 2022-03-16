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

  useEffect(() => {
    fetch("http://localhost:3004/products")
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
