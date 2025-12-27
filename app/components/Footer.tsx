import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const iconsStyle = `
        transition-all duration-300 ease-in-out 
        hover:text-[var(--color-primary)] 
        hover:scale-105
        active:scale-95
    `;

    return (
        <footer className="w-full py-6 bg-[var(--color-white)] flex flex-col justify-between shadow-[0_-4px_8px_0_rgba(0,0,0,0.08)]">
            <h3 className="
            text-center
            font-bold 
            text-2xl 
            text-[var(--color-secondary)] 
            md:px-8
            lg:text-left
            lg:pb-4
            lg:px-16
            ">Contáctenos</h3>
            
            <div className="
                text-center
                text-[var(--color-black)]
                flex flex-col
                justify-center
                items-center
                px-8
                gap-6
                md:px-8
                lg:px-16
                lg:gap-0
                lg:justify-between
                lg:flex-row">
                <div className="pt-4 pb-2 lg:py-0 lg:text-left">
                    <h4 className="text-[var(--color-accent)] text-lg text-center font-bold lg:text-left">Planta Lomaverde</h4>
                    <p>+57 312 521 6075</p>
                    <p>Vía Mochuelo #Km 2, San Joaquin, Bogotá</p>
                </div>
                <div className="text-[var(--color-black)]">
                    <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:items-start">
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
                        <a href="#" className={iconsStyle} aria-label="Twitter">
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                    
                </div>   
            </div>
            <p className="text-center pt-8 text-sm text-[var(--color-black)]">&copy; 2017 Ladrillos Sur. Todos los derechos reservados.</p>
        </footer>
    );
}