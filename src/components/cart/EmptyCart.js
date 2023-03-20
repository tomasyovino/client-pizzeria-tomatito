import { HashLink } from "react-router-hash-link";

const EmptyCart = () => {
    return (
        <div className="py-24 px-8 text-center w-full">
            <h3 className="text-2xl font-semibold mb-6">¡Todavía no agregaste productos a tu carrito!</h3> 
            <HashLink to="/#menu" className="text-xl bg-yellow-500 font-semibold hover:bg-yellow-600 p-3 text-white uppercase rounded-xl">Seguir Comprando</HashLink>
        </div>
    );
};

export default EmptyCart;