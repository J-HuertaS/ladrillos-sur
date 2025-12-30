import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactCards() {
    const titleStyle = `
        text-xl
        md:text-2xl
        mb-3
        font-medium
        font-serif
        text-[var(--color-black)]
    `

    return (
        <section className="w-full pt-5 text-[var(--color-black)] ">
            <div className="flex flex-col lg:flex-row gap-4 lg:mb-8 justify-between">
                <div className="bg-[var(--color-white)] p-8 shadow-lg w-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/18 flex items-center justify-center mb-7">
                        <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className={titleStyle}>Línea de atención</h3>
                    <p className="text-stone-600 text-sm mb-3">Lunes a Viernes 6:00-15:00</p>
                    <a href="tel:+573125216075" 
                    aria-label="Llamar al +57 312 521 6075" 
                    className="text-[var(--color-accent)] text-lg font-medium hover:text-[var(--color-accent)/80] active:scale-95">+57 312 521 6075</a>
                </div>
                <div className="bg-[var(--color-white)] p-8 shadow-lg w-full">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/18 flex items-center justify-center mb-7">
                        <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className={titleStyle}>Correo electrónico</h3>
                    <p className="text-stone-600 text-sm mb-3">Respuesta en 24 horas</p>
                    <Link href="/contactenos#formulario"
                        aria-label="Acceder a formulario de contacto por medio de la página de contacto" 
                        className="text-[var(--color-accent)] text-lg font-medium hover:text-[var(--color-accent)/80] active:scale-95">gerenciacomercial@ladrillossur.com</Link>
                </div>
                <div className="bg-[var(--color-white)] p-8 shadow-lg w-full">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/18 flex items-center justify-center mb-7">
                        <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className={titleStyle}>Ubicación</h3>
                    <p className="text-stone-600 text-sm mb-3">Visítenos en nuestra planta</p>
                    <a href="https://maps.app.goo.gl/wmx3FgNHt2fhxNfXA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver ubicación en Google Maps" 
                        className="text-[var(--color-accent)] text-lg font-medium hover:text-[var(--color-accent)/80] active:scale-95">Vía Mochuelo #Km 2, San Joaquin, Bogotá</a>
                </div>
            </div>
        </section>
    )
}