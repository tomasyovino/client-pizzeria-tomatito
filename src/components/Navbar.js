import { useState } from 'react';
import { Dialog, Popover, } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import logo from "../assets/tomatito.png";
import CartBadge from './CartBadge';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Tomatito</span>
                        <img className='h-14' src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <HashLink to={"/#menu"} className="text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 hover:text-[#ff770f]">
                        Menú
                    </HashLink>
                    <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 hover:text-[#ff770f]">
                        Contacto
                    </Link>
                    <Link to="/cart" className="text-sm font-semibold leading-6 text-gray-900 ease-in-out duration-300 hover:text-[#ff770f]">
                        <CartBadge />
                    </Link>
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Tomatito</span>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <HashLink
                                    to={"/#menu"}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Menu
                                </HashLink>
                                <Link
                                    to="/contact"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contacto
                                </Link>
                                <Link
                                    to="/cart"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <CartBadge />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;