"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { clsx } from "clsx"

// --- DATOS ---




// --- ANIMACIONES ---
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(10px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(10px)",
  }),
}

const imageStackVariants: Variants = {
  enter: { opacity: 0, y: 20, scale: 0.9 },
  center: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: i % 2 === 0 ? i * 2 : i * -2,
    transition: { delay: 0.2 + i * 0.1, duration: 0.8, type: "spring" },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
}

export default function Timeline() {
  const [[page, direction], setPage] = useState([0, 0])
  const activeIndex = Math.abs(page % timelineEvents.length)
  const currentEvent = timelineEvents[activeIndex]

  const paginate = useCallback((newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection])
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-[var(--color-white)] overflow-hidden flex flex-col justify-center py-12 md:py-20">
      {/* Fondo Ruido */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col">
        
        {/* Header / Contador */}
        <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-stone-200 pb-4">
          <span className="text-xs md:text-sm font-medium tracking-widest text-stone-400 uppercase">Nuestra Historia</span>
          <div className="flex items-baseline gap-1 font-serif text-stone-800">
            <span className="text-xl md:text-2xl">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="text-stone-300">/</span>
            <span className="text-xs md:text-sm text-stone-400">{String(timelineEvents.length).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* COLUMNA IMÁGENES (Arriba en móvil) 
             En móvil usamos h-[350px] para que no ocupe toda la pantalla.
             En desktop h-[600px]
          */}
          <div className="lg:col-span-7 relative h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 perspective-1000 w-full mb-8 lg:mb-0">
            <AnimatePresence mode="popLayout" initial={false}>
              {currentEvent.images.length > 0 ? (
                currentEvent.images.map((img, index) => (
                  <motion.div
                    key={`${currentEvent.year}-img-${index}`}
                    custom={index}
                    variants={imageStackVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={clsx(
                        "absolute shadow-2xl overflow-hidden border-[6px] md:border-[8px] border-white bg-white",
                        // Ajuste de tamaños para móvil vs desktop
                        index === 0 ? "w-[240px] h-[300px] md:w-[380px] md:h-[480px] z-30" : 
                        "w-[220px] h-[280px] md:w-[340px] md:h-[420px] z-20 grayscale-[30%]"
                    )}
                    style={{
                        left: index === 0 ? '50%' : `${50 + (index * 8)}%`,
                        top: index === 0 ? '50%' : `${50 + (index * 4)}%`,
                        x: '-50%',
                        y: '-50%'
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || "Historia Ladrillera"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                   key="placeholder"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="w-[240px] h-[300px] md:w-[300px] md:h-[400px] bg-stone-100 border-2 border-dashed border-stone-300 rounded flex items-center justify-center flex-col gap-4 text-stone-400"
                >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-stone-200 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="font-serif italic text-sm md:text-base">Imagen en archivo</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLUMNA TEXTO (Abajo en móvil)
             Agregamos 'mt-8' o 'pt-12' en móvil para separar del stack de imágenes
             y dar espacio al número de año gigante.
          */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 mt-4 md:mt-0">
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
                className="relative isolate" // 'isolate' crea un contexto de apilamiento nuevo
              >
                {/* AÑO GIGANTE
                   Móvil: top-[-60px], más pequeño. Desktop: top-[-80px], grande.
                   z-[-1] para asegurar que esté detrás del texto.
                */}
                <h2 className="absolute -top-12 left-0 md:-top-20 md:-left-10 text-[80px] md:text-[180px] leading-none font-bold text-stone-200/60 font-serif select-none -z-10 mix-blend-multiply">
                  {currentEvent.year}
                </h2>

                <div className="relative pt-8 md:pt-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }}
                  >
                    <div className="inline-block px-3 py-1 mb-3 md:mb-4 text-[10px] md:text-xs font-bold tracking-wider text-orange-700 uppercase bg-orange-100/50 rounded-full border border-orange-200/50">
                      Hito {currentEvent.year}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4 md:mb-6 leading-tight">
                      {currentEvent.title}
                    </h3>
                    <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light max-w-md text-pretty">
                      {currentEvent.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de Navegación */}
            <div className="flex gap-4 mt-8 md:mt-12 justify-start">
              <button
                onClick={() => paginate(1)}
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-stone-300 hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={() => paginate(-1)}
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-stone-300 hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}