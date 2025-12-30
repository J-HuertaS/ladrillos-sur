"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar(){
    {/* State to manage mobile menu visibility */}
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    {/* Common styles for navigation links */}
    const navLinkBase = `
        inline-block
        items-center
        justify-center
        transition-all duration-300 ease-in-out
        font-medium
        tracking-wider
    `;

    const navLinkHover = `
        hover:text-[var(--color-primary)]
        hover:scale-105
        active:scale-95
    `;


    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);


    return (
        <header>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-white)] text-[var(--color-black)] shadow-md">
                <div className="
                mx-auto
                px-6
                h-24
                flex
                items-center
                justify-between
                md:px-8
                lg:px-16
                z-100"> 
                    <a href="/" aria-label="Ir a página de inicio">
                        <img src="/logo.svg" alt="Ladrillos Sur" className="h-10 md:h-14"/>
                    </a>
                    <ul className="hidden lg:flex space-x-8 lg:space-x-12 text-base lg:text-base font-medium uppercase items-center">
                        <li><Link href="/" className={`${navLinkBase} ${navLinkHover}`}>Inicio</Link></li>
                        <li><Link href="/productos" className={`${navLinkBase} ${navLinkHover}`}>Productos</Link></li>
                        <li><Link href="/quienes-somos" className={`${navLinkBase} ${navLinkHover}`}>Nosotros</Link></li>
                        <li><Link href="/proyectos" className={`${navLinkBase} ${navLinkHover}`}>Proyectos</Link></li>
                        <li>
                            <Link href="/contactenos" 
                                aria-label="Dirigirse a página de contacto"
                                className={`${navLinkBase} bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-6 py-2 transition-all duration-300 ease-in-out`}
                            >
                                Contacto
                            </Link>
                            </li>
                    </ul>
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            aria-expanded={isMenuOpen} 
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </nav>
            <nav aria-label="Menú principal móvil" aria-hidden={!isMenuOpen}
                className={`fixed left-0 w-full h-[calc(100dvh-6rem)] transition-all duration-500 ease-in-out z-999 lg:hidden ${isMenuOpen 
                        ? "top-24 opacity-100 visible translate-y-0" 
                        : "top-0 opacity-0 invisible -translate-y-full"}
                    `}>
                <ul className={`
                    h-full bg-[var(--color-white)] text-[var(--color-black)] 
                    flex flex-col items-center justify-center space-y-8 text-2xl font-medium uppercase
                    border-b shadow-lg overflow-y-auto pt-16 pb-16 landscape:justify-start
                    `}
                    
                    >
                        <li><Link href="/" className={`${navLinkBase} ${navLinkHover}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Inicio</Link></li>
                        <li><Link href="/productos" className={`${navLinkBase} ${navLinkHover}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Productos</Link></li>
                        <li><Link href="/quienes-somos" className={`${navLinkBase} ${navLinkHover}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Nosotros</Link></li>
                        <li><Link href="/proyectos" className={`${navLinkBase} ${navLinkHover}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Proyectos</Link></li>
                        <li><Link href="/contactenos" className={`${navLinkBase} ${navLinkHover}`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Contacto</Link></li>
                </ul>
            </nav>
            
        </header>
    );
}