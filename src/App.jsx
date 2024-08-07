import { useEffect, useState } from 'react'
import './App.css'

import logo from "../src/IMGS/NC.1.png"
import fondo1 from "../src/IMGS/fondo 3.jpg"
import lateral from "../src/IMGS/lateral 2.jpg"
import img1 from "../src/IMGS/flores.png"
import img2 from "../src/IMGS/HYDRA.png"
import img3 from "../src/IMGS/metaverse.png"
import img4 from "../src/IMGS/spotify.png"
import Correos from './componte/correo'



function App() {


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Select elements to be observed
    const elements = document.querySelectorAll('.fonTexto, .logo');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);


 




  return (

    <div className='padre'>
      <div className="menu fonTexto w-full h-[10vh] backdrop-blur-sm bg-black/30 flex justify-around items-center fixed z-20">
        <div className='border-2 w-fit cursor-default'>
          <p className='text-white FontNeycar font-bold textResponsi3 px-3 py-2'><span className='bg-white text-black px-1 py-0'>NEYCAR</span> STUDIOS</p>
        </div>
        <ul className='flex items-center gap-7 capitalize text-gray-400 font-medium '>
          <li className='hover:text-white cursor-pointer duration-200 opciones'><a href="#Quienes-Somos?">quienes somos?</a></li>
          <li className='hover:text-white cursor-pointer duration-200 opciones'><a href="#Nuestros-Servicios">nuestros servicios</a></li>
          <li className='hover:text-white cursor-pointer duration-200 opciones'><a href="#Portafolio">portafolio</a></li>
          <li className='hover:text-white cursor-pointer duration-200 opciones'>Conoce Mi Equipo</li>
          <li className='flex gap-3 font-medium border-2 px-4 py-2 rounded-full text-white cursor-pointer duration-200'><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="#ffffff" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81" /></svg></span><button className='textResponsi1'>Contactanos</button></li>
        </ul>
      </div>
      {/* seccion 1 */}
      <seccion className='seccion1 cursor-default '>
        <div className='relative flex justify-center items-center bg-black/90'>
          <img className='opacity-30 fondoPrincipal w-full fondoprin' src={fondo1} alt="fondoPrincipal" />
          <div className='absolute posic'>
            <div className='flex flex-col items-center text-white'>
              <p className='text-center textResponsi font-bold fonTexto'>
                Impulsando a la Innovación <br /> Digital en la Web
              </p>
              <p className='mt-8 textResponsi1 font-medium fonTexto'>
                Da un paso hacia el futuro integrando tu negocion sin problemas al mundo digital
              </p>

              <div className='flex items-center  mt-10 cont1 fonTexto'>
                <a href="#Quienes-Somos?">
                  <button className='flex  whitespace-nowrap bg-emerald-800 hover:bg-emerald-500 hover:shadow-md hover:shadow-emerald-300/50 px-8 py-4 duration-100 rounded-xl font-bold text-lg'>
                    Dar el primer paso
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
                      <path fill="#ffffff" d="m208.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L140 195v-67a84.09 84.09 0 0 0-84-84a12 12 0 0 1 0-24a108.12 108.12 0 0 1 108 108v67l27.51-27.52a12 12 0 0 1 17 17Z" />
                    </svg>
                  </button>
                </a>
                <div>
                  <a href="#contactanos">
                    <button className="btn-donate">
                      <p className='text-lg'>Alguna idea?</p>
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </seccion>
      {/* seccion 2 */}
      <seccion id="Quienes-Somos?" className="seccion2 flex mt-48 mb-3 mx-[12%]">
        <div className='w-[50%] flex flex-col justify-center cont2'>
          <img className='w-44 logo flex justify-start items-start' src={logo} alt="" />
          <p className='text-white textResponsi4 fonTexto'>
            Somos un equipo
            que se dedica apacionadamente a la construccion de landing page, sitios Web.
          </p>
          <p className="mt-10 text-slate-400 text-lg fonTexto">
            Ofrecemos una gama de servicios de consultoría y asesoramiento diseñados para ayudar a los negocios de todos los tamaños a desarrollar y ejecutar estrategias para aumentar tanto la publicidad como accesibilidad a los productos que ofresen. Trabajamos en estrecha colaboración con nuestros clientes para garantizar que su transición a la Web sea exitosa.
          </p>
        </div>
        <div className='w-[50%] flex justify-end items-center cont2 '>
          <img className='w-[85%] fondoPrincipal2' src={lateral} alt="" />
        </div>
      </seccion>
      {/* seccion 3 */}
      <section id="Nuestros-Servicios" className=''>
        <div className='mt-24 mx-[2%] '>
          <p className='text-white textResponsi fonTexto font-bold text-center '>Etapas y servisios para el desarrollo <br /> de tu paguina web</p>
          <div className='flex gap-10 mt-28 cont3'>
            <div className='card fonTexto w-full flex cont3-1 gap-5'>
              <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 48 48"><defs><mask id="IconifyId1910af3e5109afd8a312"><g fill="none" stroke="#fff" stroke-width="2"><circle cx="24" cy="11" r="7" fill="#555" stroke-linecap="round" stroke-linejoin="round" /><path stroke-linecap="round" stroke-linejoin="round" d="M4 41c0-8.837 8.059-16 18-16" /><circle cx="34" cy="34" r="9" fill="#555" /><path stroke-linecap="round" stroke-linejoin="round" d="M33 31v4h4" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId1910af3e5109afd8a312)" /></svg>
              </div>
              <div>
                <p className='text-white text-xl font-semibold'>ENTREVISTA.</p>
                <p className='text-gray-400 mt-2'>
                  En esta etapa, le proporcionaremos un conjunto de preguntas para comprender mejor sus preferencias  y necesidades para el desarrollo de su página web. Por ejemplo, solicitaremos información sobre el nombre de su negocio y los colores principales que desea utilizar.
                </p>
              </div>
            </div>
            <div className='card fonTexto flex cont3-1 gap-5 w-full'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 48 48"><defs><mask id="IconifyId1910af3e5109afd8a314"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10" /><path stroke="#fff" stroke-linecap="round" stroke-width="3" d="M16 14h13m-13 7h5" /><circle cx="34" cy="34" r="10" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="rotate(90 34 34)" /><path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M34 36v3" /><circle cx="34" cy="30" r="2" fill="#fff" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId1910af3e5109afd8a314)" /></svg>
              </div>
              <div>
                <p className='text-white text-xl font-semibold'>DOCUMENTACION.</p>
                <p className='text-gray-400 mt-2'>
                  Con la información recopilada previamente, organizaremos y definiremos las funcionalidades específicas que tendrá el sitio web. Esto nos permitirá obtener una visión más clara y estructurada de la idea del cliente.
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-10 cont3'>
            <div className='card fonTexto w-full flex cont3-1 gap-5'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 48 48"><defs><mask id="IconifyId1910af3e5109afd8a1319"><g fill="none" stroke="#fff" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M28.367 36H24l-9-4.96l-10.991 4.042l3.002 5.944l7.072-2.953C20.7 42.024 24.727 44 26.165 44c1.438 0 7.383-2.667 17.835-8" /><path fill="#555" fill-rule="evenodd" stroke-linejoin="round" d="M28.992 26.988v-4.67c1.1-.457 2.543-1.125 3.372-1.954a9 9 0 1 0-12.728 0c.829.829 2.264 1.497 3.364 1.953c.006.335.006 1.892 0 4.67z" clip-rule="evenodd" /><path stroke-linecap="round" d="m12 21l1-1m27 1l-1-1M15 5l-1-1m23 1l1-1m3 8h-1m-28 0h-1" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId1910af3e5109afd8a1319)" /></svg>
              </div>
              <div>
                <p className='text-white text-xl font-semibold'>DISEÑO GRAFICO (si no tienes)</p>
                <p className='text-gray-400 mt-2'>
                  Se diseñará un boceto del sitio web  para definir la estructura básica, este prototipo servirá como una representación visual del producto final. El diseño se presentará al cliente para su revisión y retroalimentación. Se realizarán ajustes según sea necesario para asegurar que el diseño final cumpla con las expectativas
                </p>
              </div>
            </div>
            <div className='card fonTexto flex gap-5 cont3-1 w-full'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 48 48"><defs><mask id="IconifyId1910af3e5109afd8a1323"><g fill="none" stroke="#fff" stroke-width="2"><path fill="#555" stroke-linejoin="round" d="M44 5H4v12h40z" /><path stroke-linecap="round" stroke-linejoin="round" d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368" /><path stroke-linecap="round" d="M44 16.172v26m-40-26v14M13.016 43H44M17 11h21m-28-.003h1" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId1910af3e5109afd8a1323)" /></svg>
              </div>
              <div>
                <p className='text-white text-xl font-semibold'>DESARROLLO.</p>
                <p className='text-gray-400 mt-2'>
                  Con el diseño listo y aprobado por el cliente procederemos a la construccion del sitio web. NOTA : Dado inicio a la etapa de construccion NO se permitiran cambios o sugerencias que se quieran añadir POSTERIORMENTE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* seccion 4 */}
      <section id='Portafolio' className='mt-32'>
        <div className='mx-[2%] '>
          <p className='textResponsi text-white font-bold text-center fonTexto'>Nustro Portafolio</p>
          <div className="container4 flex flex-wrap justify-center gap-6 mt-10">
            <div className="cont4 w-[500px] cart fonTexto">
             <a href="https://fores-marias2.vercel.app/"> <img className="rounded-xl object-cover w-full h-full cart1" src={img1} alt="" /></a>
            </div>
            <div className="cont4 w-[500px] cart fonTexto">
              <a href="https://hydra-olive.vercel.app/"><img className="rounded-xl object-cover w-full h-full cart1" src={img2} alt="" /></a>
            </div>
            <div className="cont4 w-[500px] cart fonTexto">
             <a href="https://metaverse-jade-six.vercel.app/"> <img className="rounded-xl object-cover w-full h-full cart1" src={img3} alt="" /></a>
            </div>
            <div className="cont4 w-[500px] cart fonTexto">
             <a href="https://spotify-repli.vercel.app/"> <img className="rounded-xl object-cover w-full h-full cart1" src={img4} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      {/* seccion 5 */}
      <section id='contactanos' className='mt-56 seccion5'>
        <div className="w-full flex contenedor5">
          <div className='w-[50%] cont5 flex flex-col items-center'>
            <div className='flex items-center'>
              <img className='w-28 fonTexto flex justify-start items-start' src={logo} alt="" />
              <p className='text-white font-semibold text-3xl px-3 py-2 fonTexto textResponsi5'>NEYCAR STUDIOS</p>
            </div>
            <p className='text-white textResponsi5  text-center uppercase fonTexto3 '> ¿Que ideas tienes <br /> para  tu Negocion?  </p>
            <ul class="wrapper fonTexto">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="twitter"
                >
                  <path
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </li>
            </ul>

          </div>
          <div className='w-[50%] flex flex-col items-center cont5'>
            <p className="text-white fonTexto text-2xl">Contactanos</p>
            <Correos/>           
          </div>
        </div>
        <footer className="footer flex justify-center mt-20 p-4">
        <aside>
          <p className='text-white'>Copyright © {new Date().getFullYear()} NEYCAR STUDIOS - All right reserved</p>
        </aside>
      </footer>
      </section>
      
    </div>
  )
}

export default App
