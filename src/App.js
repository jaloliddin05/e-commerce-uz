import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Korzinka from "./pages/Korzinka";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/products" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:title/:id" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/korzinka" element={<Korzinka />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
