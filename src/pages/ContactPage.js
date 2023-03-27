import {
    MapPinIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import { Form } from '../components';
import contactBanner from "../assets/contact_us_banner.webp";
import { PHONE_NUMBER } from '../config';

const ContactPage = () => {
    const phoneNumberStr = PHONE_NUMBER.toString();
    const firstPart = phoneNumberStr.substring(0, 2);
    const secondPart = phoneNumberStr.substring(2, 6);
    const thirdPart = phoneNumberStr.substring(6);

    return (
        <div className='container mx-auto w-full flex flex-col justify-center mt-12'>
            <div className='mb-12 flex flex-col md:flex-row md:flex-wrap justify-center gap-4'>
                <div className="basis-1/4">
                    <div className='w-full mb-6 flex flex-col items-center justify-center'>
                        <div className='w-16 h-16 rounded-full m-[0 auto] mb-5 bg-[#ff770f] flex items-center justify-center text-white'>
                            <PhoneIcon width="30px" />
                        </div>
                        <div className='w-full text-center'>
                            <p className='text-[#666666]'>
                                <span className='text-black font-medium'>Teléfono:</span>
                                {` +54 9 ${firstPart} ${secondPart}-${thirdPart}`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4">
                    <div className='w-full mb-6 flex flex-col items-center justify-center'>
                        <div className='w-16 h-16 rounded-full m-[0 auto] mb-5 bg-[#ff770f] flex items-center justify-center text-white'>
                            <MapPinIcon width="30px" />
                        </div>
                        <div className='w-full text-center md:text-start'>
                            <p className='text-[#666666]'>
                                <span className='text-black font-medium'>Dirección:</span>
                                 {` Eva Perón 4200, Lanús Este, Buenos Aires, AR.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-between shadow rounded'>
                <Form />
                <div className='hidden md:flex md:items-stretch md:w-5/12'>
                    <div style={{ backgroundImage: `url(${contactBanner})` }} className='w-full bg-cover bg-no-repeat bg-center' />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;