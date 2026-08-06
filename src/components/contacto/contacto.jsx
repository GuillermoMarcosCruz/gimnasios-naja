// 1. IMPORTANTE: Agrega esta importación al inicio de tu archivo (arriba de todo)
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const ContactoPage = () => {
  // Estado para capturar los datos del formulario de manera limpia
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    disciplina: 'taekwondo',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // 2. Coloca aquí los tres datos reales que copiaste en el Paso 1
   // Vite lee las variables de entorno de esta forma:
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Espacio listo para conectar servicios como EmailJS, Formspree o tu backend
    // 3. Envío del formulario vinculando tu estado 'formData'
  emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
    .then((response) => {
       console.log('Correo enviado con éxito:', response.status, response.text);
       alert('¡Tu mensaje ha sido recibido con éxito! Nos comunicaremos contigo a la brevedad.');

       // El formulario se limpia únicamente si el correo se envió correctamente
       setFormData({ nombre: '', telefono: '', disciplina: 'taekwondo', mensaje: '' });
    })
    .catch((error) => {
       console.error('Error detallado de EmailJS:', error);
       alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

         {/* ENCABEZADO */}
         <div className="text-center space-y-3">
            <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Únete a la Academia
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Contacto & <span className="text-yellow-500">Ubicación</span>
            </h1>
            <p className="text-sm text-slate-400 max-w-md mx-auto font-medium">
            ¿Tienes dudas sobre las inscripciones o costos? Envíanos un mensaje o visítanos directamente en nuestro dojang.
            </p>
         </div>

         {/* REJILLA PRINCIPAL DE DOS COLUMNAS */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* COLUMNA IZQUIERDA (7/12): DATOS Y FORMULARIO */}
            <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* CUADRO DE INFORMACIÓN RÁPIDA (Diseño compacto horizontal) */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-xl">
               <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-500 text-base shrink-0" />
                  <p className="text-xs text-slate-400 leading-tight font-medium">Garizurieta #17 altos, Centro, Tuxpan</p>
               </div>
               <div className="flex items-center space-x-3 border-y sm:border-y-0 sm:border-x border-slate-800 py-3 sm:py-0 sm:px-4">
                  <FaPhoneAlt className="text-yellow-500 text-xs shrink-0" />
                  <p className="text-xs text-slate-400 font-medium">Tel: 783 143 4665</p>
               </div>
               <div className="flex items-center space-x-3">
                  <FaClock className="text-red-500 text-xs shrink-0" />
                  <p className="text-xs text-slate-400 font-medium">Lunes a Sabado (Horarios de tarde)</p>
               </div>
            </div>

            {/* TARJETA DEL FORMULARIO INTERACTIVO */}
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-xl shadow-xl">
               <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wide border-b border-slate-800 pb-2 flex justify-between items-center">
                  <span>Escríbenos un correo</span>
                  <a
                  href="https://wa.me/527831434665"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:text-green-400 flex items-center space-x-1 text-xs lowercase font-semibold Normal-case"
                  >
                     <FaWhatsapp className="inline mr-1 text-sm"/> WhatsApp Directo
                  </a>
               </h3>

               <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div className="space-y-1.5">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nombre Completo</label>
                     <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Ej. Carlos Silva"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200"
                     />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teléfono / WhatsApp</label>
                     <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="Ej. 7831112233"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200"
                     />
                  </div>
                  </div>

                  {/* Selección de Disciplina */}
                  <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">¿Qué disciplina te interesa?</label>
                  <select
                     name="disciplina"
                     value={formData.disciplina}
                     onChange={handleChange}
                     className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors duration-200 cursor-pointer"
                  >
                     <option value="taekwondo">Tae Kwon Do</option>
                     <option value="muaythai">Muay Thai</option>
                     <option value="kickboxing">Kickboxing</option>
                     <option value="krabikrabong">Krabi Krabong</option>
                  </select>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Detalles de tu consulta</label>
                  <textarea
                     name="mensaje"
                     value={formData.mensaje}
                     onChange={handleChange}
                     rows="4"
                     placeholder="Pregúntanos por costos de inscripción, uniformes o solicita tu clase muestra..."
                     className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  ></textarea>
                  </div>

                  {/* Botón de envío */}
                  <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase py-3.5 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-md shadow-red-600/10"
                  >
                  <FaPaperPlane className="text-[10px]" />
                  <span>Enviar Mensaje</span>
                  </button>
               </form>

            </div>
            </div>

            {/* COLUMNA DERECHA (5/12): MAPA INTERACTIVO MODO OSCURO */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-2 rounded-xl shadow-xl min-h-85 lg:min-h-full overflow-hidden flex flex-col justify-between">
            <iframe
               title="Mapa de ubicación oficial de Gimnasios Naja en Tuxpan"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.144032246364!2d-97.40363777743103!3d20.952334409648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d98becc11466f5%3A0xd16133538baadbee!2sGimnasios%20Naja!5e1!3m2!1ses!2smx!4v1785938932429!5m2!1ses!2smx"
               className="w-full h-full min-h-85 rounded-lg border-0 hover:opacity-100 transition-opacity duration-300"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            {/* Botón externo para abrir la app nativa de mapas */}
            <div className="p-2 pt-4">
               <a
                  href="https://maps.app.goo.gl/vUzdYtsQvuKMi7WZ9"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-[10px] font-bold tracking-wider uppercase py-2.5 rounded-lg text-center transition-colors duration-200"
               >
                  Abrir ubicación en Google Maps
               </a>
            </div>
            </div>

         </div>

      </div>
    </div>
  );
};

export default ContactoPage;