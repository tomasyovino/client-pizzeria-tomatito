import { useEffect, useState } from "react";
import parcelli from "../../assets/parcelli.webp";
import productsData from "../../json/products.json";

const Menu = () => {
    const [products, setProducts] = useState([]);
    const [categorySelected, setCategorySelected] = useState("pizza");

    useEffect(() => {
        // const fetchProducts = async (url) => {
        //     try {
        //         const response = await fetch(url);
        //         const data = await response.json();

        //         setProducts(data);
        //     } catch (error) {
        //         console.log(error);
        //     };
        // };
        // fetchProducts()
        setProducts(productsData)
    }, []);

    return (
        <section className="container mx-auto flex flex-col items-center py-14 p-8 gap-3.5">
            <img src={parcelli} alt="parcelli" />
            <div id="menu" className="w-full text-center">
                <h2 className="text-5xl mb-10 font-semibold">MENÚ</h2>
                {/* MENU BUTTONS */}
                <div className="py-6 border-y border-solid border-y-neutral-400 w-full mb-12">
                    <ul className="w-full flex justify-center gap-10">
                        <li>
                            <button 
                                onClick={() => setCategorySelected("pizza")}
                                style={{
                                    color: categorySelected === "pizza" ? "#ff770f" : "black",
                                    borderBottom: categorySelected === "pizza" ? "3px double #ff770f" : "none"
                                }}
                                className="text-xl font-medium"
                            >
                                PIZZAS
                            </button>
                        </li>
                        <li className="text-xl text-[#ff770f] font-medium pointer-events-none">•</li>
                        <li>
                            <button 
                                onClick={() => setCategorySelected("pie")}
                                style={{
                                    color: categorySelected === "pie" ? "#ff770f" : "black",
                                    borderBottom: categorySelected === "pie" ? "3px double #ff770f" : "none"
                                }}
                                className="text-xl font-medium"
                            >
                                EMPANADAS
                            </button>
                        </li>
                    </ul>
                </div>
                {/* MENU CARDS */}
                <div className="flex flex-col flex-wrap items-center justify-between gap-y-8 md:flex-row">
                    {
                        products &&
                        products.sort((a, b) => a.price - b.price).map((product, i) => {
                            if (product.category === categorySelected) {
                                return (
                                    <div className="w-full md:w-[45%] px-8 flex" key={i}>
                                        <img className="w-24 h-24 rounded-xl mr-4" src={product.image} alt={product.name} />
                                        <div className="text-start">
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-2.5 text-xl">
                                                <span>{product.name}</span>
                                                <span className="text-[#ff770f]">${product.price}</span>
                                            </div>
                                            <p className="hidden sm:block">{product.description}</p>
                                        </div>
                                    </div>
                                );
                            };
                            return null;
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;