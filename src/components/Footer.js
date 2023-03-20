import footerImage from "../assets/prepare-dish-image.jpg"

const Footer = () => {
    return (
        <footer
            style={{ backgroundColor: "rgba(8,12,17,0)", backgroundImage: `url(${footerImage})` }}
            className='mt-24 pt-20 pb-12 px-8 bg-center bg-cover bg-scroll text-white text-center'
        >
            <h2 className="text-xl md:text-5xl font-semibold mb-10">Siempre A Tu Disposición</h2>
            <h2 className="text-xl md:text-5xl font-semibold mb-10">+54 9 11 6186-0898</h2>
            <p>Copyright © 2023 Tomatito | Desarrollado por Tomás Yovino</p>
        </footer>
    );
};

export default Footer;