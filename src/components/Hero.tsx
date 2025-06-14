// src/components/Hero.tsx
import { motion } from 'framer-motion';
import AccumulatingTypingEffect, { PhraseWithEmoji } from './AccumulatingTypingEffect';

// Ya no necesita recibir ninguna prop para el widget
const Hero = () => {

  // La función handleLetsTalkClick ya no es necesaria aquí
  
  const aiAgentPhrases: PhraseWithEmoji[] = [
    { emoji: "📈", text: "Marketing Agent driving growth..." },
    { emoji: "⚙️", text: "Automation Agent streamlining tasks..." },
    { emoji: "💁‍♀️", text: "Receptionist Agent managing inquiries..." },
    { emoji: "💼", text: "Sales AI Assistant boosting deals..." },
    { emoji: "💬", text: "Support Agent AI enhancing CX..." },
    { emoji: "📊", text: "Data Analyst Agent uncovering insights..." }
  ];

  return (
    <section
      id="hero"
      // Añadimos un poco más de padding inferior para dar espacio al nuevo widget flotante
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-32 sm:pt-20 sm:pb-40 bg-[#F1F3F5] relative"
    >
      <div className="container mx-auto mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          
          {/* Columna de Texto (Izquierda) */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left pt-0 md:pt-2 lg:pt-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 text-[#0D1B2A] leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C7ED6] to-[#D0BFFF]">
                Adaptive AI Systems:
              </span>
              {' '}that save time and generate revenue.
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl text-[#0D1B2A]/80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Automate business operations to achieve superior efficiency with tailored AI solutions.
            </motion.h2>
          </div>

          {/* Columna del Elemento Visual (Derecha) */}
          <motion.div 
            className="md:w-1/2 lg:w-2/5 w-full mt-6 md:mt-0 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full max-w-md xl:max-w-lg bg-white p-4 sm:p-6 rounded-xl shadow-2xl border border-slate-200 min-h-[180px] sm:min-h-[220px] md:min-h-[260px] flex flex-col justify-start overflow-hidden">
              <AccumulatingTypingEffect
                phrases={aiAgentPhrases}
                lineClassName="text-lg sm:text-xl md:text-2xl text-[#0D1B2A] mb-1.5 font-mono"
                typingSpeed={80}
                pauseBetweenLines={1500}
                maxVisibleLines={4}
                cursorClassName="inline-block w-[2px] h-[1.2em] ml-1 bg-[#0D1B2A] animate-blink align-middle"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* EL BOTÓN FLOTANTE PERSONALIZADO HA SIDO ELIMINADO DE AQUÍ */}

    </section>
  );
};

export default Hero;