import footerImage from "../assets/prepare-dish-image.jpg";
import { PHONE_NUMBER } from "../config";

const Footer = () => {
    const phoneNumberStr = PHONE_NUMBER.toString();
    const firstPart = phoneNumberStr.substring(0, 2);
    const secondPart = phoneNumberStr.substring(2, 6);
    const thirdPart = phoneNumberStr.substring(6);

    return (
        <footer
            style={{ backgroundColor: "rgba(8,12,17,0)", backgroundImage: `url(${footerImage})` }}
            className='mt-24 pt-20 pb-12 px-8 bg-center bg-cover bg-scroll text-white text-center'
        >
            <h2 className="text-xl md:text-5xl font-semibold mb-10">Siempre A Tu Disposición</h2>
            <h2 className="text-xl md:text-5xl font-semibold mb-10">+54 9 {firstPart} {secondPart}-{thirdPart}</h2>
            <p>Copyright © 2023 Tomatito | Desarrollado por Tomás Yovino</p>
        </footer>
    );
};

export default Footer;