import React, { useState } from 'react';

const HorariosPage = () => {
  // Estado para filtrar por disciplina
  const [filtro, setFiltro] = useState('todos');

  // Datos de la agenda de clases de Gimnasios Naja
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
    //{ hora: '19:15 - 20:30', disciplina: 'Artes Marciales Mixtas', dias: 'Lunes a Viernes', grupo: 'Avanzados / Competidores', color: 'border-l-emerald-500 text-emerald-400' },
    { hora: '8:00 P.M. - 9:00 P.M.', disciplina: 'Krabi Krabong', dias: 'Sabado', grupo: 'General (Mixto)', color: 'border-l-orange-500 text-orange-400' },
  ];

  // Lista de disciplinas únicas para los botones del filtro
  const disciplinasUnicas = ['todos', 'Tae Kwon Do', 'Muay Thai', 'Kickboxing', 'Krabi Krabong'];

  // Filtrado lógico de los horarios
  const clasesFiltradas = filtro === 'todos' 
    ? clases 
    : clases.filter(c => c.disciplina === filtro);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-3">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
            Agenda Naja
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Horarios de <span className="text-yellow-500">Clases</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto font-medium">
            Selecciona una disciplina para filtrar las clases disponibles y encuentra tu horario ideal.
          </p>
        </div>

        {/* FILTROS INTERACTIVOS */}
        <div className="flex flex-wrap justify-center gap-2 pb-4">
          {disciplinasUnicas.map((disc) => (
            <button
              key={disc}
              onClick={() => setFiltro(disc)}
              className={`text-xs font-extrabold tracking-wider uppercase px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                filtro === disc
                  ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-600/10'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {disc === 'todos' ? 'Ver Todo' : disc}
            </button>
          ))}
        </div>

        {/* CONTENEDOR DE LA TABLA AGENDA */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          
          {/* CABECERA DE TABLA (Solo visible en pantallas medianas/grandes) */}
          <div className="hidden md:grid grid-cols-4 bg-slate-950 px-6 py-4 border-b border-slate-800 text-xs font-black tracking-wider text-slate-400 uppercase">
            <div>Horario</div>
            <div>Disciplina</div>
            <div>Días</div>
            <div>Grupo / Nivel</div>
          </div>

          {/* FILAS DE CLASES */}
          <div className="divide-y divide-slate-800/60">
            {clasesFiltradas.length > 0 ? (
              clasesFiltradas.map((clase, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-4 px-6 py-5 md:py-4 items-center gap-2 md:gap-0 border-l-4 ${clase.color} hover:bg-slate-950/40 transition-colors duration-200`}
                >
                  {/* Celda 1: Hora */}
                  <div className="text-sm font-black text-white md:text-slate-200 flex items-center md:block">
                    <span className="md:hidden text-[10px] font-bold text-slate-500 uppercase w-20 block">Hora:</span>
                    {clase.hora}
                  </div>

                  {/* Celda 2: Disciplina */}
                  <div className="text-sm font-extrabold flex items-center md:block">
                    <span className="md:hidden text-[10px] font-bold text-slate-500 uppercase w-20 block">Clase:</span>
                    {clase.disciplina}
                  </div>

                  {/* Celda 3: Días */}
                  <div className="text-xs font-medium text-slate-300 flex items-center md:block">
                    <span className="md:hidden text-[10px] font-bold text-slate-500 uppercase w-20 block">Días:</span>
                    {clase.dias}
                  </div>

                  {/* Celda 4: Grupo */}
                  <div className="text-xs font-medium text-slate-400 flex items-center md:block">
                    <span className="md:hidden text-[10px] font-bold text-slate-500 uppercase w-20 block">Nivel:</span>
                    {clase.grupo}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-sm text-slate-500 font-medium">
                No hay clases programadas para esta selección.
              </div>
            )}
          </div>

        </div>

        {/* NOTA ACLARATORIA */}
        <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl text-center">
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            * Los horarios están sujetos a cambios por competencias oficiales o días festivos. Te recomendamos llegar <strong className="text-slate-200">10 minutos antes</strong> de tu sesión.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HorariosPage;