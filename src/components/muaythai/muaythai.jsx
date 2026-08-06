import React from 'react';

const MuayThaiPage = () => {
  // Conteo tradicional en Tailandés
  const numerosTailandeses = [
  { tailandes: 'NEUNG', espanol: '1', fonetica: 'หนึ่ง' },
  { tailandes: 'SONG', espanol: '2', fonetica: 'สอง' },
  { tailandes: 'SAM', espanol: '3', fonetica: 'สาม' },
  { tailandes: 'SI', espanol: '4', fonetica: 'สี่' },
  { tailandes: 'HA', espanol: '5', fonetica: 'ห้า' },
  { tailandes: 'HOK', espanol: '6', fonetica: 'หก' },
  { tailandes: 'JIET', espanol: '7', fonetica: 'เจ็ด' },
  { tailandes: 'BAET', espanol: '8', fonetica: 'แปด' },
  { tailandes: 'GHAO', espanol: '9', fonetica: 'เก้า' },
  { tailandes: 'SIP', espanol: '10', fonetica: 'สิบ' },
];

  // Las armas del Muay Thai (Las 8 extremidades)
  const tecnicas = [
  { nombre: 'Mat (Chok)', tipo: 'Puño', desc: 'Golpes de mano que incluyen el jab, directo, cruzado, gancho y el clásico puño giratorio (Backfist).', fonetica: 'หมัด' },
  { nombre: 'Te (Chae)', tipo: 'Patada', desc: 'La famosa patada circular a las costillas (Middle Kick) o a los muslos (Low Kick), usando la tibia como superficie de impacto.', fonetica: 'เตะ' },
  { nombre: 'Khao', tipo: 'Rodilla', desc: 'Impactos frontales, laterales o voladores directos al cuerpo del oponente, letales en la distancia del clinch.', fonetica: 'เข่า' },
  { nombre: 'Sok', tipo: 'Codo', desc: 'Golpes cortantes y contundentes de corta distancia. Pueden ser descendentes, horizontales o de giro.', fonetica: 'ศอก' },
  { nombre: 'Teep', tipo: 'Empuje', desc: 'Patada frontal de empuje utilizada principalmente para controlar la distancia, frenar ataques o desestabilizar.', fonetica: 'ถีบ' },
  { nombre: 'Muay Pram', tipo: 'Clinch', desc: 'El sistema de lucha e inmovilización de pie característico del Muay Thai para dominar el cuello y golpear con rodillas.', fonetica: 'มวยปล้ำ' },
];

  // Elementos culturales esenciales
  const cultura = [
    { concepto: 'Wai Kru Ram Muay', desc: 'Ritual de danza y respeto realizado por los peleadores antes del combate para honrar a sus maestros, familia y al espíritu de la pelea.' },
    { concepto: 'Mongkhon & Prajiad', desc: 'Amuletos sagrados de protección. El Mongkhon se porta en la cabeza antes de pelear, y los Prajiad son bandas amarradas en los bíceps.' },
    { concepto: 'Música Sarama', desc: 'Música tradicional tailandesa en vivo que acompaña las peleas, dictando el ritmo y aumentando la intensidad conforme avanzan los asaltos.' },
  ];

  // ⚡ FUNCIÓN DE REPRODUCCIÓN DE VOZ NATIVA NARRADA EN TAILANDÉS
  const reproducirVozTailandes = (item) => {
    if ('speechSynthesis' in window) {
      // 1. Limpiar colas de reproducción previas
      window.speechSynthesis.cancel();
      
      const textoEmision = item.fonetica ? item.fonetica : item.termino;
      const utterance = new SpeechSynthesisUtterance(textoEmision);
      
      utterance.lang = 'th-TH';
      
      // 2. CALIBRACIÓN DE FUERZA Y TONO GRAVE DE HOMBRE
      utterance.rate = 0.85;   // Velocidad pausada, firme y clara para entrenamiento
      utterance.pitch = 0.50;  // Baja el tono (rango habitual: 0.5 a 2) para volver la voz grave y fuerte
      utterance.volume = 1.0;  // Forzar volumen máximo de salida de la interfaz

      // 3. SELECCIÓN ESTRICTA DE VOZ MASCULINA
      const voces = window.speechSynthesis.getVoices();
      
      // Filtra de entre todas las voces cargadas del sistema operativo aquellas que contengan rasgos de hombre o el nombre tailandés masculino común Somsak
      const vozHombreThai = voces.find(v => 
        (v.lang.includes('th-TH') || v.lang.includes('th_TH')) && 
        (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('man') || v.name.toLowerCase().includes('somsak'))
      );

      // Si no encuentra una voz masculina thai específica en el hardware, asigna la primera voz tailandesa que halle disponible
      const vozThaiGenerica = voces.find(v => v.lang.includes('th-TH') || v.lang.includes('th_TH'));

      if (vozHombreThai) {
        utterance.voice = vozHombreThai;
      } else if (vozThaiGenerica) {
        utterance.voice = vozThaiGenerica;
      } else {
        // Mecanismo de respaldo automático en español si el paquete de idioma asiático no está descargado
        console.warn("Voz nativa no detectada. Activando motor por defecto con tono grave forzado.");
        utterance.lang = window.navigator.language || 'es-ES';
      }
      
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Este navegador no tiene soporte para la API de síntesis de voz.");
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECCIÓN 1: INTRODUCCIÓN / CABECERA */}
        <div className="relative bg-linear-to-r from-slate-900 to-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-4 max-w-4xl">
            <span className="text-amber-500 font-black tracking-widest text-xs uppercase bg-amber-950/40 px-3 py-1.5 rounded-full border border-amber-500/20">
              Disciplinas
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Muay <span className="text-amber-500">Thai</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              Conocido como el <span className="text-amber-400 font-semibold">"Arte de las Ocho Extremidades"</span>, el Muay Thai es el deporte nacional de Tailandia. Es un arte marcial de pie sumamente efectivo que combina golpes de puños, codos, rodillas y espinillas, complementado por un sistema de agarre dinámico conocido como Clinch.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: LAS ARMAS DEL COMBATE CON AUDIO */}
<div className="space-y-6">
  <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
    <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
      Técnicas y Armas Básicas
    </h2>
    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
      Haz clic para escuchar pronunciación 🔊
    </span>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {tecnicas.map((tec) => (
      <div 
        key={tec.nombre} 
        onClick={() => {
          // El nombre tiene un formato como "Mat (Chok)", limpiamos el paréntesis para una lectura fluida
          const nombreLimpio = tec.nombre.split(' ')[0];
          reproducirVozTailandes(tec);
        }} /* 👈 Llama a la voz en tailandés al hacer clic */
        className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group cursor-pointer select-none"
        title="Escuchar pronunciación tradicional"
      >
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-black text-white group-hover:text-amber-500 transition-colors duration-200 flex items-center space-x-1.5">
              <span>{tec.nombre}</span>
              <span className="text-[11px] opacity-0 group-hover:opacity-60 transition-opacity duration-200">🔊</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide bg-amber-950/40 text-amber-400 border border-amber-500/20">
              {tec.tipo}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">{tec.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* SECCIÓN 3: NÚMEROS EN TAILANDÉS ACTUALIZADA */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Números en Tailandés
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Haz clic para escuchar 🔊
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {numerosTailandeses.map((num) => (
              <div 
                key={num.espanol} 
                onClick={() => reproducirVozTailandes(num)} /* 👈 Activa la voz al hacer clic */
                className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-amber-500/50 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer select-none"
                title="Haz clic para escuchar la pronunciación"
              >
                {/* Círculo con el número en Español */}
                <div className="w-8 h-8 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors duration-200">
                  {num.espanol}
                </div>
                {/* Palabra en Tailandés */}
                <span className="mt-3 text-sm font-black tracking-wider text-white uppercase flex items-center space-x-1.5">
                  <span>{num.tailandes}</span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-200">🔊</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 4: TRADICIÓN Y CULTURA */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Tradición y Cultura Muay
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Código de Honor
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultura.map((cul) => (
              <div key={cul.concepto} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 border-l-4 border-l-red-600 hover:border-amber-500/20 transition-all duration-200">
                <h3 className="text-base font-extrabold text-white">{cul.concepto}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{cul.desc}</p>
              </div>
            ))}
          </div>
        </div>

{/* SECCIÓN ADICIONAL: ACCESO AL VOCABULARIO OFICIAL */}
        <div className="relative bg-linear-to-r from-slate-900 via-slate-900 to-red-950/20 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl"></div>

          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-lg font-black text-white uppercase tracking-wide">
              ¿Te preparas para tu próximo examen de grado khan?
            </h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Explora nuestra enciclopedia técnica oficial con el glosario completo de posiciones, comandos, ataques y partes del cuerpo en tailandés con audio nativo integrado.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="/vocabularioMuay"
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest px-6 py-3.5 rounded-xl transition-all duration-200 uppercase shadow-lg shadow-red-600/10 text-center inline-block"
            >
              Estudiar Vocabulario 🔊
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MuayThaiPage;