"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react"
import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export default function Communication() {
    const [open, setOpen] = useState(false)
    const openForm = () => {

    }


    return (
        <div className="
            fixed bottom-6 right-6 z-50
            scale-0 opacity-0
            animate-[fabIn_0.4s_ease-out_forwards]">
            <button 
                onClick={() => setOpen(!open)}
                className="
                    bg-[var(--color-primary-bright)]
                    hover:bg-[var(--color-primary-dark)]
                    hover:scale-105
                    active:scale-95
                    text-white
                    flex items-center justify-center
                    w-18 h-18
                    rounded-full
                    shadow-xl
                    transition-all
                    cursor-pointer
                "
                aria-label="Open Communication Widget"
            >
                <MessageCircle size={40} />
            </button>
            <a
                href="https://wa.me/573125216075"
                target="_blank"
                aria-label="Contactar por WhatsApp"
                className={`
                    absolute
                    right-3    
                    bottom-20
                    w-14 h-14 rounded-full
                    bg-green-500 text-white
                    flex items-center justify-center
                    shadow-lg
                    transition-all duration-300
                    hover:bg-green-600
                    hover:scale-105
                    active:scale-95
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
                >
                <FaWhatsapp size={32}/>
            </a>
            <button
                aria-label="Enviar correo"
                onClick={openForm}
                className={`
                    absolute
                    right-3
                    bottom-36
                    w-14 h-14 rounded-full
                    bg-stone-800 text-white
                    flex items-center justify-center
                    shadow-lg
                    transition-all duration-300
                    cursor-pointer
                    hover:bg-stone-900
                    hover:scale-105
                    active:scale-95
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
                >
                <Mail size={32} />
            </button>



        </div>
    );
}