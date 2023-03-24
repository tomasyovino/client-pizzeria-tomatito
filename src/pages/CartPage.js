import { CartState } from '../context/CartProvider';
import { CartTable, EmptyCart, OrderSummary } from '../components';

const CartPage = () => {
    const { cart, emptyCart, plusOneProduct, minusOneProduct, removeFromCart } = CartState();
    const shipping = process.env.REACT_APP_SHIPPING;

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
                            shipping={shipping}
                        />
                    </>
                    : <EmptyCart />
            }
        </section>
    );
};

export default CartPage;