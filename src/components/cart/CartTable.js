import React from 'react';
import { PlusIcon, MinusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartTable = ({ cart, plusOneProduct, minusOneProduct, removeFromCart }) => {
    return (
        <div className='w-full md:w-3/4 bg-white px-10 py-10'>
            <div className='flex justify-between border-b pb-8'>
                <h1 className='font-semibold text-2xl'>Carrito</h1>
                <h2 className='font-semibold text-2xl'>{cart.length} Productos</h2>
            </div>
            <div className='hidden md:flex mt-10 mb-5'>
                <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Detalles</h3>
                <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>Cantidad</h3>
                <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>Precio</h3>
                <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>Eliminar</h3>
            </div>
            {
                cart.map((product) => (
                    <React.Fragment key={product._id}>
                        <div className='hidden md:flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                            <div className='flex w-2/5'>
                                <div className='w-20'>
                                    <img src={product.image} alt={product.name} className="h-24 rounded-xl" />
                                </div>
                            
                                <div className='flex flex-col justify-center ml-4 flex-grow'>
                                    <span className='font-bold text-sm'>{product.name}</span>
                                </div>
                            </div>
                            <div className='flex justify-center w-1/5'>
                                <button onClick={() => minusOneProduct(product._id)}>
                                    <MinusIcon className='fill-current text-gray-600 w-3' />
                                </button>
                                <span className='mx-2 border text-center w-8'>{product.quantity}</span>
                                <button onClick={() => plusOneProduct(product._id)}>
                                    <PlusIcon className='fill-current text-gray-600 w-3' />
                                </button>
                            </div>
                            <span className='text-center w-1/5 font-semibold text-sm'>${product.price}</span>
                            <div className='w-1/5 text-center'>
                                <button onClick={() => removeFromCart(product._id)}>
                                    <XMarkIcon className='fill-current w-6 font-semibold hover:text-red-500 text-gray-500 text-xs' />
                                </button>
                            </div>
                        </div>

                        {/* MOBILE */}
                        <div className='flex flex-col w-full mb-4 md:hidden'>
                            <div className='flex justify-between ml-2 flex-grow'>
                                <span className='font-bold text-md'>{product.name}</span>
                                <span className='font-semibold text-md'>${product.price}</span>
                            </div>
                            <div className='flex justify-between ml-2 flex-grow'>
                                <div className='flex items-center'>
                                    <button onClick={() => minusOneProduct(product._id)}>
                                        <MinusIcon className='fill-current text-gray-600 w-6' />
                                    </button>
                                    <span className='mx-2 border text-center w-8'>{product.quantity}</span>
                                    <button onClick={() => plusOneProduct(product._id)}>
                                        <PlusIcon className='fill-current text-gray-600 w-6' />
                                    </button>
                                </div>
                                <button onClick={() => removeFromCart(product._id)}>
                                    <XMarkIcon className='fill-current w-6 font-semibold hover:text-red-500 text-gray-500' />
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default CartTable;