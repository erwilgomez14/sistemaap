import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Mi Logo</span>
        </div>
        <div className="flex items-center">
          <a href="/" className="text-white mr-4 hover:text-gray-300">Inicio</a>
          <a href="/" className="text-white mr-4 hover:text-gray-300">Acerca de</a>
          <a href="/login" className="text-white mr-4 hover:text-gray-300">Iniciar sesión</a>
          <a href="/registrar" className="bg-white text-blue-900 rounded-lg py-2 px-4 hover:bg-gray-300 transition duration-300 ease-in-out">Registrar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
