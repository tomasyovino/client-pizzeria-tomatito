import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
        if (cartInfo) setCart(cartInfo);
    }, []);

    return <CartContext.Provider
        value={{
            cart,
            setCart
        }}
    >
        { children }
    </CartContext.Provider>
};

export const CartState = () => useContext(CartContext);
export default CartProvider;