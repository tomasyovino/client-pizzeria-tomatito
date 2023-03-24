import { useState } from "react";
import { toast } from "react-toastify";

const OrderSummary = ({ cart, emptyCart, shipping }) => {
    const [name, setName] = useState("");
    const [direction, setDirection] = useState("");
    const [streets, setStreets] = useState("");
    const [payWith, setPayWith] = useState("");
    const [orderForm, setOrderForm] = useState(null);
    const [payMethod, setPayMethod] = useState(null);
    const [error, setError] = useState({});

    const productsTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const total = orderForm === "DELIVERY" ? productsTotal + parseInt(shipping) : productsTotal;

    const validate = () => {
        let errors = {};
        if (!name) errors.name = "* Nombre es requerido";
        if (orderForm === "DELIVERY") {
            if (!direction) errors.direction = "* Dirección es requerida";
            if (payMethod === "EFECTIVO" && !payWith) errors.payWith = "* Abono es requerido";
            if(payMethod === "EFECTIVO" && payWith < total) errors.payWithLess = `* Debe abonar con un monto igual o mayor al referido ($${total})`
        };
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const sendOrder = async (e, order) => {
        e.preventDefault();
        if (!orderForm) {
            return toast.error("Por favor, elija el formato de entrega");
        };
        if (!payMethod) {
            return toast.error("Por favor, elija el método de pago");
        };
        if (!validate()) return;
        
        try {
            sendMessage(order);
            // const data = await fetch(process.env.REACT_APP_BASE_URL, {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: "POST",
            //     body: order
            // });
            // const response = await data.json();
            emptyCart()
        } catch (error) {
            console.log(error);
        } finally {
            setOrderForm(null);
            setPayMethod(null);
            setName("");
            setDirection("");
            setStreets("");
            setPayWith("");
        };
    };

    const sendMessage = (order) => {
        const { direction, payWith, products, amount } = order;
        const productDetails = products.map((product) => ` ${product.quantity} x ${product.name}`);

        const message = orderForm === "DELIVERY"
            ? `¡Hola! Este es el pedido 11111 de *DELIVERY* para el local *Tomatito*\n\nDirección de envío: ${direction}\nEntrecalles: ${streets}\n\nA nombre de: *${name}*\nDetalle del pedido:\n\n${productDetails}\n\n*Subtotal: $${productsTotal}*\n\nEnvío: $${parseInt(shipping)}\n\n*Total: $${amount}*\n\nAbono en *${payMethod}* ${payMethod === "EFECTIVO" ? `con: $${payWith}\n\nVuelto: $${payWith - amount}` : ""}`
            : `¡Hola! Este es el pedido 11111 de *TAKE AWAY* para el local *Tomatito*\n\nA nombre de: *${name}*\nDetalle del pedido:\n\n ${productDetails}\n\n*Subtotal: $${productsTotal}*\n\n*Total: $${amount}*\n\nAbono en *${payMethod}*`;
        
        window.open(`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`);
    };

    return (
        <form className='w-full md:w-1/4 px-8 py-10'>
            <h1 className='font-semibold text-2xl border-b pb-8'>Resumen del pedido</h1>
            {/* BUTTONS */}
            <div className='flex justify-between items-center my-10'>
                <button 
                    type="button"
                    className={
                        orderForm === "TAKEAWAY"
                            ?   'font-semibold p-1.5 rounded-lg text-white text-sm uppercase border-2 border-[#2bbf66] bg-[#2bbf66]'
                            :   'font-semibold p-1.5 rounded-lg text-[#2bbf66] text-sm uppercase border-2 border-[#2bbf66] bg-transparent'
                    }
                    onClick={() => setOrderForm("TAKEAWAY")}
                >
                    TAKE AWAY
                </button>
                <button 
                    type="button"
                    className={
                        orderForm === "DELIVERY"
                            ?   'font-semibold p-1.5 rounded-lg text-white text-sm uppercase border-2 border-[#2bbf66] bg-[#2bbf66]'
                            : 'font-semibold p-1.5 rounded-lg text-[#2bbf66] text-sm uppercase border-2 border-[#2bbf66] bg-transparent'
                    }
                    onClick={() => setOrderForm("DELIVERY")}
                >
                    DELIVERY
                </button>
            </div>
            <div className='flex justify-between items-center my-10'>
                <button 
                    type="button"
                    className={
                        payMethod === "EFECTIVO"
                            ?   'font-semibold p-1.5 rounded-lg text-white text-sm uppercase border-2 border-[#2bbf66] bg-[#2bbf66]'
                            :   'font-semibold p-1.5 rounded-lg text-[#2bbf66] text-sm uppercase border-2 border-[#2bbf66] bg-transparent'
                    }
                    onClick={() => setPayMethod("EFECTIVO")}
                >
                    Efectivo
                </button>
                <button 
                    type="button"
                    className={
                        payMethod === "MERCADOPAGO"
                            ?   'font-semibold p-1.5 rounded-lg text-white text-sm uppercase border-2 border-[#2bbf66] bg-[#2bbf66]'
                            : 'font-semibold p-1.5 rounded-lg text-[#2bbf66] text-sm uppercase border-2 border-[#2bbf66] bg-transparent'
                    }
                    onClick={() => setPayMethod("MERCADOPAGO")}
                >
                    Mercado Pago
                </button>
            </div>
            {/* ORDER */}
            <div className='flex justify-between items-center mb-5'>
                <span className='font-semibold text-sm uppercase'>{cart.length} Productos</span>
                <span className='font-semibold text-sm'>${productsTotal}</span>
            </div>
            <div className='mt-10 mb-5'>
                <div className="flex justify-between items-center">
                    <label className='font-semibold text-sm uppercase'>* Nombre:</label>
                    <input
                        type={"text"}
                        className='font-semibold text-sm border px-2 py-1 w-[60%]'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {
                    error.name &&
                        <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.name}</p>
                }
            </div>
            {
                orderForm === "DELIVERY" && (
                    <>
                        <div className='mb-5'>
                            <div className="flex justify-between items-center">
                                <label className='font-semibold text-sm uppercase'>* Dirección:</label>
                                <input
                                    type={"text"}
                                    className='font-semibold text-sm border px-2 py-1 w-[60%]'
                                    value={direction}
                                    onChange={(e) => setDirection(e.target.value)}
                                />
                            </div>
                            {
                                error.direction &&
                                    <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.direction}</p>
                            }
                        </div>
                        <div className='flex justify-between items-center mb-5'>
                            <label className='font-semibold text-sm uppercase'>Entrecalles:</label>
                            <input
                                type={"text"}
                                className='font-semibold text-sm border px-2 py-1 w-[60%]'
                                value={streets}
                                onChange={(e) => setStreets(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <span className='font-medium inline-block text-sm uppercase'>Envío:</span>
                            <span className='font-medium inline-block text-sm uppercase'>${parseInt(shipping)}</span>
                        </div>
                    </>
                )
            }
            <div className='border-t mt-8'>
                <div className='flex font-semibold justify-between pt-6 pb-3 text-sm uppercase'>
                    <span>Coste Total</span>
                    <span>${total}</span>
                </div>
                {
                    orderForm === "DELIVERY" && payMethod === "EFECTIVO" && (
                        <div className='pt-3 pb-6'>
                            <div className="flex font-semibold justify-between items-center text-sm uppercase">
                                <label>* Abono con:</label>
                                $<input
                                    type="text"
                                    className='font-semibold text-sm border px-2 py-1 w-[40%]'
                                    value={payWith}
                                    onChange={(e) => setPayWith(e.target.value)}
                                />
                            </div>
                            {
                                error.payWith &&
                                    <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.payWith}</p>
                            }
                            {
                                error.payWithLess &&
                                    <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.payWithLess}</p>
                            }
                        </div>
                    )
                }
                <button
                    className='bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full'
                    type="submit"
                    onClick={(e) => sendOrder(e, {
                        products: cart,
                        amount: total,
                        direction: direction,
                        payWith: payWith
                    })}
                >
                    Hacer Pedido
                </button>
            </div>
        </form>
    );
};

export default OrderSummary;