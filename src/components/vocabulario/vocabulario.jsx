import React, { useState } from 'react';

// Mapeo compacto de colores base de Tailwind según subcategoría (cat)
const CATEGORY_COLORS = {
  'Cabeza': 'purple', 'Tronco': 'indigo', 'Ext. Superior': 'blue', 'Ext. Inferior': 'teal',
  'Dirección': 'emerald', 'Cardinal': 'slate', 'Ordinal': 'indigo', 'Decena': 'violet',
  'Centena': 'amber', 'Millar': 'rose', 'Multiplicador': 'pink', 'Comando': 'orange',
  'Cortesía': 'amber', 'Saludo': 'orange', 'Equipo': 'cyan', 'Lugar': 'cyan',
  'Acción': 'sky', 'Arbitraje': 'red', 'Fundamento': 'rose', 'Posición': 'emerald',
  'Patada': 'red', 'Rodilla': 'amber', 'Puño': 'sky', 'Mano': 'cyan',
  'Codo': 'orange', 'Antebrazo': 'blue', 'Bloqueo': 'blue'
};

// Base de datos unificada con la información COMPLETA de tu documento oficial de Taekwondo
const VOCABULARY = [
  // ==========================================
  // SECCIÓN: CUERPO (Con fonética nativa en Hangul)
  // ==========================================
  { seccion: 'cuerpo', termino: 'MEORI', significado: 'Cabeza', cat: 'Cabeza', fonetica: '머리' }, // Ajustada romanización de MORI a MEORI
  { seccion: 'cuerpo', termino: 'MOM', significado: 'Cuerpo / Tronco', cat: 'Tronco', fonetica: '몸' },
  { seccion: 'cuerpo', termino: 'GWANJANORI', significado: 'Sien', cat: 'Cabeza', fonetica: '관자놀이' }, // Corregido GWUANGJA a GWANJANORI (término anatómico exacto)
  { seccion: 'cuerpo', termino: 'IMA', significado: 'Frente', cat: 'Cabeza', fonetica: '이마' }, // Corregido IME a IMA
  { seccion: 'cuerpo', termino: 'EOLGUL', significado: 'Cara / Rostro', cat: 'Cabeza', fonetica: '얼굴' }, // Corregido EL KUL a EOLGUL
  { seccion: 'cuerpo', termino: 'NUN', significado: 'Ojo', cat: 'Cabeza', fonetica: '눈' },
  { seccion: 'cuerpo', termino: 'MOK', significado: 'Cuello', cat: 'Tronco', fonetica: '목' },
  { seccion: 'cuerpo', termino: 'GWI', significado: 'Oreja', cat: 'Cabeza', fonetica: '귀' }, // Corregido EAR GÜI a GWI
  { seccion: 'cuerpo', termino: 'TEOK', significado: 'Mandíbula / Barbilla', cat: 'Cabeza', fonetica: '턱' }, // Corregido TOK a TEOK
  { seccion: 'cuerpo', termino: 'IP', significado: 'Boca', cat: 'Cabeza', fonetica: '입' }, // Corregido BO a IP (término correcto)
  { seccion: 'cuerpo', termino: 'MEORIKARAK', significado: 'Pelo', cat: 'Cabeza', fonetica: '머리카락' }, // Corregido MORIKARAK a MEORIKARAK
  { seccion: 'cuerpo', termino: 'KO', significado: 'Nariz', cat: 'Cabeza', fonetica: '코' },
  { seccion: 'cuerpo', termino: 'EOKKAE', significado: 'Hombro', cat: 'Tronco', fonetica: '어깨' }, // Corregido EOKE a EOKKAE
  { seccion: 'cuerpo', termino: 'PAL', significado: 'Brazo', cat: 'Ext. Superior', fonetica: '팔' },
  { seccion: 'cuerpo', termino: 'PALMOK', significado: 'Antebrazo', cat: 'Ext. Superior', fonetica: '팔목' },
  { seccion: 'cuerpo', termino: 'AN PALMOK', significado: 'Lado interior del antebrazo', cat: 'Ext. Superior', fonetica: '안 팔목' },
  { seccion: 'cuerpo', termino: 'DWIT PALMOK', significado: 'Parte anterior del antebrazo', cat: 'Ext. Superior', fonetica: '뒷 팔목' }, // Corregido TUIT a DWIT
  { seccion: 'cuerpo', termino: 'PALKUP', significado: 'Codo', cat: 'Ext. Superior', fonetica: '팔꿈치' },
  { seccion: 'cuerpo', termino: 'SON', significado: 'Mano', cat: 'Ext. Superior', fonetica: '손' },
  { seccion: 'cuerpo', termino: 'SONMOK', significado: 'Muñeca', cat: 'Ext. Superior', fonetica: '손목' }, // Unificado sin espacio interno
  { seccion: 'cuerpo', termino: 'BATANGSON', significado: 'Palma de la mano', cat: 'Ext. Superior', fonetica: '바탕손' }, // Unificado sin espacio interno
  { seccion: 'cuerpo', termino: 'SONNAL DUNG', significado: 'Canto interior de la mano', cat: 'Ext. Superior', fonetica: '손날등' },
  { seccion: 'cuerpo', termino: 'AGUISON', significado: 'Arco de la mano', cat: 'Ext. Superior', fonetica: '아귀손' }, // Corregido AKGUINSO a AGUISON
  { seccion: 'cuerpo', termino: 'CHUMOK', significado: 'Puño', cat: 'Ext. Superior', fonetica: '주merk' },
  { seccion: 'cuerpo', termino: 'MEO CHUMOK', significado: 'Canto del puño', cat: 'Ext. Superior', fonetica: '메주먹' }, // Corregida la propiedad errónea fonetenica a fonetica y ME a MEO
  { seccion: 'cuerpo', termino: 'SONNAL', significado: 'Canto exterior de la mano', cat: 'Ext. Superior', fonetica: '손날' }, // Corregido JAN SONNAL a SONNAL
  { seccion: 'cuerpo', termino: 'SONGARAK', significado: 'Dedos de la mano', cat: 'Ext. Superior', fonetica: '손가락' }, // Corregido SON KARAK a SONGARAK
  { seccion: 'cuerpo', termino: 'DEUNG CHUMOK', significado: 'Parte superior de los nudillos', cat: 'Ext. Superior', fonetica: '등주먹' }, // Corregido DUNG a DEUNG
  { seccion: 'cuerpo', termino: 'SIMJANG', significado: 'Corazón', cat: 'Tronco', fonetica: '심장' },
  { seccion: 'cuerpo', termino: 'MYEONGCHI', significado: 'Plexo solar', cat: 'Tronco', fonetica: '명치' }, // Corregido MYONG CHI a MYEONGCHI
  { seccion: 'cuerpo', termino: 'JEONGGANGI', significado: 'Espinilla', cat: 'Ext. Inferior', fonetica: '정강이' }, // Corregido CHONG GANG I a JEONGGANGI
  { seccion: 'cuerpo', termino: 'MUREUP', significado: 'Rodilla', cat: 'Ext. Inferior', fonetica: '무릎' }, // Corregido MURUP a MUREUP
  { seccion: 'cuerpo', termino: 'HEOBOKJI', significado: 'Muslo', cat: 'Ext. Inferior', fonetica: '허벅지' }, // Corregido HOBOK JI a HEOBOKJI
  { seccion: 'cuerpo', termino: 'BALDEUNG', significado: 'Empeine', cat: 'Ext. Inferior', fonetica: '발등' }, // Corregido BAL DUNG a BALDEUNG
  { seccion: 'cuerpo', termino: 'AP CHUK', significado: 'Metatarso del pie', cat: 'Ext. Inferior', fonetica: '앞축' },

  // ==========================================
  // SECCIÓN: ENSEÑANZA & DIRECCIONES (Con fonética nativa en Hangul)
  // ==========================================
   { seccion: 'enseñanza', termino: 'CHARYOT', significado: 'Atención / Firmes', cat: 'Comando', fonetica: '차렷' },
  { seccion: 'enseñanza', termino: 'ANNYEONGHASEYO', significado: 'Hola / ¿Cómo estás?', cat: 'Saludo', fonetica: '안녕하세요' }, // Unificado sin espacios para mejor lectura
  { seccion: 'enseñanza', termino: 'KAMSAHAMNIDA', significado: 'Gracias', cat: 'Cortesía', fonetica: '감사합니다' }, // Corregido de KAM SA HAM NI DA
  { seccion: 'enseñanza', termino: 'GYEONGNYE', significado: 'Inclinarse y/o saludo', cat: 'Comando', fonetica: '경례' }, // Corregido KYONG YE a la ortografía oficial
  { seccion: 'enseñanza', termino: 'KUKKI AE DAEHAN GYEONGNYE', significado: 'Saludo a la bandera', cat: 'Comando', fonetica: '국기에 대한 경례' }, // Ajustado gramaticalmente en coreano
  { seccion: 'enseñanza', termino: 'CHUMBI', significado: 'Preparado / Listo', cat: 'Comando', fonetica: '준비' },
  { seccion: 'enseñanza', termino: 'SIJAK', significado: 'Comenzar', cat: 'Comando', fonetica: '시작' }, // Corregido SHI SHAK a SIJAK (estándar oficial)
  { seccion: 'enseñanza', termino: 'SABOMNIM', significado: 'Profesor mayor a 3er Dan', cat: 'Roles', fonetica: '사범님' },
  { seccion: 'enseñanza', termino: 'SEONBAENIM', significado: 'Alumno avanzado', cat: 'Roles', fonetica: '선배님' }, // Corregido SONBENIM a SEONBAENIM
  { seccion: 'enseñanza', termino: 'DOBOK', significado: 'Uniforme oficial', cat: 'Equipo', fonetica: '도복' },
  { seccion: 'enseñanza', termino: 'DOJANG', significado: 'Área de entrenamiento', cat: 'Lugar', fonetica: '도장' }, // Corregido DOYANG a DOJANG (se escribe con J)
  { seccion: 'enseñanza', termino: 'GALLYEO', significado: 'Separarse', cat: 'Arbitraje', fonetica: '갈려' }, // Corregido KALYO a GALLYEO
  { seccion: 'enseñanza', termino: 'GEUMAN', significado: 'Alto / Tiempo', cat: 'Arbitraje', fonetica: '그만' }, // Corregido KOMAN a GEUMAN (palabra oficial para detenerse)
  { seccion: 'enseñanza', termino: 'KIHAP', significado: 'Grito / Exhalación de energía', cat: 'Fundamento', fonetica: '기합' },
  { seccion: 'enseñanza', termino: 'DWI', significado: 'Atrás / Hacia atrás', cat: 'Dirección', fonetica: '뒤' }, // Corregido TUIT a DWI (Atrás real)
  { seccion: 'enseñanza', termino: 'AP', significado: 'Al frente / Hacia adelante', cat: 'Dirección', fonetica: '앞' },
  { seccion: 'enseñanza', termino: 'YOP', significado: 'Lateral / De lado', cat: 'Dirección', fonetica: '옆' },
  { seccion: 'enseñanza', termino: 'WEN', significado: 'Izquierda', cat: 'Dirección', fonetica: '왼' }, // Corregido UEN a WEN
  { seccion: 'enseñanza', termino: 'OREUN', significado: 'Derecha', cat: 'Dirección', fonetica: '오른' }, // Corregido ORUN a OREUN
  { seccion: 'enseñanza', termino: 'AN', significado: 'Hacia el interior', cat: 'Dirección', fonetica: '안' },
  { seccion: 'enseñanza', termino: 'BAKKAT', significado: 'Hacia el exterior', cat: 'Dirección', fonetica: '바깥' }, // Corregido BAKAT a BAKKKAT

  // ==========================================
  // SECCIÓN: POSICIONES (Con fonética nativa en Hangul)
  // ==========================================
  { seccion: 'posiciones', termino: 'AP KUBI SEOGUI', significado: 'Posición larga con flexión hacia enfrente', cat: 'Posición', fonetica: '앞 굽이 서기' },
  { seccion: 'posiciones', termino: 'DUI KUBI SEOGUI', significado: 'Posición corta con flexión hacia atrás', cat: 'Posición', fonetica: '뒤 굽이 서기' }, // Corregido TI KUBI a DUI KUBI
  { seccion: 'posiciones', termino: 'AP SEOGUI', significado: 'Posición de paso natural', cat: 'Posición', fonetica: '앞 서기' },
  { seccion: 'posiciones', termino: 'CHUCHUM SEOGUI', significado: 'Posición ecuestre (a caballo)', cat: 'Posición', fonetica: '주춤 서기' },
  { seccion: 'posiciones', termino: 'KOA SEOGUI', significado: 'Posición con piernas cruzadas', cat: 'Posición', fonetica: '꼬아 서기' },
  { seccion: 'posiciones', termino: 'MOT SEOGUI', significado: 'Posición de guardia', cat: 'Posición', fonetica: '맞서기' },
  { seccion: 'posiciones', termino: 'BOM SEOGUI', significado: 'Posición de tigre o del acecho', cat: 'Posición', fonetica: '범 서기' },
  { seccion: 'posiciones', termino: 'NARANHI SEOGUI', significado: 'Posición paralela', cat: 'Posición', fonetica: '나란히 서기' }, // Corregido NARAN JI a NARANHI
  { seccion: 'posiciones', termino: 'MOA SEOGUI', significado: 'Posición con pies juntos', cat: 'Posición', fonetica: '모아 서기' },

  // ==========================================
  // SECCIÓN: ATAQUES (Con fonética nativa en Hangul)
  // ==========================================
  { seccion: 'ataques', termino: 'AP CHAGI', significado: 'Patada de frente', cat: 'Patada', fonetica: '앞 차기' },
  { seccion: 'ataques', termino: 'MONTONG DOLLYO CHAGI', significado: 'Patada media circular a las costillas', cat: 'Patada', fonetica: '몸통 돌려 차기' }, // Corregido DOLIO a DOLLYO para coincidir con tu estado previo
  { seccion: 'ataques', termino: 'OLGUL DOLLYO CHAGI', significado: 'Patada circular alta a la cabeza', cat: 'Patada', fonetica: '얼굴 돌려 차기' }, // Corregido OLKUL a OLGUL y DOLIO a DOLLYO
  { seccion: 'ataques', termino: 'NERYO CHAGI', significado: 'Patada descendente (de hacha)', cat: 'Patada', fonetica: '내려 차기' },
  { seccion: 'ataques', termino: 'TUI CHAGI', significado: 'Patada hacia atrás recta de giro', cat: 'Patada', fonetica: '뒤 차기' },
  { seccion: 'ataques', termino: 'YOP CHAGI', significado: 'Patada de lado (lateral con talón)', cat: 'Patada', fonetica: '옆 차기' },
  { seccion: 'ataques', termino: 'MIRO CHAGI', significado: 'Patada de empuje', cat: 'Patada', fonetica: '밀어 차기' },
  { seccion: 'ataques', termino: 'BANDAE JIRUGI', significado: 'Puñetazo (Misma mano, misma pierna adelantada)', cat: 'Puño', fonetica: '반대 지르기' },
  { seccion: 'ataques', termino: 'BARO JIRUGI', significado: 'Puñetazo (Mano y pierna adelantada contrarias)', cat: 'Puño', fonetica: '바로 지르기' },
  { seccion: 'ataques', termino: 'OLGUL JIRUGI', significado: 'Puño directo hacia la parte alta del cuerpo', cat: 'Puño', fonetica: '얼굴 지르기' },
  { seccion: 'ataques', termino: 'ARE JIRUGI', significado: 'Puño directo hacia la parte baja del cuerpo', cat: 'Puño', fonetica: '아래 지르기' },
  { seccion: 'ataques', termino: 'MURUP CHIGI', significado: 'Rodillazo directo', cat: 'Rodilla', fonetica: '무릎 치기' },
  { seccion: 'ataques', termino: 'PALKUP DOLLYO CHIGI', significado: 'Golpe circular con el codo', cat: 'Codo', fonetica: '팔꿈치 돌려 치기' }, // Corregido DOLIO a DOLLYO
  // ==========================================
  // SECCIÓN: DEFENSAS (Con fonética nativa en Hangul incorporada)
  // ==========================================
  { seccion: 'defensas', termino: 'ARAE MAKKI', significado: 'Defensa baja (protección del bajo vientre)', cat: 'Bloqueo', fonetica: '아래 막기' }, // Corregido a ARAE
  { seccion: 'defensas', termino: 'MONTONG MAKKI', significado: 'Defensa media (protección del pecho/tronco)', cat: 'Bloqueo', fonetica: '몸통 막기' },
  { seccion: 'defensas', termino: 'OLGUL MAKKI', significado: 'Defensa alta (protección del rostro y cabeza)', cat: 'Bloqueo', fonetica: '얼굴 막기' },
  { seccion: 'defensas', termino: 'MONTONG BAKKAT MAKKI', significado: 'Defensa media exterior lateral', cat: 'Bloqueo', fonetica: '몸통 바깥 막기' }, // Corregido BAKAT a BAKKAT
  { seccion: 'defensas', termino: 'SONNAL MONTONG MAKKI', significado: 'Defensa media lateral con las dos manos abiertas', cat: 'Bloqueo', fonetica: '손날 몸통 막기' },
  { seccion: 'defensas', termino: 'EOTGEOREO ARAE MAKKI', significado: 'Defensa baja cruzada (en X)', cat: 'Bloqueo', fonetica: '엇걸어 아래 막기' }, // Corregido OKORO a EOTGEOREO y ARE a ARAE
  { seccion: 'defensas', termino: 'EOTGEOREO OLGUL MAKKI', significado: 'Defensa alta cruzada (en X)', cat: 'Bloqueo', fonetica: '엇걸어 얼굴 막기' }, // Corregido OKORO a EOTGEOREO
  { seccion: 'defensas', termino: 'KAWI MAKKI', significado: 'Defensa con los dos brazos en forma de tijera', cat: 'Bloqueo', fonetica: '가위 막기' },
  { seccion: 'defensas', termino: 'SANTUL MAKKI', significado: 'Doble defensa alta exterior en posición ecuestre', cat: 'Bloqueo', fonetica: '산틀 막기' },

  // ==========================================
  // SECCIÓN: NÚMEROS (Con fonética nativa en Hangul incorporada)
  // ==========================================
  { seccion: 'numeros', termino: 'HANA', significado: 'Número 1 (Conteo cardinal)', cat: 'Cardinal', fonetica: '하나' },
  { seccion: 'numeros', termino: 'DUL', significado: 'Número 2 (Conteo cardinal)', cat: 'Cardinal', fonetica: '둘' },
  { seccion: 'numeros', termino: 'SET', significado: 'Número 3 (Conteo cardinal)', cat: 'Cardinal', fonetica: '셋' },
  { seccion: 'numeros', termino: 'NET', significado: 'Número 4 (Conteo cardinal)', cat: 'Cardinal', fonetica: '넷' },
  { seccion: 'numeros', termino: 'DASOT', significado: 'Número 5 (Conteo cardinal)', cat: 'Cardinal', fonetica: '다섯' },
  { seccion: 'numeros', termino: 'YOSOT', significado: 'Número 6 (Conteo cardinal)', cat: 'Cardinal', fonetica: '여섯' },
  { seccion: 'numeros', termino: 'ILGOP', significado: 'Número 7 (Conteo cardinal)', cat: 'Cardinal', fonetica: '일곱' }, // Corregido ILGOB a ILGOP para mantener consistencia
  { seccion: 'numeros', termino: 'YODOL', significado: 'Número 8 (Conteo cardinal)', cat: 'Cardinal', fonetica: '여덟' },
  { seccion: 'numeros', termino: 'AHOP', significado: 'Número 9 (Conteo cardinal)', cat: 'Cardinal', fonetica: '아홉' }, // Corregido AHOUB a AHOP acorde a tus tarjetas visuales
  { seccion: 'numeros', termino: 'YOL', significado: 'Número 10 (Conteo cardinal)', cat: 'Cardinal', fonetica: '열' },
  { seccion: 'numeros', termino: 'IL', significado: 'Primero (1º - Conteo ordinal)', cat: 'Ordinal', fonetica: '첫번째' }, // Optimizado de '일' a '첫번째' (Primero real) para evitar cortes de audio
  { seccion: 'numeros', termino: 'I', significado: 'Segundo (2º - Conteo ordinal)', cat: 'Ordinal', fonetica: '두번째' }, // Optimizado a '두번째' (Segundo real) para correcta lectura ordinal
  { seccion: 'numeros', termino: 'SAM', significado: 'Tercero (3º - Conteo ordinal)', cat: 'Ordinal', fonetica: '세번째' }, // Optimizado a '세번째' (Tercero real)
  { seccion: 'numeros', termino: 'SA', significado: 'Cuarto (4º - Conteo ordinal)', cat: 'Ordinal', fonetica: '네번째' }   // Optimizado a '네번째' (Cuarto real)
];

const VocabularioPage = () => {
  const [seccionActiva, setSeccionActiva] = useState('cuerpo');
  const [busqueda, setBusqueda] = useState('');

  // DECLARACIÓN ÚNICA: Filtra por pestaña y texto de búsqueda simultáneamente
  const terminosFiltrados = VOCABULARY.filter(item => {
    const coincidePestaña = item.seccion === seccionActiva;
    const coincideTexto = 
      item.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.significado.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincidePestaña && coincideTexto;
  });

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
    <div className="min-h-screen bg-[#020617] text-white px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado con Título Forzado en una Sola Línea */}
<header className="text-center mb-10 md:mb-16 px-4 w-full max-w-7xl mx-auto block mt-32 md:mt-10">
  <span className="inline-block text-red-500 text-[10px] md:text-xs font-black tracking-widest uppercase bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-full">
    ENCICLOPEDIA DE ENTRENAMIENTO
  </span>
  
  {/* Se añade la clase 'whitespace-nowrap' en el bloque de texto para asegurar la línea única */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider mt-5 md:mt-6 uppercase leading-tight text-white flex flex-wrap justify-center items-center gap-y-2 lg:whitespace-nowrap">
    VOCABULARIO 
    <span className="bg-yellow-500 text-black px-3 py-0.5 md:py-1 rounded mx-2 inline-block font-sans">
      OFICIAL
    </span> 
    TAE KWON DO
  </h1>
  
  <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto mt-4 md:mt-6 font-medium leading-relaxed balance">
    Estudia la terminología completa exigida por el programa oficial. Haz clic en las tarjetas para activar la pronunciación nativa.
  </p>
</header>

        {/* Buscador de Texto Interactivo */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            🔍
          </div>
          <input
            type="text"
            placeholder="Buscar término o significado..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-[#0b111e] border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors"
          />
          {busqueda && (
            <button 
              onClick={() => setBusqueda('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 text-xs"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Menú de Pestañas Superiores */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {[
            { id: 'cuerpo', label: 'Cuerpo' },
            { id: 'enseñanza', label: 'Comandos & Común' },
            { id: 'posiciones', label: 'Posiciones (Seogui)' },
            { id: 'ataques', label: 'Ataques & Patadas' },
            { id: 'defensas', label: 'Defensas (Maki)' },
            { id: 'numeros', label: 'Números' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSeccionActiva(tab.id);
                setBusqueda(''); 
              }}
              className={`px-5 py-2.5 rounded font-black text-xs uppercase tracking-wider transition-all duration-250 ${
                seccionActiva === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 scale-105'
                  : 'bg-[#0f172a] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rejilla de Tarjetas Dinámicas */}
        {terminosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {terminosFiltrados.map((item, index) => {
              const color = CATEGORY_COLORS[item.cat] || 'slate';
              
              return (
                <div
                  key={index}
                  onClick={() => reproducirVoz(item)}
                  className="bg-[#0b111e] border border-slate-900 rounded-lg p-6 hover:border-red-600/50 transition-all flex flex-col justify-between h-32 relative group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-sans font-black text-base text-slate-100 tracking-wider uppercase group-hover:text-red-500 transition-colors duration-200">
                      {item.termino}
                    </h3>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded tracking-wide border uppercase whitespace-nowrap bg-${color}-950/40 text-${color}-400 border-${color}-900/30`}>
                      {item.cat}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-between items-end">
                    <p className="text-slate-400 text-sm font-medium tracking-wide">
                      {item.significado}
                    </p>
                    <span className="text-slate-700 text-xs group-hover:text-red-500/50 transition-colors duration-200 select-none">
                      🔊
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm font-medium">
            No se encontraron términos que coincidan con tu búsqueda en esta sección.
          </div>
        )}

      </div>
    </div>
  );
};

export default VocabularioPage;