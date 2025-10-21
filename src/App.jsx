import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Registro from "./pages/Registro";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}




