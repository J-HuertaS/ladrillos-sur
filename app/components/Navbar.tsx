"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkStyles = `
        inline-block
        transition-all duration-300 ease-in-out 
        hover:text-[var(--color-primary)] 
        hover:scale-105
        active:scale-95
    `;

    return (
        <header>
            <nav className="bg-[var(--color-white)] text-[var(--color-black)]">
                <div className="
                relative
                mx-auto
                flex
                items-center
                justify-between
                px-4
                h-24
                md:px-8
                lg:px-16
                
                "
                style={{ zIndex: 100 }}> 
                    <a href="/" aria-label="Ir a página de inicio">
                        <img src="/logo.svg" alt="Ladrillos Sur" className="h-10 md:h-14"/>
                    </a>
                    <ul className="hidden md:flex space-x-8 lg:space-x-16 text-lg lg:text-xl font-medium">
                        <li><a href="/" className={navLinkStyles}>Inicio</a></li>
                        <li><a href="#productos" className={navLinkStyles}>Productos</a></li>
                        <li><a href="/nosotros" className={navLinkStyles}>Nosotros</a></li>
                        <li><a href="/proyectos" className={navLinkStyles}>Proyectos</a></li>
                    </ul>
                    <div className="md:hidden">
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
            <nav aria-label="Menú principal móvil" aria-hidden={!isMenuOpen}>
                <ul className={`
                    absolute left-0 w-full h-[calc(100vh-6rem)] bg-[var(--color-white)] text-[var(--color-black)] 
                    flex flex-col items-center justify-center space-y-8 text-2xl font-medium py-10
                    transition-all duration-500 ease-in-out border-b shadow-lg
                    md:hidden
                    ${isMenuOpen 
                        ? "top-24 opacity-100 visible translate-y-0" 
                        : "top-0 opacity-0 invisible -translate-y-full"}
                    `}
                    style={{ zIndex: 99 }}
                    >
                        <li><a href="/" className={navLinkStyles} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Inicio</a></li>
                        <li><a href="#productos" className={navLinkStyles} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Productos</a></li>
                        <li><a href="/nosotros" className={navLinkStyles} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Nosotros</a></li>
                        <li><a href="/proyectos" className={navLinkStyles} onClick={()=>setIsMenuOpen(!isMenuOpen)}>Proyectos</a></li>
                        
                </ul>
            </nav>
            
        </header>
    );
}