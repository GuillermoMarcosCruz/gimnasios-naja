import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../img/naja.png';

const Footer = () => {
   return (
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-6 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">

            {/* COLUMNA 1: BRANDING Y LOGO */}
            <div className="flex flex-col items-center md:items-start space-y-4">
               <div className="flex items-center space-x-3">
                  <div className="bg-white p-1 rounded-full w-14 h-14 flex items-center justify-center shadow-lg border border-red-500/20">
                     {/* Ruta exacta a tu imagen de logo en la carpeta public o src */}
                     <img src={logo} alt="Logo Naja" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                     <h3 className="text-lg font-black tracking-tight text-yellow-500">
                     GIMNASIOS <span className="text-white">NAJA</span>
                     </h3>
                     <p className="text-xs text-slate-500 font-medium">Institutos Naja de Tae Kwon Do</p>
                  </div>
               </div>
               <p className="text-xs text-slate-400 text-center md:text-left leading-relaxed max-w-sm">
               Formando personas íntegras a través de la disciplina, el respeto y la excelencia en las artes marciales.
               </p>
            </div>

            {/* COLUMNA 2: ENLACES RÁPIDOS */}
            <div className="flex flex-col items-center md:items-start space-y-3">
               <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-red-500 pb-1">
               Enlaces Rápidos
               </h4>
               <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-center md:text-left text-xs font-semibold">
               <li><Link to="/" className="hover:text-red-500 transition-colors duration-200">Inicio</Link></li>
               <li><Link to="/nosotros" className="hover:text-red-500 transition-colors duration-200">Nosotros</Link></li>
               <li><Link to="/horarios" className="hover:text-red-500 transition-colors duration-200">Horarios</Link></li>
               <li><Link to="/instructores" className="hover:text-red-500 transition-colors duration-200">Instructores</Link></li>
               <li><Link to="/blog" className="hover:text-red-500 transition-colors duration-200">Blog</Link></li>
               <li><Link to="/contacto" className="hover:text-red-500 transition-colors duration-200">Contacto</Link></li>
               </ul>
            </div>

            {/* COLUMNA 3: CONTACTO Y REDES SOCIALES */}
            <div className="flex flex-col items-center md:items-start space-y-4">
               <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-red-500 pb-1">
               Conéctate con Nosotros
               </h4>

               {/* Redes e Interacción */}
               <div className="flex flex-col space-y-2.5 text-xs font-medium">
                  <a
                  href="https://wa.me" /* Reemplaza con tu link de WhatsApp */
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2.5 hover:text-red-500 transition-colors duration-200"
                  >
                     <FaWhatsapp className="text-green-500 text-base" />
                  <span>783 143 4665</span>
                  </a>
                  <div className="flex items-center space-x-2.5">
                     <FaMapMarkerAlt className="text-red-500 text-sm" />
                     <span className="text-slate-400">Tuxpan, Veracruz, México</span>
                  </div>
               </div>

               {/* Iconos de Redes Redondos */}
               <div className="flex space-x-3 pt-1">
                  <a href="https://www.facebook.com/gimnasiosnajacentral" className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-md">
                     <FaFacebookF className="text-sm" />
                  </a>
                  <a href="https://www.tiktok.com/@gimnasiosnaja" className="w-8 h-8 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-800 transition-all duration-200 shadow-md">
                     <FaTiktok className="text-sm" />
                  </a>
               </div>
            </div>

         </div>

         {/* DERECHOS DE AUTOR DEBAJO */}
         <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-slate-500 space-y-2 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Gimnasios Naja. Todos los derechos reservados.</p>
            <p className="tracking-wide">Disciplina &bull; Honor &bull; Excelencia</p>
         </div>
      </footer>
   );
};

export default Footer;