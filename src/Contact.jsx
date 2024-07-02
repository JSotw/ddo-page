import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
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
                <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
                <form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg" action="" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                            Número de Teléfono
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            maxLength="500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-[#402211] hover:bg-[#5a3a2d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

            <footer className="bg-[#dfcaae] text-[#402211] py-4 shadow-[2px_0px_10px_0px_#d1d1d1] mt-auto w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div>&copy; Donde deme otra | Todos los derechos reservados </div>
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

export default Contact;
