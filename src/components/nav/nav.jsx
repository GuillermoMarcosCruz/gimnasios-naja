import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/naja.png';

const Navbar = () => {
  // Estados para controlar los menús interactivos
  const [isOpen, setIsOpen] = useState(false); // Menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Submenú de Disciplinas

  // Enlaces de las páginas generales independientes
  const mainLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'NOSOTROS', href: '/nosotros' },
    { name: 'HORARIOS', href: '/horarios' },
    { name: 'INSTRUCTORES', href: '/instructores' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACTO', href: '/contacto'}
  ];

  // Enlaces del submenú de Artes Marciales
  const disciplinas = [
    { name: 'Tae Kwon Do', href: '/taekwondo' },
    { name: 'Muay Thai', href: '/muaythai' },
    { name: 'Kickboxing', href: '/kickboxing' },
    { name: 'Krabi Krabong', href: '/krabikrabong' },
  ];

  return (
    <nav className="bg-slate-950 text-slate-100 px-6 py-4 fixed top-0 w-full z-50 border-b border-slate-800 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="font-black text-xl tracking-tight text-yellow-500 hover:text-yellow-400 transition-colors duration-200">
            GIMNASIOS <span className="text-white">NAJA</span>
          </NavLink>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Enlace de Inicio manual para fijar la propiedad 'end' */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-xs font-bold tracking-wider relative py-2 transition-colors duration-200 ${
                isActive ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' : 'text-slate-300 hover:text-red-500'
              }`
            }
          >
            INICIO
          </NavLink>

          {/* Enlace de Nosotros */}
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `text-xs font-bold tracking-wider relative py-2 transition-colors duration-200 ${
                isActive ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' : 'text-slate-300 hover:text-red-500'
              }`
            }
          >
            NOSOTROS
          </NavLink>

          {/* DROPDOWN DINÁMICO: DISCIPLINAS */}
<div className="relative group py-2">
  <button className="text-xs font-bold tracking-wider text-slate-300 group-hover:text-red-500 flex items-center space-x-1 focus:outline-none">
    <span>DISCIPLINAS</span>
    <svg className="w-3 h-3 fill-current mt-0.5 transform group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 20 20">
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
    </svg>
  </button>

  {/* CONTENEDOR DESPLEGABLE */}
  <div className="absolute top-full left-0 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 w-52 mt-0 hidden group-hover:block animate-fadeIn">

    {/* ⚡ PUENTE INVISIBLE: Evita que el menú se cierre al mover el mouse hacia abajo */}
    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

    {disciplinas.map((disc) => (
      <NavLink
        key={disc.name}
        to={disc.href}
        className={({ isActive }) =>
          `text-xs font-semibold tracking-wide block px-4 py-2.5 transition-colors duration-150 ${
            isActive ? 'bg-red-950/40 text-red-500 border-l-2 border-l-red-500' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
          }`
        }
      >
        {disc.name}
      </NavLink>
    ))}
  </div>
</div>

          {/* Enlaces del resto del arreglo principal (Horarios, Instructores, Blog) */}
          {mainLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-xs font-bold tracking-wider relative py-2 transition-colors duration-200 ${
                  isActive ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' : 'text-slate-300 hover:text-red-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* BOTÓN RESPONSIVO MÓVIL */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 focus:outline-none hover:text-red-500 transition-colors duration-200"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.83 4.828 4.829z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Celulares) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-slate-900 rounded-lg flex flex-col space-y-1 p-2 border border-slate-800 absolute top-full left-4 right-4 shadow-xl max-h-[75vh] overflow-y-auto">
          {/* Páginas Iniciales */}
          {mainLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `text-xs font-bold tracking-wide block px-4 py-3 rounded-md ${
                  isActive ? 'bg-red-950/30 text-red-500 border-l-4 border-l-red-500' : 'text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Separador de Categorías en celular */}
          <span className="text-[10px] font-black text-slate-500 px-4 pt-3 pb-1 tracking-widest uppercase">Disciplinas</span>

          {/* Subenlaces de Artes Marciales en celular */}
          {disciplinas.map((disc) => (
            <NavLink
              key={disc.name}
              to={disc.href}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `text-xs font-medium block pl-8 pr-4 py-2.5 rounded-md ${
                  isActive ? 'text-red-400 font-bold bg-slate-950/20' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              • {disc.name}
            </NavLink>
          ))}

          <span className="border-t border-slate-800/80 my-1 block"></span>

          {/* Páginas Finales */}
          {mainLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `text-xs font-bold tracking-wide block px-4 py-3 rounded-md ${
                  isActive ? 'bg-red-950/30 text-red-500 border-l-4 border-l-red-500' : 'text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;