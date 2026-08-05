import React from 'react';
import { FaShieldAlt, FaUsers, FaHistory, FaMedal } from 'react-icons/fa';

const NosotrosPage = () => {
  // Pilares o valores diferenciales de la academia
	const caracteristicas = [
		{
			icono: <FaShieldAlt className="text-xl text-red-500" />,
			titulo: 'Ambiente Seguro y Familiar',
			desc: 'Promovemos un espacio de entrenamiento basado en el respeto mutuo, el compañerismo y la seguridad de cada practicante.'
		},
		{
			icono: <FaUsers className="text-xl text-yellow-500" />,
			titulo: 'Clases para Todas las Edades',
			desc: 'Desde programas infantiles enfocados en la psicomotricidad hasta entrenamientos de alta intensidad para adultos y competidores.'
		},
		{
			icono: <FaMedal className="text-xl text-red-500" />,
			titulo: 'Instrucción Certificada',
			desc: 'Nuestro equipo técnico cuenta con avales internacionales y años de experiencia docente y competitiva en las artes marciales.'
		}
	];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* SECCIÓN 1: ENCABEZADO */}
        <div className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Nuestra Identidad
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Sobre Gimnasios <span className="text-yellow-500">Naja</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Conoce la historia, la filosofía y el compromiso que nos impulsa a formar campeones dentro y fuera del área de combate.
          </p>
        </div>

        {/* SECCIÓN 2: HISTORIA Y FILOSOFÍA (Dos Columnas Asimétricas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda (7/12): Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-red-500">
              <FaHistory className="text-xl" />
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">Nuestra Historia</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Fundados bajo la premisa de difundir la verdadera esencia de las artes marciales en Tuxpan, Veracruz, **Gimnasios Naja** ha evolucionado de ser una escuela tradicional de Tae Kwon Do a convertirse en un centro especializado en múltiples disciplinas de combate de primer nivel.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              A lo largo de nuestra trayectoria, hemos entendido que el combate en el área es solo el reflejo de la preparación mental del estudiante. Por ello, adaptamos metodologías modernas de acondicionamiento físico sin perder el código de honor, la cortesía y la humildad que las disciplinas orientales nos han heredado.
            </p>
          </div>

          {/* Columna Derecha (5/12): Bloque Visual Estilizado */}
          <div className="lg:col-span-5 bg-linear-to-br from-slate-900 to-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden text-center flex flex-col justify-center min-h-62.5">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-3xl"></div>
            
            <span className="text-4xl mb-3 block animate-pulse">🥋</span>
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">Formando Carácter</h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xs mx-auto">
              "No entrenamos para la violencia, entrenamos para tener el control absoluto sobre nuestro cuerpo y nuestras emociones."
            </p>
          </div>

        </div>

        {/* SECCIÓN 3: POR QUÉ ELEGIRNOS (Pilares en Tarjetas) */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Por Qué Entrenar con Nosotros
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Diferenciales
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caracteristicas.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-4 hover:border-red-500/20 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-slate-950 border border-slate-800/80 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icono}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-extrabold text-white group-hover:text-yellow-500 transition-colors duration-200">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NosotrosPage;