import ReactModal from "react-modal";
import { ShoppingCartIcon, XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { CartState } from "../context/CartProvider";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "white",
    },
};

ReactModal.setAppElement('#root');

const Modal = ({ product, isOpen, setIsModalOpen }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = CartState();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isOpen]);

    const onClose = () => {
        setIsModalOpen(false);
        setQuantity(1);
    };

    const handleAdd = () => {
        if (quantity < 12) {
            setQuantity(quantity + 1);
        };
    };

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    return <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
    >
        {
            product &&
                <div className="modal w-full max-w-sm max-h-[90vh] overflow-auto">
                    <div className="w-full flex items-center justify-end">
                        <button className="border border-gray-600 rounded-full p-2 mb-5" onClick={onClose}>
                            <XMarkIcon className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>
                    <div>
                        <img className="w-full h-48 rounded-xl" src={product.image} alt={product.name} />
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <p className="text-lg mb-5">${product.price}</p>
                        <p className="text-lg mb-5">{product.description}</p>
                        {
                            product.category === "pie"
                            ?   <div className="w-full flex flex-col items-start mb-5">
                                    <span className="text-xl font-semibold mb-2">OPCIONES</span>
                                    <div className="flex items-start gap-2">
                                        <button className="border border-gray-600 rounded-full p-2 text-gray-600" onClick={() => setQuantity(6)}>
                                            1/2 Docena
                                        </button>
                                        <button className="border border-gray-600 rounded-full p-2 text-gray-600" onClick={() => setQuantity(12)}>
                                            1 Docena
                                        </button>
                                    </div>
                                </div>
                            :   null
                                
                        }
                        <div className="w-full flex items-center justify-between mb-5">
                            <span className="text-xl font-semibold">UNIDADES</span>
                            <div className="flex items-center gap-2">
                                <button className="border border-gray-600 text-gray-600 rounded-full p-2" onClick={handleSubtract}>
                                    <MinusIcon className="h-6 w-6" />
                                </button>
                                <span className="text-xl">{quantity}</span>
                                <button className="border border-gray-600 text-gray-600 rounded-full p-2" onClick={handleAdd}>
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="w-full flex items-center justify-between bg-amber-300 rounded-xl p-4 font-semibold"
                            onClick={() => {
                                addToCart({ ...product, quantity })
                                setQuantity(1);
                                setIsModalOpen(false);
                            }}
                        >
                            <ShoppingCartIcon className="h-6 w-6 hidden md:block" />
                            <span>Agregar a Mi Pedido</span>
                            <span>${quantity * product.price}</span>
                        </button>
                    </div>
                </div>
        }
    </ReactModal>
};

export default Modal;