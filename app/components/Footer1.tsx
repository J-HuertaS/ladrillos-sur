import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link";

export default function Footer1(){
    const iconsStyle = `
        transition-all duration-300 ease-in-out 
        hover:text-[var(--color-primary)] 
        hover:scale-105
        active:scale-95
    `;

    return(
        <footer>
            <div className="flex items-center justify-center text-center md:text-left md:justify-between px-6 md:px-8 lg:px-16 pt-6 bg-[var(--color-dark)]">
                <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-8 md:gap-8 lg:gap-20 mb-24 w-full">
                    <div className="flex flex-col gap-4 mt-5 items-center md:items-start">
                        <h4 className="text-2xl font-serif font-bold text-[var(--color-primary)]">Navegación</h4>
                        <Link 
                        href="/productos"
                        aria-label="Dirigirse al catálogo de productos"
                        className="hover:text-[var(--color-primary)] w-fit">
                        Catálogo de Productos
                        </Link>
                        <Link 
                        href="/quienes-somos"
                        aria-label="Dirigirse a nuestra historia e identidad"
                        className="hover:text-[var(--color-primary)] w-fit">
                        Nuestra Historia
                        </Link>
                        <Link 
                        href="/proyectos"
                        aria-label="Dirigirse a nuestra página de proyectos"
                        className="hover:text-[var(--color-primary)] w-fit">
                        Obras de Referencia
                        </Link>
                        <a 
                        href="https://wa.me/573125216075"
                        target="_blank"
                        aria-label="Contactar por WhatsApp"
                        className="hover:text-[var(--color-primary)] w-fit"
                        >
                        Canal de venta
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <h4 className="text-2xl font-serif font-bold text-[var(--color-primary)]">Contacto</h4>
                        <Link 
                        href="/contactenos#formulario"
                        aria-label="Acceder a formulario de contacto por medio de la página de contacto"
                        className="flex flex-row gap-2 justify-center md:justify-start group">
                        <Mail className="transition-colors group-hover:text-[var(--color-primary)]" />
                        gerenciacomercial@ladrillossur.com
                        </Link>
                        <a
                        href="tel:+573125216075"
                        aria-label="Llamar al +57 312 521 6075"
                        className="flex flex-row gap-2 justify-center md:justify-start group"
                        >
                        <Phone className="transition-colors group-hover:text-[var(--color-primary)]" />
                        +57 312 521 6075
                        </a>

                        <a
                        href="https://maps.app.goo.gl/wmx3FgNHt2fhxNfXA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver ubicación en Google Maps"
                        className="flex flex-row gap-2 justify-center md:justify-start group"
                        >
                        <MapPin className="transition-colors group-hover:text-[var(--color-primary)]" />
                        Vía Mochuelo #Km 2, San Joaquin, Bogotá
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 mt-5 max-w-3xl ">
                        <p className="text-[var(--color-white)] text-lg leading-relaxed mb-4">
                        Líderes en la fabricación de ladrillos otorgando la mejor calidad, priorizando la satisfacción de nuestros clientes y un compromiso con el medio ambiente
                        </p>
                        <div className="flex flex-row justify-center md:justify-start gap-8 ">
                            <a
                            href="https://www.facebook.com/ladrillossur/"
                            className={iconsStyle}
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <FaFacebook size={32} />
                            </a>
                            <a
                                href="https://www.instagram.com/ladrillos_sur/"
                                className={iconsStyle}
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}