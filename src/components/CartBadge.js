import { CartState } from '../context/CartProvider';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartBadge = () => {
    const { cart } = CartState();

    return (
        <div className='relative w-6 h-6'>
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            {
                cart.length > 0 &&
                <span className='absolute right-[-5px] top-[-5px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{cart.length}</span>
            }
        </div>
    )
};

export default CartBadge;