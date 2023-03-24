import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});

    const validate = () => {
        let errors = {};
        if (!firstName) errors.firstName = "* Nombre es requerido";
        if (!lastName) errors.lastName = "* Apellido es requerido";
        if (!subject) errors.subject = "* Asunto es requerido";
        if (!message) errors.message = "* Mensaje es requerido";
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const sendMessage = (e) => {
        e.preventDefault()
        const phoneMessage = `¡Hola! Necesitaba comunicarme con el local por el siguiente motivo\n\n*ASUNTO:* ${subject}\n\n*MENSAJE:* ${message}\n\nUn saludo, *${firstName} ${lastName}*`;

        if (!validate()) return;
        window.open(`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}?text=${encodeURIComponent(phoneMessage)}`);

        setFirstName("");
        setLastName("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className='w-full md:w-7/12'>
            <div className='p-6 md:p-12'>
                <h3 className='mb-8 text-3xl'>Contáctanos</h3>
                <form className='flex flex-wrap justify-between' onSubmit={sendMessage}>
                    <div className='w-full md:w-5/12 mb-12 flex flex-col'>
                        <label className='mb-2 inline-block font-semibold text-xs'>NOMBRE</label>
                        <input 
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Nombre'
                            className='outline-0 border-b border-solid border-stone-400 rounded-sm focus:border-[#ff770f] text-stone-600' 
                        />
                        {
                            error.firstName &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.firstName}</p>
                        }
                    </div>
                    <div className='w-full md:w-5/12 mb-12 flex flex-col'>
                        <label className='mb-2 inline-block font-semibold text-xs'>APELLIDO</label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Apellido'
                            className='outline-0 border-b border-solid border-stone-400 rounded-sm focus:border-[#ff770f] text-stone-600' 
                        />
                        {
                            error.lastName &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.lastName}</p>
                        }
                    </div>
                    <div className='w-full mb-12 flex flex-col'>
                        <label className='mb-2 inline-block font-semibold text-xs'>ASUNTO</label>
                        <input 
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)} 
                            placeholder='Asunto'
                            className='outline-0 border-b border-solid border-stone-400 rounded-sm focus:border-[#ff770f] text-stone-600' 
                        />
                        {
                            error.subject &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.subject}</p>
                        }
                    </div>
                    <div className='w-full mb-12 flex flex-col'>
                        <label className='mb-2 inline-block font-semibold text-xs'>MENSAJE</label>
                        <textarea
                            cols="30"
                            rows="4"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Mensaje'
                            className='outline-0 border-b border-solid border-stone-400 rounded-sm focus:border-[#ff770f] text-stone-600'
                        />
                        {
                            error.message &&
                                <p className="text-red-500 text-left w-full font-normal text-base leading-5">{error.message}</p>
                        }
                    </div>
                    <div className='w-full md:w-5/12 flex flex-col'>
                        <button
                            type="submit"
                            className='mb-5 py-3 px-4 text-white font-semibold uppercase bg-yellow-500 hover:bg-yellow-600 rounded'
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;