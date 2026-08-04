import React from 'react';
import { FaGraduationCap, FaAward, FaShieldAlt } from 'react-icons/fa';

const InstructoresPage = () => {
  // Datos del equipo de profesores e instructores de Gimnasios Naja
  const instructores = [
    {
      nombre: 'Prof. Principal Naja',
      rol: 'Director Técnico & Fundador',
      grado: 'Cinta Negra 4° Dan / Kru Principal',
      disciplinas: ['Tae Kwon Do', 'Muay Thai', 'Krabi Krabong'],
      experiencia: 'Más de 20 años dedicados a la enseñanza y formación de atletas de alto rendimiento en Veracruz. Certificado internacionalmente en disciplinas orientales antiguas.',
      colorAcento: 'border-t-yellow-500 shadow-yellow-500/5',
      tagColor: 'bg-yellow-950/40 text-yellow-400 border-yellow-500/20'
    },
    {
      nombre: 'Instructor TKD Naja',
      rol: 'Instructor de Taekwondo',
      grado: 'Cinta Negra 2° Dan',
      disciplinas: ['Tae Kwon Do Infantil y Juvenil'],
      experiencia: 'Especialista en el desarrollo psicomotriz, disciplina y formación competitiva para niños y adolescentes. Formador de múltiples medallistas estatales.',
      colorAcento: 'border-t-red-500 shadow-red-500/5',
      tagColor: 'bg-red-950/40 text-red-400 border-red-500/20'
    },
    {
      nombre: 'Kru Striking Naja',
      rol: 'Entrenador de Deportes de Contacto',
      grado: 'Kru Certificado / Certificación MMA',
      disciplinas: ['Muay Thai', 'Kickboxing', 'MMA'],
      experiencia: 'Ex-competidor profesional con amplia trayectoria en estrategias de striking, striking para la jaula y acondicionamiento físico de combate de élite.',
      colorAcento: 'border-t-emerald-500 shadow-emerald-500/5',
      tagColor: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
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
          {instructores.map((ins, index) => (
            <div 
              key={index} 
              className={`bg-slate-900 border border-slate-800 border-t-4 ${ins.colorAcento} p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200 group`}
            >
              <div className="space-y-6">
                {/* Avatar / Imagen de perfil ficticia con iniciales */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center font-black text-xl text-slate-400 group-hover:text-white group-hover:border-slate-700 transition-colors duration-200">
                    {ins.nombre.split(' ').map(n => n[0]).join('').slice(0, 3)}
                  </div>
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
              <div className="pt-6 mt-6 border-t border-slate-800/80">
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
          ))}
        </div>

        {/* MENSAJE DE COMPROMISO */}
        <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Todos nuestros profesores se encuentran en <strong className="text-slate-200">capacitación continua</strong> y avalados por sus respectivas federaciones y linajes para garantizar una práctica totalmente segura, técnica y apegada a los valores marciales tradicionales.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InstructoresPage;