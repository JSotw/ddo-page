import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="bg-[#f0ece2] min-h-screen flex flex-col">
            <nav className="bg-[#dfcaae] z-10 text-[#402211] py-4 shadow-md fixed w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img
                            src="/src/assets/img/logos/01.jpeg"
                            alt="Logo"
                            className="h-16"
                        />
                    </div>
                    <div className="flex">
                        <Link to="/" className="mx-4 text-lg font-semibold">
                            Inicio
                        </Link>
                        <Link to="/contact" className="mx-4 text-lg font-semibold">
                            Contacto
                        </Link>
                        <Link to="/about" className="mx-4 text-lg font-semibold">
                            Sobre Nosotros
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-28 px-4 md:px-12 flex-grow">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                    <p className="text-gray-700">
                        En Donde Deme Otra, nos apasiona ofrecer los mejores productos locales
                        preparados con ingredientes frescos y de la mejor calidad. Nuestra
                        misión es brindar a nuestros clientes una experiencia única y
                        deliciosa, combinando tradición y sabor en cada bocado. ¡Gracias por
                        apoyarnos y ser parte de nuestra familia!
                    </p>
                </div>
            </div>

            <footer className="bg-[#dfcaae] text-[#402211] py-4 shadow-[2px_0px_10px_0px_#d1d1d1] mt-auto w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div>&copy; Donde deme otra | Todos los derechos reservados</div>
                    <div className="flex">
                        <a href="#" className="mx-4">
                            <FaWhatsapp size={24} />
                        </a>
                        <a href="#" className="mx-4">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
