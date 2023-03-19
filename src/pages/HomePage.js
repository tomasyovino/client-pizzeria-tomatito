import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Banner, AboutUs, Menu } from "../components";
import CartBadge from "../components/CartBadge";
import { CartState } from "../context/CartProvider";

const HomePage = () => {
    const { cart } = CartState();
    const [showBadge, setShowBadge] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > window.innerHeight && cart.length > 0) {
            setShowBadge(true);
        } else {
            setShowBadge(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [cart]);

    return (
        <>
            <Link
                to="/cart"
                className={
                    showBadge 
                        ? cart.length < 1
                            ? "hidden"
                            : "block fixed bottom-10 right-10 z-20 rounded-full bg-yellow-400 text-white px-2 py-2 text-xs font-bold "
                        : "hidden"
                }
            >
                <CartBadge />
            </Link>
            <Banner />
            <AboutUs />
            <Menu />
        </>
    );
};

export default HomePage;