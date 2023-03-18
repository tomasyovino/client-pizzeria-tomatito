import { Link } from "react-router-dom";
import aboutUs from "../../assets/about-us1.webp";

const AboutUs = () => {
    return (
        <section className="container mx-auto py-8 px-2 flex flex-col items-center justify-center relative lg:flex-row lg:px-8 lg:justify-between">
            <div className="w-full lg:w-1/3">
                <h5 className="text-5xl mb-2.5 font-semibold">Comida con tacto</h5>
                <h3 className="text-2xl font-semibold mb-7">Servimos y formamos parte de la comunidad desde 2012</h3>
                <p className="text-[#7A7A7A] mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quia, facilis perspiciatis corporis ad quasi ullam deleniti quisquam doloremque voluptas, id temporibus sit laboriosam! Dolorem eius explicabo autem voluptatum commodi!</p>
                <div className="w-full flex items-center gap-2 mb-7">
                    <span className="font-semibold">Horarios:</span>
                    <p>Monday - Saturday | 9AM - 1PM</p>
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    <h3 className="text-2xl">¿Tenés preguntas?</h3>
                    <Link to="/contact" className="border border-[#ff770f] text-[#ff770f] p-3 rounded text-md font-semibold leading-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">¡Contactanos!</Link>
                </div>
            </div>
            <div className="w-full lg:w-2/3 relative flex lg:justify-end">
                <img src={aboutUs} alt="Walter White eating pizza" className="shadow-lg shadow-gray-400" />
                <span className="absolute text-white font-semibold text-2xl top-20 right-6 md:text-4xl md:top-24 md:right-16">Maestros de la cocina</span>
            </div>
        </section>
    );
};

export default AboutUs;