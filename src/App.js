import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import { HomePage, CartPage, ContactPage, NotFoundPage } from "./pages";
import { Footer, Navbar, ScrollToTop } from "./components";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
