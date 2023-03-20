import { CartState } from '../context/CartProvider';
import { CartTable, EmptyCart, OrderSummary } from '../components';

const CartPage = () => {
    const { cart } = CartState();
    const shipping = process.env.REACT_APP_SHIPPING;

    return (
        <section className='flex flex-col md:flex-row shadow-md my-10'>
            {
                cart.length > 0
                    ? <>
                        <CartTable cart={cart} />
                        <OrderSummary cart={cart} shipping={shipping} />
                    </>
                    : <EmptyCart />
            }
        </section>
    );
};

export default CartPage;