import React from 'react';

const KrabiKrabongPage = () => {
  // Las armas principales del arsenal
  const armasArsenal = [
    { nombre: 'Krabi', tipo: 'Espada', desc: 'El sable curvo tailandés de un solo filo, ligero y balanceado. Utilizado principalmente para estocadas rápidas y cortes ágiles de pie.' },
    { nombre: 'Krabong', tipo: 'Bastón', desc: 'El bastón largo o lanza. Un arma contundente de dos manos que permite mantener la distancia y realizar bloqueos masivos y golpes de gran palanca.' },
    { nombre: 'Daab', tipo: 'Espadas Dobles', desc: 'El uso simultáneo de dos sables (Daab Song Mue). Requiere una coordinación extrema para atacar con un brazo mientras se defiende con el otro.' },
    { nombre: 'Mae Sawk', tipo: 'Escudos de Brazo', desc: 'Protectores de madera pesada ajustados a los antebrazos. Se usan para bloquear sables y golpear de forma contundente en distancias cortas, similar a los codos.' },
    { nombre: 'Lauh / Lo', tipo: 'Escudo Circular', desc: 'Escudos tradicionales utilizados en combinación con el Krabi (sable) para repeler ataques frontales y avanzar de forma segura en el campo de batalla.' },
    { nombre: 'Plong', tipo: 'Lanza Corta', desc: 'Bastón de longitud media con puntas reforzadas, ideal para contrarrestar ataques de sables mediante movimientos giratorios rápidos.' },
  ];

  // Pilares del entrenamiento tradicional
  const fundamentos = [
    { titulo: 'Chern Seua (Pasos de Combate)', desc: 'Juego de piernas y posturas bajas inspiradas en animales como el tigre o el mono, diseñadas para evadir cortes y mantener una base sólida en terrenos difíciles.' },
    { titulo: 'De la Espada al Puño', desc: 'El Krabi Krabong es un sistema completo. Si el guerrero pierde su arma, el sistema transiciona inmediatamente al Muay Boran (golpes con extremidades y derribos).' },
    { titulo: 'Danza del Respeto (Wai Kru)', desc: 'Al igual que en el Muay Thai, cada practicante realiza un ritual coreografiado antes de entrenar con armas para enfocar la mente y honrar el linaje de guerreros.' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECCIÓN 1: INTRODUCCIÓN / CABECERA */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-4 max-w-4xl">
            <span className="text-amber-500 font-black tracking-widest text-xs uppercase bg-amber-950/40 px-3 py-1.5 rounded-full border border-amber-500/20">
              Disciplinas Ancestrales
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Krabi <span className="text-amber-600">Krabong</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              El Krabi Krabong es el arte marcial militar originario de los antiguos campos de batalla de Siam (actual Tailandia). Se enfoca en el <span className="text-amber-400 font-semibold">combate con armas blancas tradicionales</span>, combinando de forma letal el uso del sable (`Krabi`), el bastón (`Krabong`) y escudos, sirviendo como la raíz histórica de todo el golpeo tailandés moderno.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: EL ARSENAL DE SIAM */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Armas del Sistema
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Arsenal
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {armasArsenal.map((arma) => (
              <div key={arma.nombre} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-amber-500/20 transition-all duration-200 group">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-black text-white group-hover:text-amber-500 transition-colors duration-200">{arma.nombre}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide bg-amber-950/40 text-amber-400 border border-amber-500/20">
                      {arma.tipo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{arma.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 3: FUNDAMENTOS DEL GUERRERO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Fundamentos de Combate
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Tradición
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundamentos.map((fun) => (
              <div key={fun.titulo} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 border-l-4 border-l-amber-600 hover:border-amber-500/30 transition-all duration-200">
                <h3 className="text-base font-extrabold text-white">{fun.titulo}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{fun.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KrabiKrabongPage;