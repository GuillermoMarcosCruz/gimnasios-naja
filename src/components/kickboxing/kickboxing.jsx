import React from 'react';

const KickboxingPage = () => {
  // Modalidades competitivas comunes
  const modalidades = [
    { nombre: 'K-1 / Oriental', desc: 'La modalidad más popular. Permite golpes de puño, patadas a cualquier zona del cuerpo y rodillazos directos (sin agarre prolongado).' },
    { nombre: 'Full Contact', desc: 'Clásico del kickboxing americano. Solo se permiten golpes por encima de la cintura. No se permiten patadas a las piernas (low kicks).' },
    { nombre: 'Low Kick', desc: 'Permite todo el arsenal de puños del boxeo y patadas, incluyendo impactos a los muslos internos y externos del oponente.' },
  ];

  // Arsenal técnico básico (Puños y Patadas)
  const tecnicas = [
    { nombre: 'Jab & Cross', tipo: 'Puño', desc: 'El golpe recto de mano delantera para medir distancia (Jab) seguido del golpe cruzado de potencia con la mano trasera (Cross).' },
    { nombre: 'Hook (Gancho)', tipo: 'Puño', desc: 'Golpe curvo horizontal dirigido a la mandíbula o a la zona media (hígado/costillas) del rival.' },
    { nombre: 'Uppercut', tipo: 'Puño', desc: 'Golpe ascendente que viaja verticalmente desde abajo hacia el mentón del oponente en distancias cortas.' },
    { nombre: 'Low Kick', tipo: 'Patada', desc: 'Patada circular baja dirigida a destruir la base del oponente impactando con la tibia en los muslos.' },
    { nombre: 'Middle & High Kick', tipo: 'Patada', desc: 'Patadas circulares dirigidas a la zona media (costillas/hígado) o a la cabeza para buscar el fuera de combate (KO).' },
    { nombre: 'Front Kick (Push Kick)', tipo: 'Patada', desc: 'Patada frontal recta usada para empujar, mantener la distancia o frenar el avance del rival de forma contundente.' },
  ];

  // Pilares del entrenamiento de Kickboxing
  const pilares = [
    { titulo: 'Combinaciones Fluidas', desc: 'A diferencia de otras disciplinas, el Kickboxing brilla por encadenar golpes de puño que abren la guardia para rematar inmediatamente con patadas potentes.' },
    { titulo: 'Acondicionamiento Físico', desc: 'Es uno de los deportes con mayor quema calórica. Desarrolla una resistencia cardiovascular extrema, fuerza explosiva y una excelente tonificación muscular.' },
    { titulo: 'Defensa y Desplazamientos', desc: 'Hereda el juego de piernas ágil del boxeo occidental y los bloqueos rígidos de las artes marciales orientales para evadir e interceptar ataques.' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECCIÓN 1: INTRODUCCIÓN / CABECERA */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-4 max-w-4xl">
            <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
              Disciplinas
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Kick<span className="text-red-500">boxing</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              El Kickboxing es un deporte de combate moderno y dinámico que fusiona las técnicas de golpeo de puño del <span className="text-red-400 font-semibold">boxeo occidental</span> con las patadas potentes de las <span className="text-red-400 font-semibold">artes marciales orientales</span>. Es una disciplina sumamente efectiva tanto para la defensa personal de contacto como para lograr un estado físico y cardiovascular óptimo.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: BENEFICIOS Y PILARES */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Pilares del Entrenamiento
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Enfoque
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar) => (
              <div key={pilar.titulo} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 border-t-2 border-t-red-600 hover:border-red-500/30 transition-all duration-200">
                <h3 className="text-base font-extrabold text-white">{pilar.titulo}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 3: ARSENAL TÉCNICO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Técnicas de Combate
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Fundamentos
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnicas.map((tec) => (
              <div key={tec.nombre} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-red-500/20 transition-all duration-200 group">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-black text-white group-hover:text-red-500 transition-colors duration-200">{tec.nombre}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                      tec.tipo === 'Patada' ? 'bg-red-950/40 text-red-400 border border-red-500/20' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}>
                      {tec.tipo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{tec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 4: MODALIDADES COMPETITIVAS */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Modalidades de Combate
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Reglamentos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalidades.map((mod) => (
              <div key={mod.nombre} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 hover:border-red-500/20 transition-colors duration-200">
                <h3 className="text-sm font-black text-white uppercase tracking-wider text-red-400">{mod.nombre}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KickboxingPage;