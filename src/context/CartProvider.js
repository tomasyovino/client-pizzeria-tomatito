import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
        if (cartInfo) setCart(cartInfo);
    }, []);

    const addToCart = (product) => {
        const existingProduct = cart.find((p) => p._id === product._id);
        if (existingProduct) {
            const updatedCart = cart.map((p) => {
                if (p._id === product._id) {
                    return {
                        ...p,
                        quantity: p.quantity + product.quantity
                    };
                };
                return p;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        };
    };
    
    return <CartContext.Provider
        value={{
            cart,
            setCart,
            addToCart
        }}
    >
        { children }
    </CartContext.Provider>
};

export const CartState = () => useContext(CartContext);
export default CartProvider;