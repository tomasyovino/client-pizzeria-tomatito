import { CartState } from '../context/CartProvider';
import { CartTable, EmptyCart, OrderSummary } from '../components';
import { SHIPPING } from '../config';

const CartPage = () => {
    const { cart, emptyCart, plusOneProduct, minusOneProduct, removeFromCart } = CartState();

    return (
        <section className='flex flex-col md:flex-row shadow-md my-10'>
            {
                cart.length > 0
                    ? <>
                        <CartTable
                            cart={cart}
                            plusOneProduct={plusOneProduct}
                            minusOneProduct={minusOneProduct}
                            removeFromCart={removeFromCart}
                        />
                        <OrderSummary
                            cart={cart}
                            emptyCart={emptyCart}
                            shipping={SHIPPING}
                        />
                    </>
                    : <EmptyCart />
            }
        </section>
    );
};

export default CartPage;