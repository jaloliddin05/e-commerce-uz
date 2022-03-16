import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Korzinka from "./pages/Korzinka";
import Checkout from "./pages/Checkout";
import Conclusion from "./pages/Conclusion";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:title/:id" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/korzinka" element={<Korzinka />} />
          <Route path="/ordering" element={<Checkout />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
