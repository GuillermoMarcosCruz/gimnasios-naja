import React from 'react';

const TaekwondoPage = () => {
	const numerosCoreanos = [
	{ coreano: 'HANA', español: '1', fonetica: '하나' },
	{ coreano: 'DUL', español: '2', fonetica: '둘' },
	{ coreano: 'SET', español: '3', fonetica: '셋' },
	{ coreano: 'NET', español: '4', fonetica: '넷' },
	{ coreano: 'DASOT', español: '5', fonetica: '다섯' },
	{ coreano: 'YOSOT', español: '6', fonetica: '여섯' },
	{ coreano: 'ILGOP', español: '7', fonetica: '일곱' },
	{ coreano: 'YODOL', español: '8', fonetica: '여덟' },
	{ coreano: 'AHOP', español: '9', fonetica: '아홉' },
	{ coreano: 'YOL', español: '10', fonetica: '열' },
	{ coreano: 'YOL HANA', español: '11', fonetica: '열 하나' },
	{ coreano: 'YOL DUL', español: '12', fonetica: '열둘' },
];

	// Nueva información: Los 5 principios fundamentales
	const principios = [
		{ titulo: 'Cortesía', coreano: 'Ye Ui', desc: 'Respeto mutuo, buenos modales y trato digno a los demás dentro y fuera del dojang.' },
		{ titulo: 'Integridad', coreano: 'Yom Chi', desc: 'Saber distinguir el bien del mal, ser honesto con uno mismo y mantener una conducta justa.' },
		{ titulo: 'Perseverancia', coreano: 'In Nae', desc: 'Fuerza de voluntad para superar cualquier obstáculo y no rendirse ante las dificultades.' },
		{ titulo: 'Autocontrol', coreano: 'Guk Gi', desc: 'Dominio sobre los impulsos físicos, emociones y acciones, manteniendo la calma.' },
		{ titulo: 'Espíritu Indomable', coreano: 'Baekjul Boolgool', desc: 'Defender la justicia con valor y convicción, sin importar el miedo o el rival.' },
	];

	// Nueva información: Técnicas fundamentales clasificadas
	const tecnicas = [
    { nombre: 'Ap Chagi', tipo: 'Patada', desc: 'Patada de frente directa utilizando el metatarso del pie.', fonetica: '앞차기' },
    { nombre: 'Dollyo Chagi', tipo: 'Patada', desc: 'Patada circular hacia el tronco o la cabeza con el empeine.', fonetica: '돌려차기' },
    { nombre: 'Yop Chagi', tipo: 'Patada', desc: 'Patada lateral de potencia utilizando el talón del pie.', fonetica: '옆차기' },
    { nombre: 'Arae Makki', tipo: 'Defensa', desc: 'Bloqueo o defensa baja para proteger la zona del abdomen.', fonetica: '아래막기' },
    { nombre: 'Momtong Makki', tipo: 'Defensa', desc: 'Defensa media hacia el interior para desviar golpes al pecho.', fonetica: '몸통막기' },
    { nombre: 'Olgul Makki', tipo: 'Defensa', desc: 'Defensa alta para proteger el rostro de ataques descendientes.', fonetica: '얼굴막기' },
  ];

  const reproducirVoz = (item) => {
    if ('speechSynthesis' in window) {
      // 1. Cancelar cualquier audio activo para evitar bloqueos en cola
      window.speechSynthesis.cancel();
      
      // 2. Determinar el texto (Hangul nativo si existe, o el término legible)
      const textoEmision = item.fonetica ? item.fonetica : item.termino;
      const utterance = new SpeechSynthesisUtterance(textoEmision);
      
      // 3. Configurar parámetros base de entonación
      utterance.lang = 'ko-KR'; // Cambiar a 'th-TH' si tu glosario final es de Tae Kwon Do
		utterance.pitch = 0.60;  // Baja el tono (rango habitual: 0.5 a 2) para volver la voz grave y fuerte
      utterance.rate = 1;   // Velocidad pausada idónea para aprendizaje marcial

      // 4. Intentar vincular la voz oficial del sistema de manera asíncrona
      const voces = window.speechSynthesis.getVoices();
      const vozCoreana = voces.find(v => v.lang.includes('ko-KR') || v.lang.includes('ko_KR'));

      if (vozCoreana) {
        // Si el idioma está instalado en el dispositivo, se asigna con éxito
        utterance.voice = vozCoreana;
      } else {
        // FALLBACK: Si no tienes el idioma descargado, borramos la restricción estricta
        // para obligar al navegador a leer el término con su motor por defecto
        console.warn("Idioma nativo no encontrado en el dispositivo. Activando voz de respaldo.");
        utterance.lang = window.navigator.language || 'es-ES'; 
      }
      
      // 5. Ejecutar la reproducción
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Tu navegador web actual no soporta síntesis de voz.");
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECCIÓN 1: INTRODUCCIÓN */}
        <div className="relative bg-linear-to-r from-slate-900 to-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-4 max-w-4xl">
            <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1.5 rounded-full border border-red-500/20">
              Disciplinas
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Tae<span className="text-yellow-500">kwon</span>do
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              El taekwondo es un arte marcial de origen coreano, convertido también en deporte olímpico, 
              que se centra en técnicas de defensa y ataque con énfasis en las <span className="text-red-400 font-semibold">patadas veloces y precisas</span>. 
              Además de la efectividad física, fomenta de manera primordial la disciplina, el respeto y el desarrollo integral.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: PRINCIPIOS DEL TAEKWONDO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Principios Fundamentales
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Doctrina
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principios.map((prin) => (
              <div key={prin.titulo} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md space-y-2 hover:border-yellow-500/20 transition-colors duration-200">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-extrabold text-white">{prin.titulo}</h3>
                  <span className="text-xs font-semibold text-yellow-500 italic">{prin.coreano}</span>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{prin.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN: NÚMEROS EN COREANO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
              Números Coreanos
            </h2>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Haz clic para escuchar 🔊
            </span>
          </div>

          {/* CUADRÍCULA DE TARJETAS ACTUALIZADA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {numerosCoreanos.map((num) => (
              <div
                key={num.español}
                onClick={() => reproducirVoz(num)} /* 👈 Ejecuta la voz al hacer clic */
                className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-red-500/50 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer select-none"
                title="Haz clic para escuchar la pronunciación"
              >
                {/* Círculo con el número en Español */}
                <div className="w-8 h-8 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-colors duration-200">
                  {num.español}
                </div>
                {/* Palabra en Coreano */}
                <span className="mt-3 text-sm font-black tracking-wider text-white uppercase flex items-center space-x-1.5">
                  <span>{num.coreano}</span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-200">🔊</span>
                </span>
              </div>
            ))}
          </div>
        </div>

			{/* SECCIÓN 4: TÉCNICAS BÁSICAS CON AUDIO */}
			<div className="space-y-6">
			<div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
				<h2 className="text-xl font-extrabold text-white tracking-wide uppercase">
					Técnicas Básicas
				</h2>
				<span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
					Haz clic para escuchar pronunciación 🔊
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{tecnicas.map((tec) => (
					<div 
					key={tec.nombre} 
					onClick={() => reproducirVoz(tec)} /* 👈 Llama a la voz en coreano al hacer clic */
					className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-red-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group cursor-pointer select-none"
					title="Escuchar pronunciación técnica"
					>
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<h3 className="text-base font-black text-white group-hover:text-red-500 transition-colors duration-200 flex items-center space-x-1.5">
							<span>{tec.nombre}</span>
							<span className="text-[11px] opacity-0 group-hover:opacity-60 transition-opacity duration-200">🔊</span>
							</h3>
							<span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
							tec.tipo === 'Patada' ? 'bg-red-950/40 text-red-400 border border-red-500/20' : 'bg-blue-950/40 text-blue-400 border border-blue-500/20'
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

        {/* SECCIÓN ADICIONAL: ACCESO AL VOCABULARIO OFICIAL */}
        <div className="relative bg-linear-to-r from-slate-900 via-slate-900 to-red-950/20 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl"></div>

          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-lg font-black text-white uppercase tracking-wide">
              ¿Te preparas para tu próximo examen de grado?
            </h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Explora nuestra enciclopedia técnica oficial con el glosario completo de posiciones, comandos, ataques y partes del cuerpo en coreano con audio nativo integrado.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="/vocabulario"
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

export default TaekwondoPage;