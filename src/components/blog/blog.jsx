import React from 'react';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  // Datos de los artículos del blog de la academia
  const articulos = [
    {
      id: 1,
      titulo: 'Los 5 Principios del Taekwondo y cómo aplicarlos en la vida diaria',
      resumen: 'La disciplina marcial no se queda en el dojang. Descubre cómo la cortesía, integridad y perseverancia moldean el carácter de nuestros alumnos fuera de las clases.',
      categoria: 'Filosofía',
      fecha: '28 Jul, 2026',
      tiempo: '5 min',
      colorTag: 'bg-red-950/40 text-red-400 border-red-500/20'
    },
    {
      id: 2,
      titulo: 'Guía para principiantes: ¿Qué equipamiento necesitas para tu primera clase de Muay Thai?',
      resumen: 'Desde las vendas de boxeo hasta las espinilleras adecuadas. Te explicamos paso a paso cómo elegir tu primer equipo de protección de forma correcta.',
      categoria: 'Equipamiento',
      fecha: '15 Jul, 2026',
      tiempo: '4 min',
      colorTag: 'bg-amber-950/40 text-amber-400 border-amber-500/20'
    },
    {
      id: 3,
      titulo: 'Beneficios cardiovasculares y mentales de entrenar Kickboxing',
      resumen: 'Más allá de la defensa personal, el Kickboxing es uno de los deportes más potentes para quemar calorías, tonificar el cuerpo y liberar el estrés diario.',
      categoria: 'Salud',
      fecha: '02 Jul, 2026',
      tiempo: '6 min',
      colorTag: 'bg-slate-950 text-slate-400 border-slate-800'
    },
    {
      id: 4,
      titulo: 'La evolución de las Artes Marciales Mixtas: Del vale tudo a la ciencia moderna',
      resumen: 'Analizamos cómo el deporte de mayor crecimiento en el mundo pasó de ser un choque de estilos a una combinación milimétrica de técnicas integradas.',
      categoria: 'MMA',
      fecha: '20 Jun, 2026',
      tiempo: '8 min',
      colorTag: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20'
    }
  ];

  // El primer artículo se toma como el "Destacado" de la cabecera
  const destacado = articulos[0];
  const secundarios = articulos.slice(1);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Comunidad Naja
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Nuestro <span className="text-yellow-500">Blog</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Artículos, guías técnicas, nutrición y filosofía marcial escritos por nuestros instructores para potenciar tu entrenamiento.
          </p>
        </div>

        {/* ARTÍCULO DESTACADO (Formato ancho horizontal) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl md:flex items-stretch hover:border-slate-700 transition-colors duration-200">
          {/* Marcador de posición para imagen del blog destacado */}
          <div className="md:w-1/2 bg-slate-950 min-h-[240px] flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-800 relative p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
            <span className="text-4xl mb-2">🥋</span>
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Gimnasios Naja</span>
          </div>
          
          {/* Contenido destacado */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border ${destacado.colorTag}`}>
                {destacado.categoria}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-white hover:text-red-500 transition-colors duration-200 leading-tight">
                {destacado.titulo}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                {destacado.resumen}
              </p>
            </div>
            
            {/* Meta información */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-slate-500 text-xs font-semibold">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5"><FaCalendarAlt /> <span>{destacado.fecha}</span></span>
                <span className="flex items-center space-x-1.5"><FaClock /> <span>{destacado.tiempo}</span></span>
              </div>
              <button className="text-red-500 hover:text-red-400 flex items-center space-x-1 font-bold group">
                <span>Leer más</span>
                <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ARTÍCULOS SECUNDARIOS (Cuadrícula de 3 columnas) */}
        <div className="space-y-6">
          <h3 className="text-lg font-extrabold text-white tracking-wide uppercase border-b border-slate-800 pb-3">
            Últimas Publicaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secundarios.map((post) => (
              <div 
                key={post.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-colors duration-200 group"
              >
                {/* Cuadro simulador de imagen de artículo */}
                <div className="bg-slate-950 h-40 border-b border-slate-800 flex items-center justify-center relative">
                  <span className="text-2xl opacity-40 group-hover:scale-110 transition-transform duration-300">📖</span>
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border ${post.colorTag}`}>
                      {post.categoria}
                    </span>
                    <h4 className="text-base font-black text-white group-hover:text-yellow-500 transition-colors duration-200 leading-snug">
                      {post.titulo}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-3">
                      {post.resumen}
                    </p>
                  </div>

                  {/* Meta información inferior */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-slate-500 text-[11px] font-semibold">
                    <span className="flex items-center space-x-1"><FaCalendarAlt /> <span>{post.fecha}</span></span>
                    <button className="text-yellow-500 hover:text-yellow-400 flex items-center space-x-1 font-bold">
                      <span>Leer</span>
                      <FaArrowRight className="text-[9px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;