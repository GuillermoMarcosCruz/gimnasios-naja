import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaArrowRight, FaTimes } from 'react-icons/fa';

// Mini-componente optimizado para reutilizar la estructura de las tarjetas secundarias
const PostCard = ({ post, onLeer }) => (
  <article className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-colors duration-200 group">
    <div className="bg-slate-950 h-40 border-b border-slate-800 flex items-center justify-center relative">
      <span className="text-2xl opacity-40 group-hover:scale-110 transition-transform duration-300">{post.icono}</span>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border ${post.colorTag}`}>{post.categoria}</span>
        <h4 className="text-base font-black text-white group-hover:text-yellow-500 transition-colors duration-200 leading-snug">{post.titulo}</h4>
        <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-3">{post.resumen}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-slate-500 text-[11px] font-semibold">
        <span className="flex items-center space-x-1"><FaCalendarAlt /> <span>{post.fecha}</span></span>
        <button onClick={onLeer} className="text-yellow-500 hover:text-yellow-400 flex items-center space-x-1 font-bold cursor-pointer">
          <span>Leer</span><FaArrowRight className="text-[9px]" />
        </button>
      </div>
    </div>
  </article>
);

const BlogPage = () => {
  const [articuloActivo, setArticuloActivo] = useState(null);
  const [indexFotoExpandida, setIndexFotoExpandida] = useState(null);

  const articulos = [
    { id: 1, slug: 'los-5-principios-del-taekwondo', titulo: 'Los 5 Principios del Taekwondo y cómo aplicarlos en la vida diaria', resumen: 'La disciplina marcial no se queda en el dojang. Descubre cómo la cortesía, integridad y perseverancia moldean el carácter de nuestros alumnos fuera de las clases.', categoria: 'Filosofía', fecha: '28 Jul, 2026', tiempo: '5 min', colorTag: 'bg-red-950/40 text-red-400 border-red-500/20', icono: '🥋' },
    { id: 2, slug: 'equipamiento-primera-clase-muay-thai', titulo: 'Guía para principiantes: ¿Qué equipamiento necesitas para tu primera clase de Muay Thai?', resumen: 'Desde las vendas de boxeo hasta las espinilleras adecuadas. Te explicamos paso a paso cómo elegir tu primer equipo de protección de forma correcta.', categoria: 'Equipamiento', fecha: '15 Jul, 2026', tiempo: '4 min', colorTag: 'bg-amber-950/40 text-amber-400 border-amber-500/20', icono: '🥊' },
    { id: 3, slug: 'beneficios-cardiovasculares-entrenar-kickboxing', titulo: 'Beneficios cardiovasculares y mentales de entrenar Kickboxing', resumen: 'Más allá de la defensa personal, el Kickboxing es uno de los deportes más potentes para quemar calorías, tonificar el cuerpo y liberar el estrés diario.', categoria: 'Salud', fecha: '02 Jul, 2026', tiempo: '6 min', colorTag: 'bg-slate-950 text-slate-400 border-slate-800', icono: '💪' },
    { id: 4, slug: 'evolucion-artes-marciales-mixtas-mma', titulo: 'La evolución de las Artes Marciales Mixtas: Del vale tudo a la ciencia moderna', resumen: 'Analizamos cómo el deporte de mayor crecimiento en el mundo pasó de ser un choque de estilos a una combinación milimétrica de técnicas integradas.', categoria: 'MMA', fecha: '20 Jun, 2026', tiempo: '8 min', colorTag: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20', icono: '🤼' }
  ];

  const listaFotos = [
    { id: 1, titulo: "Entrenamiento de Boxeo", placeholder: "🥊" },
    { id: 2, titulo: "Clase de Tae Kwon Do", placeholder: "🥋" },
    { id: 3, titulo: "Sesión de Muay Thai", placeholder: "🤼" },
    { id: 4, titulo: "Comunidad Naja", placeholder: "💪" }
  ];

  const destacado = articulos[0];
  const secundarios = articulos.slice(1);
  const fotoActual = indexFotoExpandida !== null ? listaFotos[indexFotoExpandida] : null;

  let touchStartX = 0, touchEndX = 0;
  const navegarFoto = (dir) => setIndexFotoExpandida(p => p === null ? null : (p + dir + listaFotos.length) % listaFotos.length);

  // 3. HOOK SEO + CONTROL DE TECLADO UNIFICADO
  useEffect(() => {
    document.title = articuloActivo ? `${articuloActivo.titulo} | Blog Gimnasios Naja` : 'Nuestro Blog | Gimnasios Naja Tuxpan';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', articuloActivo ? articuloActivo.resumen : 'Artículos oficiales de Gimnasios Naja.');
    window.history.pushState(null, '', articuloActivo ? `/blog/${articuloActivo.slug}` : '/blog');

    const manejarTecladoGlobal = (e) => {
      if (e.key === 'Escape') { setIndexFotoExpandida(null); setArticuloActivo(null); }
      if (indexFotoExpandida !== null) {
        if (e.key === 'ArrowRight') navegarFoto(1);
        if (e.key === 'ArrowLeft') navegarFoto(-1);
      }
    };
    window.addEventListener('keydown', manejarTecladoGlobal);
    return () => window.removeEventListener('keydown', manejarTecladoGlobal);
  }, [articuloActivo, indexFotoExpandida]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ENCABEZADO */}
        <header className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">Comunidad Naja</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">Nuestro <span className="text-yellow-500">Blog</span></h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium">Artículos, guías técnicas y filosofía marcial oficiales para potenciar tu entrenamiento.</p>
        </header>

        {/* GALERÍA DE IMÁGENES */}
        <section className="space-y-6">
          <h3 className="text-lg font-extrabold text-white tracking-wide uppercase border-b border-slate-800 pb-3">Galería de la Academia</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {listaFotos.map((foto, index) => (
              <div key={foto.id} onClick={() => setIndexFotoExpandida(index)} className="bg-slate-900 border border-slate-800 rounded-xl h-48 flex flex-col items-center justify-center relative overflow-hidden group hover:border-slate-600 transition-all duration-300 shadow-lg cursor-pointer">
                <span className="text-4xl opacity-30 group-hover:scale-125 transition-transform duration-300">{foto.placeholder}</span>
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{foto.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARTÍCULO DESTACADO */}
        <article className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl md:flex items-stretch hover:border-slate-700 transition-colors duration-200">
          <div className="md:w-1/2 bg-slate-950 min-h-60 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-800 relative p-8 text-center">
            <span className="text-4xl mb-2">{destacado.icono}</span>
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Gimnasios Naja</span>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border ${destacado.colorTag}`}>{destacado.categoria}</span>
              <h2 className="text-xl md:text-2xl font-black text-white hover:text-red-500 transition-colors duration-200 leading-tight">{destacado.titulo}</h2>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">{destacado.resumen}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-slate-500 text-xs font-semibold">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5"><FaCalendarAlt /> <span>{destacado.fecha}</span></span>
                <span className="flex items-center space-x-1.5"><FaClock /> <span>{destacado.tiempo}</span></span>
              </div>
              <button onClick={() => setArticuloActivo(destacado)} className="text-red-500 hover:text-red-400 flex items-center space-x-1 font-bold group cursor-pointer">
                <span>Leer más</span><FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </article>

        {/* PUBLICACIONES SECUNDARIAS */}
        <section className="space-y-6">
          <h3 className="text-lg font-extrabold text-white tracking-wide uppercase border-b border-slate-800 pb-3">Últimas Publicaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secundarios.map((post) => (
              <PostCard key={post.id} post={post} onLeer={() => setArticuloActivo(post)} />
            ))}
          </div>
        </section>
        {/* MODAL MULTIMEDIA: GALERÍA */}
        {indexFotoExpandida !== null && fotoActual && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setIndexFotoExpandida(null)} onTouchStart={(e) => touchStartX = e.targetTouches.clientX} onTouchMove={(e) => touchEndX = e.targetTouches.clientX} onTouchEnd={() => { if (touchStartX - touchEndX > 50) navegarFoto(1); if (touchEndX - touchStartX > 50) navegarFoto(-1); }}>
            <button className="absolute top-6 right-6 text-white text-xl bg-slate-900/80 p-3 rounded-full hover:bg-red-600 transition-colors z-50 cursor-pointer" onClick={() => setIndexFotoExpandida(null)}><FaTimes /></button>
            <button className="hidden sm:block absolute left-4 md:left-8 text-white text-2xl bg-slate-900/60 p-4 rounded-full hover:bg-slate-800 border border-slate-700 cursor-pointer z-50" onClick={(e) => { e.stopPropagation(); navegarFoto(-1); }}><FaArrowRight className="transform rotate-180" /></button>
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl max-w-lg w-full text-center space-y-6 shadow-2xl select-none" onClick={(e) => e.stopPropagation()}>
              <div className="h-64 bg-slate-950 rounded-xl flex items-center justify-center overflow-hidden"><span className="text-8xl transform transition-transform duration-300 hover:scale-110">{fotoActual.placeholder}</span></div>
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-wide">{fotoActual.titulo}</h4>
                <p className="text-xs text-slate-500 mt-1 font-semibold">Foto {indexFotoExpandida + 1} de {listaFotos.length}</p>
              </div>
            </div>
            <button className="hidden sm:block absolute right-4 md:right-8 text-white text-2xl bg-slate-900/60 p-4 rounded-full hover:bg-slate-800 border border-slate-700 cursor-pointer z-50" onClick={(e) => { e.stopPropagation(); navegarFoto(1); }}><FaArrowRight /></button>
          </div>
        )}

        {/* MODAL DE LECTURA DE ARTÍCULOS */}
        {articuloActivo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setArticuloActivo(null)}>
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto space-y-6 shadow-2xl relative animate-[fadeIn_0.25s_ease-out]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setArticuloActivo(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white text-lg bg-slate-950 p-2.5 rounded-full border border-slate-800 transition-colors cursor-pointer"><FaTimes /></button>
              <div className="space-y-4 pr-2">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border ${articuloActivo.colorTag}`}>{articuloActivo.categoria}</span>
                <h2 className="text-xl md:text-3xl font-black text-white leading-tight max-w-[90%]">{articuloActivo.titulo}</h2>
                <div className="flex items-center space-x-4 text-slate-500 text-xs font-semibold pb-4 border-b border-slate-800">
                  <span className="flex items-center space-x-1.5"><FaCalendarAlt /> <span>{articuloActivo.fecha}</span></span>
                  <span className="flex items-center space-x-1.5"><FaClock /> <span>{articuloActivo.tiempo}</span></span>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed pt-2 text-sm md:text-base">{articuloActivo.resumen} ¡Próximamente se subirá el contenido extendido de esta guía técnica!</p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <a href={`https://whatsapp.com{encodeURIComponent("¡Mira este artículo de Gimnasios Naja! 🔥\n\n*" + articuloActivo.titulo + "*\n\nLéelo completo aquí: https://vercel.app" + articuloActivo.slug)}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors flex items-center space-x-2 cursor-pointer shadow-lg">
                  <span>Compartir por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;