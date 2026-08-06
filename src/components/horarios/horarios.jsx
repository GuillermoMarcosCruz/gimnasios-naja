import React, { useState } from 'react';

const FilaClase = ({ clase }) => (
  <div className={`grid grid-cols-1 md:grid-cols-4 px-6 py-5 md:py-4 items-center gap-2 md:gap-0 border-l-4 ${clase.color} hover:bg-slate-950/40 transition-colors duration-200`}>
    {[
      { label: "Hora:", val: clase.hora, style: "text-sm font-black text-white md:text-slate-200" },
      { label: "Clase:", val: clase.disciplina, style: "text-sm font-extrabold" },
      { label: "Días:", val: clase.dias, style: "text-xs font-medium text-slate-300" },
      { label: "Nivel:", val: clase.grupo, style: "text-xs font-medium text-slate-400" }
    ].map((celda, i) => (
      <div key={i} className={celda.style}>
        <span className="md:hidden text-[10px] font-bold text-slate-500 uppercase w-20 inline-block">{celda.label}</span>
        {celda.val}
      </div>
    ))}
  </div>
);

const HorariosPage = () => {
  const [filtro, setFiltro] = useState('todos');

  const clases = [
    { hora: '5:00 P.M. - 6:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '6:00 P.M. - 7:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '7:00 P.M. - 8:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '5:00 P.M. - 6:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Martes, Jueves y Sabado', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '6:00 P.M. - 7:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Martes, Jueves y Sabado', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '7:00 P.M. - 8:00 P.M.', disciplina: 'Tae Kwon Do', dias: 'Martes, Jueves y Sabado', grupo: 'General (Mixto)', color: 'border-l-red-500 text-red-400' },
    { hora: '6:00 P.M. - 7:00 P.M.', disciplina: 'Muay Thai', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-amber-500 text-amber-400' },
    { hora: '7:00 P.M. - 8:00 P.M.', disciplina: 'Muay Thai', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-amber-500 text-amber-400' },
    { hora: '8:00 P.M. - 9:00 P.M.', disciplina: 'Muay Thai', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-amber-500 text-amber-400' },
    { hora: '6:00 P.M. - 7:00 P.M.', disciplina: 'Kickboxing', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-600 text-red-500' },
    { hora: '7:00 P.M. - 8:00 P.M.', disciplina: 'Kickboxing', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-600 text-red-500' },
    { hora: '8:00 P.M. - 9:00 P.M.', disciplina: 'Kickboxing', dias: 'Lunes, Miércoles y Viernes', grupo: 'General (Mixto)', color: 'border-l-red-600 text-red-500' },
    { hora: '8:00 P.M. - 9:00 P.M.', disciplina: 'Krabi Krabong', dias: 'Sabado', grupo: 'General (Mixto)', color: 'border-l-orange-500 text-orange-400' },
  ];

  const disciplinasUnicas = ['todos', 'Tae Kwon Do', 'Muay Thai', 'Kickboxing', 'Krabi Krabong'];
  const clasesFiltradas = filtro === 'todos' ? clases : clases.filter(c => c.disciplina === filtro);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ENCABEZADO */}
        <header className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">Agenda Naja</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">Horarios de <span className="text-yellow-500">Clases</span></h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto font-medium">Selecciona una disciplina para filtrar las clases disponibles y encuentra tu horario ideal.</p>
        </header>

        {/* FILTROS INTERACTIVOS */}
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {disciplinasUnicas.map((disc) => (
            <button
              key={disc}
              onClick={() => setFiltro(disc)}
              className={`text-xs font-extrabold tracking-wider uppercase px-4 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                filtro === disc ? 'bg-red-600 text-white border-red-600 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {disc === 'todos' ? 'Ver Todo' : disc}
            </button>
          ))}
        </div>

        {/* AGENDA */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-4 bg-slate-950 px-6 py-4 border-b border-slate-800 text-xs font-black tracking-wider text-slate-400 uppercase">
            {['Horario', 'Disciplina', 'Días', 'Grupo / Nivel'].map((h, i) => <div key={i}>{h}</div>)}
          </div>

          <div className="divide-y divide-slate-800/60">
            {clasesFiltradas.length > 0 ? (
              clasesFiltradas.map((clase, index) => <FilaClase key={index} clase={clase} />)
            ) : (
              <div className="text-center py-12 text-sm text-slate-500 font-medium">No hay clases programadas para esta selección.</div>
            )}
          </div>
        </section>

        {/* NOTA ACLARATORIA */}
        <footer className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl text-center">
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            * Los horarios están sujetos a cambios por competencias oficiales o días festivos. Te recomendamos llegar <strong className="text-slate-200">10 minutos antes</strong> de tu sesión.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default HorariosPage;