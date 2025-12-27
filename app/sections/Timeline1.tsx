"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import TimelineFooter from "../components/TimelineFooter"

interface TimelineEvent {
  year: string
  title: string
  description: string
  images: { src: string; alt?: string }[]
}

const events: TimelineEvent[] = [
  {
    year: "1963",
    title: "El Primer Horno",
    description: "Nace Ladrillos Sur en el sur de Bogotá. Con tres hornos de llama y maquinaria nacional, sentamos las bases de una tradición industrial que transformaría la arcilla en progreso.",
    images: [],
  },
  {
    year: "1966",
    title: "Visión de Futuro",
    description: "Nos constituimos como sociedad. Introducimos el primer horno tipo Hoffman y tecnología de punta para la época, elevando nuestra producción a 10,000 toneladas anuales.",
    images: [{ src: "/maquinaria-antigua.jpg", alt: "Maquinaria de extracción" }],
  },
  {
    year: "1980",
    title: "Expansión Monteazul",
    description: "Una década de crecimiento exponencial. Con la apertura de las plantas Monteazul y Lomaverde, triplicamos nuestra capacidad para responder a la creciente demanda de la capital.",
    images: [{ src: "/planta-monteazul.jpg", alt: "Planta de producción años 80" }],
  },
  {
    year: "2002",
    title: "Enfoque Estratégico",
    description: "Ladrillos Sur decide vender la planta Monteazul para concentrar toda su actividad industrial y tecnológica en la planta Lomaverde, especializándose en procesos de alta eficiencia.",
    images: [], // Puedes dejarlo vacío o poner una foto aérea de Lomaverde
  },
  {
    year: "2003",
    title: "Sello Internacional",
    description: "Iniciamos una transformación estratégica: nueva imagen corporativa y proyección global. Nos especializamos en productos estructurales y fachadas de alta ingeniería.",
    images: [{ src: "/cambio-imagen.jpg", alt: "Evolución de marca" }],
  },
  {
    year: "2005",
    title: "Revolución Ecológica",
    description: "Elegidos por Gas Natural para un proyecto piloto nacional: reemplazamos el carbón por gas natural. Un hito en sostenibilidad y control de calidad en Colombia.",
    images: [{ src: "/horno-gas.jpg", alt: "Horno Hoffman a gas natural" }],
  },
  {
    year: "2025",
    title: "Eficiencia y Calidad",
    description: "Alcanzamos las 36,000 toneladas anuales. Con secaderos artificiales y laboratorio propio, garantizamos la mampostería estructural más confiable del mercado.",
    images: [{ src: "/laboratorio-calidad.jpg", alt: "Monitoreo de productos" }],
  },
  {
    year: "Hoy",
    title: "Liderando el Mañana",
    description: "Nuestra historia sigue viva en cada edificio que sostiene al país. Hoy, con más de 60 años de maestría, seguimos innovando para ofrecer la máxima confianza y calidad en cada bloque que sale de nuestra planta.",
    images: [{ src: "/arquitectura-moderna-ladrillo.jpg", alt: "Proyectos actuales" }],
  }
]

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
}


export default function Timeline1() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1) // 1 = adelante, -1 = atrás (solo es para animaciones)
    const currentEvent = events[currentIndex]
    {/* Logica de los botones */}
    const nextEvent = () => {
        setDirection(1)
        setCurrentIndex((prev) =>
            (prev + 1) % events.length
        )
    }

    const prevEvent = () => {
        setDirection(-1)
        setCurrentIndex((prev) =>
            prev === 0 ? events.length - 1 : prev - 1
        )
    }

    return (
        <>
            <section className="
            text-[var(--color-black)]
            relative
            w-full
            max-w-4xl
            px-4
            md:px-6
            text-center
            ">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="flex justify-between items-center mb-4 border-b border-stone-200">
                    <span className="text-xs md:text-sm font-medium tracking-widest text-stone-400 uppercase">Nuestra Historia</span>
                    <div className="flex items-baseline gap-1 text-stone-800">
                        <span className="text-xl md:text-2xl">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="text-stone-300">/</span>
                        <span className="text-xs md:text-sm text-stone-400">{String(events.length).padStart(2, '0')}</span>
                    </div>
                </div>
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Un ease más suave (expo)
                        className="flex flex-col items-center text-center"
                    >
                        {/* 1. Cambiamos leading-none y añadimos tracking-tighter */}
                        <h4 className="text-[var(--color-primary)] font-bold 
                                    text-[9rem] md:text-[16rem] lg:text-[22rem] 
                                    leading-[0.8] tracking-tighter select-none opacity-40 mt-6 mb-10 lg:mb-18 lg:mt-8">
                        {currentEvent.year}
                        </h4>

                        {/* 2. Usamos un margen negativo para "subir" el título y pegarlo al año si es necesario */}
                        <div className="mb-4 relative z-10">
                        <h3 className="font-bold text-3xl md:text-4xl mb-4 text-stone-900">
                            {currentEvent.title}
                        </h3>
                        <p className="max-w-xl text-stone-600 text-base md:text-lg leading-relaxed">
                            {currentEvent.description}
                        </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>
            <div className="flex flex-row items-center justify-between w-full lg:w-fit">
                <ChevronLeft onClick={prevEvent} />
                <TimelineFooter
                years={events.map(e => e.year)}
                currentIndex={currentIndex}
                />
                <ChevronRight onClick={nextEvent} />
            </div>
            
        </>
    );
}