const OrderSummary = ({ cart, shipping }) => {
    const productsTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const total = productsTotal + parseInt(shipping);

    return (
        <div className='w-full md:w-1/4 px-8 py-10'>
            <h1 className='font-semibold text-2xl border-b pb-8'>Resumen del pedido</h1>
            <div className='flex justify-between mt-10 mb-5'>
                <span className='font-semibold text-sm uppercase'>{cart.length} Productos</span>
                <span className='font-semibold text-sm'>${productsTotal}</span>
            </div>
            <div>
                <label className='font-medium inline-block mb-3 text-sm uppercase'>Envío ${parseInt(shipping)}</label>
            </div>
            <div className='border-t mt-8'>
                <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                    <span>Coste Total</span>
                    <span>${total}</span>
                </div>
                <button
                    className='bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full'
                >
                    Hacer Pedido
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;