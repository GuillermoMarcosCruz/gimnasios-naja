import React from 'react';

const ArtesMarcialesMixtasPage = () => {
  // Las 3 distancias o fases fundamentales del MMA
  const fasesCombate = [
    { fase: 'Striking (Pelea de Pie)', desc: 'Dominio del golpeo utilizando el boxeo, kickboxing y muay thai. Incluye combinaciones de puños, patadas, rodillas y codos de forma fluida.' },
    { fase: 'Clinch & Wrestling', desc: 'La transición para derribar o evitar ser derribado. Se trabaja la lucha libre y el judo contra la jaula para controlar la posición del oponente.' },
    { fase: 'Grappling (Suelo)', desc: 'El arte de la sumisión y el control posicional derivado del Jiu-Jitsu Brasileño. Incluye estrangulaciones, palancas de brazo, llaves de pierna y Ground & Pound.' },
  ];

  // Arsenal técnico y conceptos fundamentales
  const tecnicasMMA = [
    { nombre: 'Ground & Pound', tipo: 'Suelo', desc: 'Estrategia letal de golpear al oponente con puños y codos una vez que ha sido derribado y se mantiene el control posicional en la lona.' },
    { nombre: 'Double Leg Takedown', tipo: 'Derribo', desc: 'Técnica de lucha olímpica que consiste en taclear las dos piernas del rival para desestabilizarlo y llevar el combate al suelo.' },
    { nombre: 'Rear Naked Choke', tipo: 'Sumisión', desc: 'Estrangulación sanguínea por la espalda (Mata León). Una de las sumisiones más efectivas y utilizadas en la historia de las MMA.' },
    { nombre: 'Sprawl', tipo: 'Defensa', desc: 'Movimiento defensivo fundamental que consiste en echar las piernas hacia atrás y bajar la cadera para evitar un intento de derribo.' },
    { nombre: 'Guillotine Choke', tipo: 'Sumisión', desc: 'Llave de sumisión frontal al cuello que se aplica cuando el rival intenta un derribo descuidando la posición de su cabeza.' },
    { nombre: 'Overhand Right', tipo: 'Striking', desc: 'Golpe de puño volado descendente de gran potencia, ideal para sorprender por encima de la guardia del oponente.' },
  ];

  // Beneficios del entrenamiento de MMA
  const beneficios = [
    { titulo: 'El Atleta Completo', desc: 'No te limitas a un solo estilo. Aprendes a defenderte y atacar en cualquier escenario posible: de pie, abrazado o en el suelo.' },
    { titulo: 'Acondicionamiento de Élite', desc: 'Los entrenamientos exigen una resistencia anaeróbica brutal. Desarrollas una fuerza funcional real, un core sumamente fuerte y agilidad mental bajo presión.' },
    { titulo: 'Defensa Personal Real', desc: 'Al ser el deporte de contacto más cercano a una situación de combate real sin reglas, te brinda las herramientas más efectivas de protección personal.' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECCIÓN 1: INTRODUCCIÓN / CABECERA */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-4 max-w-4xl">
            <span className="text-emerald-500 font-black tracking-widest text-xs uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/20">
              Disciplinas
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Artes Marciales <span className="text-emerald-500">Mixtas</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              Las Artes Marciales Mixtas (AMM / MMA) representan la máxima evolución del combate deportivo. Combinan de forma estratégica las técnicas más efectivas de disciplinas como el <span className="text-emerald-400 font-semibold">Jiujitsu Brasileño, Boxeo, Muay Thai, Kickboxing y Lucha Olímpica</span> en un solo sistema integral.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: BENEFICIOS Y ENFOQUE */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              ¿Por qué entrenar MMA?
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Beneficios
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((ben) => (
              <div key={ben.titulo} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 border-t-2 border-t-emerald-500 hover:border-emerald-500/30 transition-all duration-200">
                <h3 className="text-base font-extrabold text-white">{ben.titulo}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 3: LAS 3 FASES DEL COMBATE */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Fases Fundamentales
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Estrategia
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fasesCombate.map((fase) => (
              <div key={fase.fase} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 border-l-4 border-l-emerald-500 hover:border-emerald-500/20 transition-all duration-200">
                <h3 className="text-sm font-black text-white uppercase tracking-wider text-emerald-400">{fase.fase}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{fase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 4: ARSENAL TÉCNICO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Técnicas Clave de la Jaula
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Fundamentos
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnicasMMA.map((tec) => (
              <div key={tec.nombre} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-200 group">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-black text-white group-hover:text-emerald-500 transition-colors duration-200">{tec.nombre}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                      {tec.tipo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{tec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArtesMarcialesMixtasPage;