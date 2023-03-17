import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import { HomePage, CartPage, ContactPage, NotFoundPage } from "./pages";
import { Navbar } from "./pages/components";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
