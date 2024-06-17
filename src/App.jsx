import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Churrasca",
      price: 600,
      image: "https://img-global.cpcdn.com/recipes/ee0bd9722324b719/1200x630cq70/photo.jpg",
      description: "Deliciosa pan cocinado al carbón",
      condiments: ["No desea", "Queso", "Ave Mayo", "Mantequilla", "Huevo", "Palta", "Jamón"],
      sauce: ["No desea", "Ketchup", "Mayonesa", "Mostaza", "Ají"],
    },
    {
      id: 2,
      name: "Sopaipillas",
      price: 500,
      image: "https://www.tipicochileno.cl/wp-content/uploads/2011/05/3formas-de-preparar-sopaipillas-B.png",
      description: "Crujientes sopaipillas recién hechas.",
      condiments: ["No desea", "Queso", "Ave Mayo", "Mantequilla", "Huevo", "Palta", "Jamón"],
      sauce: ["No desea", "Ketchup", "Mayonesa", "Mostaza", "Ají"],
    },
    {
      id: 3,
      name: "Bebidas",
      price: 1000,
      image: "https://www.greenteach.es/wp-content/uploads/2022/05/bebidas-con-cafeina-portada.jpg",
      description: "Refrescantes bebidas para acompañar tus comidas.",
      options: ["Coca-Cola", "Sprite", "Té Helado", "Café"],
    },
  ];

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
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white max-w-sm text-md shadow-md hover:scale-105 transition duration-300 cursor-pointer rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3"
            >
              <a href="#">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-green-700 mb-2 font-semibold rounded-lg text-xl p-3 w-full">$ {product.price}</p>
                  {product.condiments ? (
                    <select className="form-select mb-2 shadow-md p-3 rounded-lg bg-[#FBEFDF] w-full">
                      <option disabled selected>
                        Selecciona un condimento
                      </option>
                      {product.condiments.map((condiment) => (
                        <option key={condiment}>{condiment}</option>
                      ))}
                    </select>
                  ) : null}
                  {product.sauce ? (
                    <select className="form-select mb-4 shadow-md p-3 rounded-lg bg-[#FBEFDF] w-full">
                      <option disabled selected>
                        Selecciona una salsa
                      </option>
                      {product.sauce.map((sauce) => (
                        <option key={sauce}>{sauce}</option>
                      ))}
                    </select>
                  ) : null}
                  {product.options ? (
                    <select className="form-select mb-4 shadow-md p-3 rounded-lg bg-[#FBEFDF] w-full">
                      <option disabled selected>
                        Selecciona una bebida
                      </option>
                      {product.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                      
                    </select>
                  ) : null}
                  <div className="h-1 rounded-lg bg-[#402211]"></div>
                  <p className="text-gray-700 rounded-lg p-3">{product.description}</p>
                </div>
              </a>
            </div>
          ))}
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

export default App;