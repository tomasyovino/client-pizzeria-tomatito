import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
        if (cartInfo) setCart(cartInfo);
    }, []);

    useEffect(() => {
        if(cart.length >= 1) localStorage.setItem("cartInfo", JSON.stringify(cart));
    }, [cart]);

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
        localStorage.setItem("cartInfo", JSON.stringify(cart));
    };

    const plusOneProduct = (productID) => {
        const updatedCart = cart.map((product) => {
            if (product._id === productID) {
                if (product.quantity < 12) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    };
                };
            };
            return product;
        });
        setCart(updatedCart);
    };

    const minusOneProduct = (productID) => {
        const updatedCart = cart.map((product) => {
            if (product._id === productID) {
                if (product.quantity > 1) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    };
                };
            };
            return product;
        });
        setCart(updatedCart);
    };

    const removeFromCart = (productID) => {
        const updatedCart = cart.filter((product) => product._id !== productID);
        setCart(updatedCart);
        localStorage.setItem("cartInfo", JSON.stringify(updatedCart));
    };
    
    return <CartContext.Provider
        value={{
            cart,
            setCart,
            addToCart,
            plusOneProduct,
            minusOneProduct,
            removeFromCart
        }}
    >
        { children }
    </CartContext.Provider>
};

export const CartState = () => useContext(CartContext);
export default CartProvider;