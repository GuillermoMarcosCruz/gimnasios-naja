import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaTiktok } from "react-icons/fa6";
import sayer1 from '../../img/patrocinadores/sayer1.png';
import sayer from '../../img/patrocinadores/sayer.png';
// IMPORTA AQUÍ TU IMAGEN DE FONDO SI ES LOCAL:
import fondoHero from '../../img/fondo.jpeg';

const Home = () => {
   const items = [
      <div className="item" data-value="1"><img src={sayer1} style={{width: "150px"}}/></div>,
      <div className="item" data-value="2"><img src={sayer} style={{width: "150px"}}/></div>,
   ];

   return (
      <>
         {/* SECCIÓN HERO: Ahora incluye la imagen de fondo con Opción A */}
         {/* 2. REEMPLAZA EL CONTENEDOR HERO POR ESTE: */}
<div 
   className="relative min-h-[85vh] md:min-h-[75vh] flex items-center justify-center text-center px-4 md:px-6 pt-24 pb-12 overflow-hidden bg-cover bg-center md:bg-center bg-no-repeat animar-fondo-movil"
   style={{ backgroundImage: `url(${fondoHero})` }} // <--- Inyección correcta de la imagen local
>
   {/* Capas oscuras para proteger la lectura del texto durante el movimiento */}
   <div className="absolute inset-0 bg-slate-950/40 md:bg-slate-950/40 z-0"></div>
   <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950 z-0"></div>
   
   {/* Gradiente de luces rojas */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2)_0%,transparent_70%)] z-0"></div>

   {/* El texto se mantiene al frente gracias al z-10 */}
   <div className="relative max-w-4xl mx-auto space-y-6 z-10">
      <span className="text-red-500 font-black tracking-widest text-xs uppercase bg-red-950/60 px-3 py-1.5 rounded-full border border-red-500/20 inline-block backdrop-blur-sm">
         Bienvenidos a Institutos Naja
      </span>
      {/* Sombra fuerte añadida al H1 */}
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
         FORJA TU CUERPO, <br />
         <span className="text-yellow-500">DOMINA TU MENTE</span>
      </h1>
      {/* Sombra fuerte añadida al P */}
      <p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
         Las artes marciales ayudan a las personas a mejorar su disciplina, confianza y autocontrol. Más allá de la defensa personal, promovemos un equilibrio integral que se refleja en tu vida diaria.
      </p>
      <div className="pt-4">
         <a href="/contacto" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-md transition-all duration-200 uppercase shadow-lg shadow-black/50 inline-block">
            Clase de Prueba Gratis
         </a>
      </div>
   </div>
</div>

         {/* SECCIÓN: MISIÓN, VISIÓN Y VALORES */}
         <section className="bg-slate-900 py-20 px-6 border-y border-slate-800">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* TARJETA: MISIÓN */}
                  <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl shadow-xl flex flex-col justify-between hover:border-red-500/30 transition-all duration-300 group">
                     <div className="space-y-4">
                        <div className="w-12 h-12 bg-red-950/40 rounded-lg flex items-center justify-center border border-red-500/20 text-red-500 font-bold group-hover:bg-red-600 group-hover:text-white transition-all duration-300">M</div>
                        <h3 className="text-xl font-extrabold text-white">Nuestra Misión</h3>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                           Formar personas íntegras a través de la práctica de las artes marciales, promoviendo la disciplina, el respeto y la autoconfianza, mientras se desarrollan habilidades físicas, mentales y emocionales.
                        </p>
                     </div>
                  </div>

                  {/* TARJETA: VISIÓN */}
                  <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl shadow-xl flex flex-col justify-between hover:border-yellow-500/30 transition-all duration-300 group">
                     <div className="space-y-4">
                        <div className="w-12 h-12 bg-yellow-950/40 rounded-lg flex items-center justify-center border border-yellow-500/20 text-yellow-500 font-bold group-hover:bg-yellow-500 group-hover:text-slate-950 transition-all duration-300">V</div>
                        <h3 className="text-xl font-extrabold text-white">Nuestra Visión</h3>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                           Ser una escuela reconocida por la excelencia en la enseñanza de las artes marciales, destacando como un espacio que inspira superación personal, fomenta la cultura del esfuerzo y transmite valores universales.
                        </p>
                     </div>
                  </div>

                  {/* TARJETA: VALORES */}
                  <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl shadow-xl hover:border-red-500/30 transition-all duration-300">
                     <div className="space-y-4">
                        <div className="w-12 h-12 bg-red-950/40 rounded-lg flex items-center justify-center border border-red-500/20 text-red-500 font-bold">✓</div>
                        <h3 className="text-xl font-extrabold text-white">Nuestros Valores</h3>
                        <ul className="space-y-2 text-xs text-slate-400 font-medium max-h-45 overflow-y-auto pr-2 custom-scrollbar">
                           <li><strong className="text-slate-200">Disciplina:</strong> Constancia y compromiso en la vida diaria.</li>
                           <li><strong className="text-slate-200">Respeto:</strong> Hacia maestros, compañeros y uno mismo.</li>
                           <li><strong className="text-slate-200">Humildad:</strong> Actitud de aprendizaje continuo.</li>
                           <li><strong className="text-slate-200">Perseverancia:</strong> Afrontar retos sin rendirse.</li>
                           <li><strong className="text-slate-200">Autocontrol:</strong> Manejo inteligente de las emociones.</li>
                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECCIÓN: PATROCINADORES CON MOVIMIENTO AUTOMÁTICO */}
         <section className="bg-slate-950 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
               <h4 className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                  Respaldado por marcas líderes
               </h4>
               
               <div className="w-full opacity-60 hover:opacity-90 transition-opacity duration-300">
                  <AliceCarousel
                     mouseTracking
                     infinite
                     autoPlay
                     autoPlayInterval={0}
                     animationDuration={3000}
                     animationType="linear"
                     disableDotsControls
                     disableButtonsControls
                     responsive={{
                        0: { items: 2 },
                        640: { items: 3 },
                        1024: { items: 4 }
                     }}
                     items={[
                        <div className="px-4">
                           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 h-20">
                              <img src={sayer1} alt="Sayer 1" className="h-10 object-contain" />
                           </div>
                        </div>,
                        <div className="px-4">
                           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 h-20">
                              <img src={sayer} alt="Sayer" className="h-10 object-contain" />
                           </div>
                        </div>,
                        // Tip: Duplica los elementos en el array si tienes pocos logos para que el loop infinito no se corte de golpe
                        <div className="px-4">
                           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 h-20">
                              <img src={sayer1} alt="Sayer 1 Repetido" className="h-10 object-contain" />
                           </div>
                        </div>,
                        <div className="px-4">
                           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 h-20">
                              <img src={sayer} alt="Sayer Repetido" className="h-10 object-contain" />
                           </div>
                        </div>
                     ]}
                  />
               </div>
            </div>
         </section>
      </>
   );
}

export default Home;