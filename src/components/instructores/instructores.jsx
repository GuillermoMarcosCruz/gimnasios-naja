import React, { useState } from 'react';
import { FaGraduationCap, FaAward, FaShieldAlt, FaTimes } from 'react-icons/fa';

// Variables de imágenes de ejemplo (importadas como las tienes en tu proyecto)
import jesusSalazar from '../../img/jesus-salazar.jpeg';
import jaime from '../../img/jaime-rafael.jpeg';
import julio from '../../img/julio.jpeg';
import ian from '../../img/ian.jpeg';
import yaretzi from '../../img/yaretzi.jpeg';
import misha from '../../img/misha.jpeg';

const InstructoresPage = () => {
  // Estado para controlar qué imagen se está viendo en grande
  const [imagenModal, setImagenModal] = useState(null);

  // Datos del equipo con descripciones y paletas de colores individuales
  const instructores = [
    {
      nombre: 'Jesus Salazar Marcelino',
      rol: 'Director Técnico & Fundador',
      grado: 'Cinta Negra 5° Dan / Kru Yai Grado Plateado',
      disciplinas: ['Tae Kwon Do', 'Muay Thai', 'Krabi Krabong', 'Kick Boxing'],
      experiencia: 'Más de 20 años dedicados a la enseñanza y formación de atletas de alto rendimiento en Veracruz. Certificado internacionalmente.',
      colorAcento: 'border-t-yellow-500 shadow-yellow-500/5',
      tagColor: 'bg-yellow-950/40 text-yellow-400 border-yellow-500/20',
      foto: jesusSalazar
    },
    {
      nombre: 'Jaime Rafael Gallegos Torres',
      rol: 'Instructor de Muay Thai y Kick Boxing',
      grado: 'Pisi Kru grado Marrón Blanco',
      disciplinas: ['Muay Thai', 'Kick Boxing'],
      experiencia: 'Especialista en deportes de contacto con amplia trayectoria en el desarrollo técnico de striking, potencia y acondicionamiento físico de combate para jóvenes y adultos.',
      colorAcento: 'border-t-emerald-500 shadow-emerald-500/5',
      tagColor: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20',
      foto: jaime
    },
    {
      nombre: 'Julio Luna Contreras',
      rol: 'Instructor de Muay Thai',
      grado: 'Grado Azul',
      disciplinas: ['Muay Thai'],
      experiencia: 'Instructor enfocado en la enseñanza de los fundamentos técnicos del Muay Thai, promoviendo la disciplina, la resistencia aeróbica y el crecimiento deportivo en alumnos de todos los niveles.',
      colorAcento: 'border-t-blue-500 shadow-blue-500/5', // Color azul por su Grado Azul
      tagColor: 'bg-blue-950/40 text-blue-400 border-blue-500/20',     // Color azul por su Grado Azul
      foto: julio
    },
    {
      nombre: 'Ian Salazar Ayala',
      rol: 'Instructor de Taekwondo',
      grado: 'Cinta Negra 2° Dan',
      disciplinas: ['Tae Kwon Do'],
      experiencia: 'Instructor enfocado en la técnica avanzada de pateo y la preparación de atletas para competencias estatales y nacionales, combinando exigencia táctica y valores de superación.',
      colorAcento: 'border-t-cyan-500 shadow-cyan-500/5',
      tagColor: 'bg-cyan-950/40 text-cyan-400 border-cyan-500/20',
      foto: ian
    },
    {
      nombre: 'Yaretzi De La Garza Salas',
      rol: 'Instructor de Taekwondo',
      grado: 'Cinta Negra 1° Dan',
      disciplinas: ['Tae Kwon Do'],
      experiencia: 'Enfocada en la enseñanza del Taekwondo formativo e infantil. Promueve los valores marciales tradicionales, el desarrollo motriz y la disciplina desde bases tempranas.',
      colorAcento: 'border-t-rose-500 shadow-rose-500/5',
      tagColor: 'bg-rose-950/40 text-rose-400 border-rose-500/20',
      foto: yaretzi // Reemplazar por tu variable 'Yaretzi' si es importación
    },
    {
      nombre: 'Misha Reyes Santos',
      rol: 'Instructor de Taekwondo',
      grado: 'Cinta Negra 1° Dan',
      disciplinas: ['Tae Kwon Do'],
      experiencia: 'Dedicada al desarrollo integral de los alumnos mediante el entrenamiento técnico e introductorio al combate, fomentando la autoconfianza y el respeto mutuo dentro del Dojang.',
      colorAcento: 'border-t-violet-500 shadow-violet-500/5',
      tagColor: 'bg-violet-950/40 text-violet-400 border-violet-500/20',
      foto: misha
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ENCABEZADO */}
        <div className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Liderazgo & Honor
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Nuestros <span className="text-yellow-500">Instructores</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Entrena bajo la guía de profesores certificados con amplia experiencia competitiva y docente. Nuestro compromiso es tu evolución integral.
          </p>
        </div>

        {/* CUADRÍCULA DE TARJETAS DE INSTRUCTORES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructores.map((ins, index) => {
            const esDirector = index === 0;

            return (
              <div 
                key={index} 
                className={`bg-slate-900 border border-slate-800 border-t-4 ${ins.colorAcento} p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden
                  ${esDirector ? 'ring-2 ring-yellow-500/20 shadow-[0_0_25px_-5px_rgba(234,179,8,0.15)] animate-[pulse_4s_infinite]' : ''}`}
              >
                {/* Destello de luz interno solo para el Director Técnico */}
                {esDirector && (
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-40 group-hover:animate-[shine_1s_ease-in-out]" />
                )}

                <div className="space-y-6 relative z-10">
                  {/* Contenedor del Avatar/Foto */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => ins.foto && setImagenModal({ src: ins.foto, nombre: ins.nombre })}
                      className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center font-black text-xl text-slate-400 group-hover:border-slate-600 transition-all duration-200 overflow-hidden shrink-0 cursor-zoom-in hover:brightness-110 active:scale-95 focus:outline-none"
                      title="Ver foto en grande"
                    >
                      {ins.foto ? (
                        <img 
                          src={ins.foto} 
                          alt={ins.nombre} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => { 
                            e.target.style.display = 'none'; 
                          }} 
                        />
                      ) : (
                        ins.nombre.split(' ').map(n => n[0]).join('').slice(0, 3)
                      )}
                    </button>
                    <div>
                      <h3 className="text-lg font-black text-white leading-tight group-hover:text-yellow-500 transition-colors duration-200">
                        {ins.nombre}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mt-1">
                        {ins.rol}
                      </p>
                    </div>
                  </div>

                  {/* Bloque de Grado / Certificaciones */}
                  <div className="space-y-2 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/60">
                    <div className="flex items-center space-x-2 text-xs font-bold text-slate-300">
                      <FaGraduationCap className="text-yellow-500 text-sm" />
                      <span>{ins.grado}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
                      <FaAward className="text-red-500 text-xs" />
                      <span>Instructor Avalado</span>
                    </div>
                  </div>

                  {/* Biografía / Experiencia */}
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {ins.experiencia}
                  </p>
                </div>

                {/* Disciplinas que imparte (Tags inferiores) */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 relative z-10">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <FaShieldAlt className="text-slate-500 text-xs" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Especialidades:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ins.disciplinas.map((disc, dIdx) => (
                      <span 
                        key={dIdx} 
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border ${ins.tagColor}`}
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* MENSAJE DE COMPROMISO */}
        <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Todos nuestros profesores se encuentran en <strong className="text-slate-200">capacitación continua</strong> y avalados por sus respectivas federaciones y linajes para garantizar una práctica totalmente segura, técnica y apegada a los valores marciales tradicionales.
          </p>
        </div>
      </div>

      {/* VENTANA FLOTANTE (MODAL) PARA VER LA IMAGEN EN GRANDE */}
      {imagenModal && (
        <div 
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setImagenModal(null)} // Cierra al hacer clic en el fondo oscuro
        >
          {/* Contenedor del Modal */}
          <div 
            className="relative max-w-md w-full bg-slate-900 border border-slate-800 p-3 rounded-2xl shadow-2xl flex flex-col items-center space-y-4 m-auto"
            onClick={(e) => e.stopPropagation()} // Evita cerrar si se hace clic dentro de la foto
          >
            {/* Botón de cerrar */}
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-slate-400 hover:text-white transition-colors p-2 bg-slate-900/80 rounded-full border border-slate-800 focus:outline-none"
              onClick={() => setImagenModal(null)}
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Imagen ampliada en formato cuadrado perfecto */}
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img 
                src={imagenModal.src} 
                alt={imagenModal.nombre} 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* Pie de foto con el nombre del instructor */}
            <p className="text-sm font-black tracking-wide text-center text-white uppercase bg-slate-950/50 px-4 py-2 rounded-full border border-slate-800/60">
              {imagenModal.nombre}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructoresPage;