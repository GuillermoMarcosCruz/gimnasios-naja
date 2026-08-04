import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const VisitanosYContacto = () => {
  // Estado para capturar los datos del formulario
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
    // Aquí puedes conectar tu API o servicio de correos (ej. EmailJS o Formspree)
    console.log('Datos enviados:', formData);
    alert('¡Gracias por tu interés! Nos comunicaremos contigo muy pronto.');
    setFormData({ nombre: '', telefono: '', disciplina: 'taekwondo', mensaje: '' });
  };

  return (
    <section className="bg-slate-950 text-slate-100 py-20 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Contacto & Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            Inicia tu Entrenamiento Hoy
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto font-medium">
            Aclara tus dudas o agenda tu primera clase muestra completamente gratis.
          </p>
        </div>

        {/* CONTENEDOR EN REJILLA (2 Columnas grandes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMNA IZQUIERDA (7/12 del ancho): FORMULARIO Y DATOS */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* CUADRO DE DATOS RÁPIDOS */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-500 text-lg shrink-0" />
                <p className="text-xs text-slate-400 leading-tight font-medium">Garizurieta #17 altos, Centro, Tuxpan</p>
              </div>
              <div className="flex items-center space-x-3 border-y md:border-y-0 md:border-x border-slate-800 py-3 md:py-0 md:px-4">
                <FaPhoneAlt className="text-yellow-500 text-sm shrink-0" />
                <p className="text-xs text-slate-400 font-medium">Tel: 783 143 4665</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-red-500 text-sm shrink-0" />
                <p className="text-xs text-slate-400 font-medium">Lunes a Viernes (Tardes)</p>
              </div>
            </div>

            {/* TARJETA DEL FORMULARIO */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide border-b border-slate-800 pb-2">
                Enviar un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Campo Nombre */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200"
                    />
                  </div>

                  {/* Campo Teléfono / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="Ej. 7831234567"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Selector de Disciplina */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Disciplina de Interés</label>
                  <select 
                    name="disciplina"
                    value={formData.disciplina}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="taekwondo">Tae Kwon Do</option>
                    <option value="muaythai">Muay Thai</option>
                    <option value="kickboxing">Kickboxing</option>
                    <option value="artesmarcialesmixtas">Artes Marciales Mixtas</option>
                    <option value="krabikrabong">Krabi Krabong</option>
                  </select>
                </div>

                {/* Campo Mensaje */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">¿Cómo te podemos ayudar?</label>
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Escribe aquí tus dudas sobre costos, horarios o inscripciones..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Botón de Envío */}
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg shadow-red-600/10"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Enviar Solicitud</span>
                </button>
              </form>

            </div>
          </div>

          {/* COLUMNA DERECHA (5/12 del ancho): EL MAPA INTERACTIVO */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-2 rounded-xl shadow-xl min-h-[400px] lg:min-h-full overflow-hidden flex">
            <iframe
              title="Mapa de ubicación de Gimnasios Naja"
              src="https://google.com"
              className="w-full h-full min-h-[400px] rounded-lg border-0 invert-[90%] hue-rotate-180 contrast-125 opacity-85 hover:opacity-100 transition-opacity duration-300 object-cover"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisitanosYContacto;