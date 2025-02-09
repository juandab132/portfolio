import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section 
      id="about" 
      className="bg-[#C4DADD] dark:bg-gray-800 py-12 transition-colors duration-300"
    >
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <header className="text-center">
            <h2 
              className="text-xl font-semibold uppercase mb-2 text-black dark:text-white font-serif"
            >
              SOBRE MI
            </h2>
            <p className="mb-6 text-black dark:text-gray-300 font-serif">¿Quién es Juan David?</p>
            <main className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Image
                src="/images/juan.png"
                alt="Juan David"
                width={192} 
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </main>
          </header>
          
          <section className="space-y-6">
            <h3 
              className="font-semibold text-black dark:text-white font-serif"
            >
              Desarrollador de software en formación, con pasión por el aprendizaje
              continuo.
            </h3>
            
            <p className="text-sm leading-relaxed text-black dark:text-gray-300 font-serif">
              Como estudiante de quinto semestre de Ingeniería de Software, me motiva la 
              resolución de problemas y la creación de soluciones tecnológicas eficientes. 
              Aunque mi conocimiento es diverso, tengo un interés particular en el desarrollo 
              web y la experiencia del usuario. Valoro la escritura de código limpio, bien 
              estructurado y que facilite la accesibilidad.
            </p>
            
            <p className="text-sm leading-relaxed text-black dark:text-gray-300">
              Me encuentro constantemente aprendiendo nuevas tecnologías, tanto en la 
              universidad como de manera autodidacta. He trabajado en proyectos académicos 
              y personales que abarcan desde el uso de frameworks front-end como React, 
              hasta la implementación de bases de datos y APIs.
            </p>
            
            <p className="text-sm leading-relaxed text-black dark:text-gray-300">
              Mi enfoque está en mejorar con cada proyecto, poniendo atención a los detalles 
              y buscando la simplicidad en el diseño y la funcionalidad. Como estudiante, 
              estoy abierto a oportunidades de aprendizaje y colaboración, siempre buscando 
              nuevos desafíos que me permitan crecer. Actualmente, continúo desarrollando 
              mis habilidades y conocimientos, y me encantaría conectarme con otros 
              profesionales en el camino.
            </p>
            
            <h4 
              className="font-semibold text-lg text-black dark:text-white font-serif"
            >
              ¡Ponte en contacto!
            </h4>
          </section>
        </section>
      </main>
    </section>
  );
};

export default AboutMe;
