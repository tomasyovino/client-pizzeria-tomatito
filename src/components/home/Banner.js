import homeBanner from "../../assets/home-banner.jpg";
import fork from "../../assets/fork-free-img.webp";
import knife from "../../assets/knife-free-imge.webp";
import frill from "../../assets/frill-free-img.webp";

const Banner = () => {
    return (
        <section
            style={{
                height: "calc(100vh - 104px)",
                backgroundImage: `url(${homeBanner})`
            }}
            className="bg-cover bg-fixed relative"
        >
            <div
                style={{
                    backgroundImage: "linear-gradient(0deg,#0c0c0c 0%,#000000 20%)",
                    transition: "background .3s, border-radius .3s, opacity .3"
                }}
                className="h-100 w-100 inset-0 absolute opacity-50"
            />
            <div
                style={{ height: "calc(100vh - 104px)" }}
                className="container mx-auto px-2 md:px-8 z-10 relative text-white flex justify-between items-center"
            >
                <div>
                    <img src={fork} alt="fork" />
                </div>
                <div className="flex flex-col items-center justify-center w-full mx-8">
                    <img src={frill} alt="frill" />
                    <h1 className="text-4xl lg:text-9xl font-semibold">TOMATITO</h1>
                    <a href="#menu" className="border border-[#ff770f] text-[#ff770f] p-3 rounded mt-14 text-md font-semibold leading-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">Ver Menú</a>
                    <div className="container mx-auto flex items-center justify-center lg:justify-between mt-6 gap-4">
                        <span className="block p-px bg-white w-1/3"></span>
                        <h3 className="text-sm md:text-2xl font-semibold w-1/3 text-center">Buon Appetito | Piatto Pulito</h3>
                        <span className="block p-px bg-white w-1/3"></span>
                    </div>
                </div>
                <div>
                    <img src={knife} alt="knife" />
                </div>
            </div>
        </section>
    );
};

export default Banner;