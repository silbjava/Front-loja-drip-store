// src/components/Footer.jsx
import React from 'react';
import 'primeflex/primeflex.css';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 text-white">
      <div className="grid grid-nogutter md:grid-cols-4 gap-5 p-4">

        {/* Logo e Descrição */}
        <div className="col">
          <div className="flex align-items-center mb-3">
            <img src={'src/assets/logo-footer.svg'} alt="Logo" className="mr-2" style={{ width: '253px', height: '44px' }} />
          </div>
          <p className="text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-3">
            <img src={'src/assets/facebook.svg'} alt="Facebook" style={{ width: '20px' }} />
            <img src={'src/assets/instagram.svg'} alt="Instagram" style={{ width: '20px' }} />
            <img src={'src/assets/twitter.svg'} alt="Twitter" style={{ width: '20px' }} />
          </div>
        </div>

        {/* Informações */}
        <div className="col">
          <h4 className="text-md font-bold mb-3">Informação</h4>
          <ul className="list-none p-0 m-0 text-sm">
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>

        {/* Categorias */}
        <div className="col">
          <h4 className="text-md font-bold mb-3">Categorias</h4>
          <ul className="list-none p-0 m-0 text-sm">
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        {/* Contato */}
        <div className="col">
          <h4 className="text-md font-bold mb-3">Contato</h4>
          <p className="text-sm">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161<br />
            <br />
            (85) 3051-3411
          </p>
        </div>
      </div>

      <hr className="my-3 border-gray-700" />

      <div className="text-center text-sm text-gray-400">
        © 2022 Digital College
      </div>
    </footer>
  );
};

export default Footer;
