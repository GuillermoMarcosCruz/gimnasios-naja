import React, { useState } from 'react';

// Diccionario de colores de interfaz estilo Dashboard para etiquetas de Muay Thai
const CATEGORY_COLORS = {
  'Cabeza': 'purple', 'Tronco': 'indigo', 'Ext. Superior': 'blue', 'Ext. Inferior': 'teal',
  'Punto Vital': 'rose', 'Protección': 'cyan', 'Ritual': 'orange', 'Roles': 'amber',
  'Entorno': 'cyan', 'Saludo': 'orange', 'Cortesía': 'amber', 'Instrucción': 'emerald',
  'Combate': 'sky', 'Grado': 'red', 'Básico': 'slate', 'Decena': 'indigo', 'Centena': 'amber',
  'Puño': 'sky', 'Codo': 'orange', 'Patada': 'red', 'Rodilla': 'amber'
};

// Base de datos de Muay Thai unificada con fonética nativa en alfabeto tailandés
const VOCABULARY = [
  // ==========================================
  // SECCIÓN: CUERPO
  // ==========================================
  { seccion: 'cuerpo', termino: 'MAD', significado: 'Mano / Puño', cat: 'Ext. Superior', fonetica: 'หมัด' },
  { seccion: 'cuerpo', termino: 'KHAN', significado: 'Brazos', cat: 'Ext. Superior', fonetica: 'แขน' },
  { seccion: 'cuerpo', termino: 'KHAA', significado: 'Pierna', cat: 'Ext. Inferior', fonetica: 'ขา' },
  { seccion: 'cuerpo', termino: 'NHA', significado: 'Cara', cat: 'Cabeza', fonetica: 'หน้า' },
  { seccion: 'cuerpo', termino: 'DTHA', significado: 'Ojos', cat: 'Cabeza', fonetica: 'ตา' },
  { seccion: 'cuerpo', termino: 'CROM', significado: 'Costilla', cat: 'Tronco', fonetica: 'ซี่โครง' },
  { seccion: 'cuerpo', termino: 'NHA KAENG', significado: 'Espinilla', cat: 'Ext. Inferior', fonetica: 'หน้าแข้ง' },
  { seccion: 'cuerpo', termino: 'HUA', significado: 'Cabeza', cat: 'Cabeza', fonetica: 'หัว' },
  { seccion: 'cuerpo', termino: 'NA PAAG', significado: 'Frente', cat: 'Cabeza', fonetica: 'หน้าผาก' },
  { seccion: 'cuerpo', termino: 'HUAJAI', significado: 'Corazón', cat: 'Tronco', fonetica: 'หัวใจ' },
  { seccion: 'cuerpo', termino: 'GRAMMOM SRISA', significado: 'Parte superior de la cabeza', cat: 'Punto Vital', fonetica: 'กระหม่อมศีรษะ' },
  { seccion: 'cuerpo', termino: 'BAAK', significado: 'Boca', cat: 'Cabeza', fonetica: 'ปาก' },
  { seccion: 'cuerpo', termino: 'CHAIKRONG', significado: 'Costillas flotantes', cat: 'Tronco', fonetica: 'ชายโครง' },
  { seccion: 'cuerpo', termino: 'DAIHUACHAI', significado: 'Región debajo del corazón', cat: 'Punto Vital', fonetica: 'ใต้หัวใจ' },
  { seccion: 'cuerpo', termino: 'DTAI', significado: 'Riñones', cat: 'Punto Vital', fonetica: 'ไต' },
  { seccion: 'cuerpo', termino: 'AENKEN', significado: 'Tobillera protectora', cat: 'Protección', fonetica: 'แองเกิล' },
  { seccion: 'cuerpo', termino: 'JAMOOK', significado: 'Nariz', cat: 'Cabeza', fonetica: 'จมูก' },
  { seccion: 'cuerpo', termino: 'KAEN', significado: 'Brazo', cat: 'Ext. Superior', fonetica: 'แขน' },
  { seccion: 'cuerpo', termino: 'KAGANGAI', significado: 'Quijada', cat: 'Punto Vital', fonetica: 'ขากรรไกร' },
  { seccion: 'cuerpo', termino: 'KAO', significado: 'Rodilla', cat: 'Ext. Inferior', fonetica: 'เข่า' },
  { seccion: 'cuerpo', termino: 'LANG TAO', significado: 'Empeine', cat: 'Ext. Inferior', fonetica: 'หลังเท้า' },
  { seccion: 'cuerpo', termino: 'LIMPEE', significado: 'Plexo solar', cat: 'Punto Vital', fonetica: 'ลิ้นปี่' },
  { seccion: 'cuerpo', termino: 'LUK KANG', significado: 'Barbilla', cat: 'Punto Vital', fonetica: 'ลูกคาง' },
  { seccion: 'cuerpo', termino: 'TAITOI', significado: 'Nuca', cat: 'Punto Vital', fonetica: 'ท้ายทอย' },
  { seccion: 'cuerpo', termino: 'TAO', significado: 'Pie', cat: 'Ext. Inferior', fonetica: 'เท้า' },
  { seccion: 'cuerpo', termino: 'TONG', significado: 'Estómago', cat: 'Tronco', fonetica: 'ท้อง' },
  { seccion: 'cuerpo', termino: 'TONG NOI', significado: 'Estómago inferior', cat: 'Punto Vital', fonetica: 'ท้องน้อย' },

  // ==========================================
  // SECCIÓN: ENSEÑANZA & COMANDOS
  // ==========================================
  { seccion: 'enseñanza', termino: 'DONTREE MUAY', significado: 'Música de combate', cat: 'Ritual', fonetica: 'ดนตรีมวย' },
  { seccion: 'enseñanza', termino: 'GAMAGAN', significado: 'Árbitro', cat: 'Roles', fonetica: 'กรรมการ' },
  { seccion: 'enseñanza', termino: 'KAI MUAY', significado: 'Campamento de boxeo', cat: 'Entorno', fonetica: 'ค่ายมวย' },
  { seccion: 'enseñanza', termino: 'KRU MUAY', significado: 'Profesor de boxeo / Maestro', cat: 'Roles', fonetica: 'ครูมวย' },
  { seccion: 'enseñanza', termino: 'MONGKON', significado: 'Banda sagrada para la cabeza', cat: 'Ritual', fonetica: 'มงคล' },
  { seccion: 'enseñanza', termino: 'NAK MUAY', significado: 'Boxeador de Muay Thai', cat: 'Roles', fonetica: 'นักมวย' },
  { seccion: 'enseñanza', termino: 'FARANG', significado: 'Peleador extranjero', cat: 'Roles', fonetica: 'ฝรั่ง' },
  { seccion: 'enseñanza', termino: 'RAM MUAY', significado: 'Danza ritual de combate', cat: 'Ritual', fonetica: 'รำมวย' },
  { seccion: 'enseñanza', termino: 'WAI KRU', significado: 'Obediencia al maestro', cat: 'Ritual', fonetica: 'ไหว้ครู' },
  { seccion: 'enseñanza', termino: 'SANAM MUAY', significado: 'Estadio de boxeo', cat: 'Entorno', fonetica: 'สนามมวย' },
  { seccion: 'enseñanza', termino: 'WEHTEE', significado: 'El ring / Escenario', cat: 'Entorno', fonetica: 'เวที' },
  { seccion: 'enseñanza', termino: 'AO JAI SAI', significado: 'Poner atención', cat: 'Instrucción', fonetica: 'เอาใจใส่' },
  { seccion: 'enseñanza', termino: 'KAU TEU LIANG', significado: 'Formarse (en línea)', cat: 'Instrucción', fonetica: 'เข้าแถวเรียง' },
  { seccion: 'enseñanza', termino: 'KAU TEU TON', significado: 'Formarse (en fila)', cat: 'Instrucción', fonetica: 'เข้าแถวตอน' },
  { seccion: 'enseñanza', termino: 'SAMATHI', significado: 'Meditación', cat: 'Instrucción', fonetica: 'สมาธิ' },
  { seccion: 'enseñanza', termino: 'JUD', significado: 'Alto / Detenerse', cat: 'Instrucción', fonetica: 'หยุด' },
  { seccion: 'enseñanza', termino: 'SAABADHIE KHAP', significado: 'Cómo está (hombre)', cat: 'Saludo', fonetica: 'สวัสดีครับ' },
  { seccion: 'enseñanza', termino: 'SAABADHIE KHA', significado: 'Cómo está (mujer)', cat: 'Saludo', fonetica: 'สวัสดีค่ะ' },
  { seccion: 'enseñanza', termino: 'KORB KUM KHAP', significado: 'Gracias', cat: 'Cortesía', fonetica: 'ขอบคุณครับ' },
  { seccion: 'enseñanza', termino: 'LHA KHON KHAP', significado: 'Adiós', cat: 'Cortesía', fonetica: 'ลาก่อนครับ' },
  { seccion: 'enseñanza', termino: 'LEO LEO', significado: 'Rápido', cat: 'Instrucción', fonetica: 'เร็วๆ' },
  { seccion: 'enseñanza', termino: 'CHA KWA NEE', significado: 'Despacio', cat: 'Instrucción', fonetica: 'ช้ากว่านี้' },

  // ==========================================
  // SECCIÓN: POSICIONES
  // ==========================================
  { seccion: 'posiciones', termino: 'TRIAM TUA', significado: 'Guardia de pelea', cat: 'Guardia', fonetica: 'เตรียมตัว' },
  { seccion: 'posiciones', termino: 'KUMG CHUNG', significado: 'Postura de combate', cat: 'Guardia', fonetica: 'คุมเชิง' },
  { seccion: 'posiciones', termino: 'JOD NAH', significado: 'Guardia frontal', cat: 'Guardia', fonetica: 'จดหน้า' },
  { seccion: 'posiciones', termino: 'JOD BAHNG', significado: 'Guardia lateral', cat: 'Guardia', fonetica: 'จดบาง' },
  { seccion: 'posiciones', termino: 'PLIK', significado: 'Cambio de pierna', cat: 'Guardia', fonetica: 'พลิก' },
  { seccion: 'posiciones', termino: 'SHAI', significado: 'Cambio rápido', cat: 'Guardia', fonetica: 'สลับ' },
  { seccion: 'posiciones', termino: 'DUHN NHA', significado: 'Avanzar / Moverse adelante', cat: 'Guardia', fonetica: 'เดินหน้า' },
  { seccion: 'posiciones', termino: 'VIANG KWAI', significado: 'Cabeceo elusivo en U', cat: 'Guardia', fonetica: 'เวียงควาย' },

  // ==========================================
  // SECCIÓN: ATAQUES
  // ==========================================
  { seccion: 'attacks', termino: 'MAHD TDRONG', significado: 'Golpe recto de puño', cat: 'Puño', fonetica: 'หมัดตรง' },
  { seccion: 'ataques', termino: 'YAB', significado: 'Jab rápido de boxeo', cat: 'Puño', fonetica: 'แย็บ' },
  { seccion: 'ataques', termino: 'MAHD THOY TONG', significado: 'Puño al estómago', cat: 'Puño', fonetica: 'หมัดต่อยท้อง' },
  { seccion: 'ataques', termino: 'MAHD KLAB', significado: 'Puño girando por detrás', cat: 'Puño', fonetica: 'หมัดกลับ' },
  { seccion: 'ataques', termino: 'ZOCK DTHEE', significado: 'Codo cortando transversal hacia abajo', cat: 'Codo', fonetica: 'ศอกตี' },
  { seccion: 'ataques', termino: 'ZOCK DTAHD', significado: 'Codo horizontal plano', cat: 'Codo', fonetica: 'ศอกตัด' },
  { seccion: 'ataques', termino: 'ZOCK NGAHD', significado: 'Codo vertical hacia arriba', cat: 'Codo', fonetica: 'ศอกงัด' },
  { seccion: 'ataques', termino: 'ZOCK KLAP', significado: 'Codo de giro', cat: 'Codo', fonetica: 'ศอกกลับ' },
  { seccion: 'ataques', termino: 'KHAO TRONG', significado: 'Golpe de rodilla de frente', cat: 'Rodilla', fonetica: 'เข่าตรง' },
  { seccion: 'ataques', termino: 'KHAO LOI', significado: 'Rodilla voladora a la cara', cat: 'Rodilla', fonetica: 'เข่าลอย' },
  { seccion: 'ataques', termino: 'HAKINWAG', significado: 'Patada baja (Low Kick)', cat: 'Patada', fonetica: 'เตะขา' },
  { seccion: 'ataques', termino: 'DTHEB SHIANG', significado: 'Patada circular a las costillas', cat: 'Patada', fonetica: 'เตะเฉียง' },
  { seccion: 'ataques', termino: 'TEEP DRONG', significado: 'Empujón directo de pie', cat: 'Patada', fonetica: 'ถีบตรง' },
  { seccion: 'ataques', termino: 'KRADOT DTAE', significado: 'Patada con salto', cat: 'Patada', fonetica: 'กระโดดเตะ' },
   // ==========================================
  // SECCIÓN: DEFENSAS
  // ==========================================
  { seccion: 'defensas', termino: 'BAT', significado: 'Bloqueo con antebrazos o manos', cat: 'Combate', fonetica: 'ปัด' },
  { seccion: 'defensas', termino: 'PIT', significado: 'Bloqueo cerrado con codos', cat: 'Combate', fonetica: 'ปิด' },
  { seccion: 'defensas', termino: 'DJAB KO', significado: 'Agarre al cuello (Clinch)', cat: 'Combate', fonetica: 'จับคอ' },
  { seccion: 'defensas', termino: 'DJAB KHAA', significado: 'Agarre a la pierna', cat: 'Combate', fonetica: 'จับขา' },
  { seccion: 'defensas', termino: 'MUAY PLAN', significado: 'Clinchar para tumbar', cat: 'Combate', fonetica: 'มวยปล้ำ' },
  { seccion: 'defensas', termino: 'WIENG TIING PAI', significado: 'Proyección lateral', cat: 'Combate', fonetica: 'เหวี่ยงทิ้งไป' },
  { seccion: 'defensas', termino: 'LOP', significado: 'Agacharse', cat: 'Combate', fonetica: 'หลบ' },
  { seccion: 'defensas', termino: 'PANG NGA', significado: 'Esquivar, evadir', cat: 'Combate', fonetica: 'บังหน้า' },
  { seccion: 'defensas', termino: 'YAEK BREAK', significado: 'Separar peleadores (Árbitro)', cat: 'Combate', fonetica: 'แยก' },

  // ==========================================
  // SECCIÓN: NÚMEROS
  // ==========================================
  { seccion: 'numeros', termino: 'NEUNG', significado: 'Número 1', cat: 'Básico', fonetica: 'หนึ่ง' },
  { seccion: 'numeros', termino: 'SONG', significado: 'Número 2', cat: 'Básico', fonetica: 'สอง' },
  { seccion: 'numeros', termino: 'SAM', significado: 'Número 3', cat: 'Básico', fonetica: 'สาม' },
  { seccion: 'numeros', termino: 'SIEE', significado: 'Número 4', cat: 'Básico', fonetica: 'สี่' },
  { seccion: 'numeros', termino: 'HA', significado: 'Número 5', cat: 'Básico', fonetica: 'ห้า' },
  { seccion: 'numeros', termino: 'HOK', significado: 'Número 6', cat: 'Básico', fonetica: 'หก' },
  { seccion: 'numeros', termino: 'JIET', significado: 'Número 7', cat: 'Básico', fonetica: 'เจ็ด' },
  { seccion: 'numeros', termino: 'BAET', significado: 'Número 8', cat: 'Básico', fonetica: 'แปด' },
  { seccion: 'numeros', termino: 'GHAO', significado: 'Número 9', cat: 'Básico', fonetica: 'เก้า' },
  { seccion: 'numeros', termino: 'SIP', significado: 'Número 10', cat: 'Básico', fonetica: 'สิบ' },
  { seccion: 'numeros', termino: 'YI SIB', significado: 'Número 20', cat: 'Decena', fonetica: 'ยี่สิบ' },
  { seccion: 'numeros', termino: 'NUNG ROY', significado: 'Número 100', cat: 'Centena', fonetica: 'หนึ่งร้อย' },

  // ==========================================
  // SECCIÓN: JURAMENTO (Decretos oficiales del documento)
  // ==========================================
  { seccion: 'juramento', termino: 'DECRETO 1', significado: 'Ser respetuoso conmigo mismo, tener fortaleza de espíritu y comportarme honradamente.', cat: 'Juramento', fonetica: 'คำปฏิญาณข้อที่หนึ่ง' },
  { seccion: 'juramento', termino: 'DECRETO 2', significado: 'Ayudar al prójimo en cualquier ocasión que se presente y jamás abusar de los débiles.', cat: 'Juramento', fonetica: 'คำปฏิญาณข้อที่สอง' },
  { seccion: 'juramento', termino: 'DECRETO 3', significado: 'Ser leal con la nación y hacer siempre buenas acciones.', cat: 'Juramento', fonetica: 'คำปฏิญาณข้อที่สาม' },
  { seccion: 'juramento', termino: 'DECRETO 4', significado: 'Evitar comportamientos indignos.', cat: 'Juramento', fonetica: 'คำปฏิญาณข้อที่สี่' }
];

const VocabularioPage = () => {
  const [seccionActiva, setSeccionActiva] = useState('cuerpo');
  const [busqueda, setBusqueda] = useState('');

  // Filtrado reactivo optimizado (Pestaña + Texto)
  const terminosFiltrados = VOCABULARY.filter(item => {
    const coincidePestaña = item.seccion === seccionActiva;
    const coincideTexto = 
      item.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.significado.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincidePestaña && coincideTexto;
  });

  const reproducirVoz = (item) => {
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
    <div className="min-h-screen bg-[#020617] text-white px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado Responsivo Corregido - Estilo Oficial Naja */}
{/* Encabezado Responsivo con Espaciado Seguro */}
    {/* Encabezado con Espacio de Seguridad Ampliado para Menús Fijos */}
<header className="text-center mb-10 md:mb-8 px-2 w-full max-w-5xl mx-auto block mt-12 md:mt-10">
  <span className="inline-block text-red-500 text-[10px] md:text-xs font-black tracking-widest uppercase bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-full">
    ENCICLOPEDIA DE ENTRENAMIENTO
  </span>
  
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wider mt-5 md:mt-6 uppercase leading-tight text-white flex flex-wrap justify-center items-center gap-y-2">
    VOCABULARIO 
    <span className="bg-yellow-500 text-black px-3 py-0.5 md:py-1 rounded mx-2 inline-block font-sans">
      OFICIAL
    </span> 
    MUAY THAI
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
            { id: 'posiciones', label: 'Posiciones (Guardia)' },
            { id: 'ataques', label: 'Ataques & Patadas' },
            { id: 'defensas', label: 'Defensas' },
            { id: 'numeros', label: 'Números' },
            { id: 'juramento', label: 'Juramento' }
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