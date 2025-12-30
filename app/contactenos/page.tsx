import Navbar from '../components/Navbar';
import ContactCards from '../sections/ContactCards';
import ContactForm from '../components/ContactForm';

import { Clock } from "lucide-react";

export default function Contacto() {
    return (
        <div>
            <Navbar />
            <main className="pt-24">
                <div className="bg-[#f7f7f7]">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h2 className="pt-16 text-7xl text-[var(--color-black)] text-center font-serif font-medium italic"
                        >Contacto</h2>
                        <p className="text-stone-600 font-normal text-md text-center px-4">Estamos aquí para responder sus preguntas y asesorarlo en su próximo proyecto de construcción.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-[var(--color-black)] py-10 px-4 md:px-8 lg:px-16">
                        <ContactCards />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-16 py-10 gap-19">
                        {/* Columna mapa y horario */}
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="h-[400] md:h-[600]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.348627566714!2d-74.14209009999999!3d4.5310841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa1eb7bd794e9%3A0xcb968850396cd1c8!2sLadrillos%20Sur!5e0!3m2!1ses-419!2sco!4v1767036916232!5m2!1ses-419!2sco" className="w-full h-full object-cover" loading="lazy"></iframe>
                            </div>
                            <div className="mt-6 bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 p-6">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-[var(--color-primary)] mt-1 shrink-0" />
                                    <div className="text-[var(--color-black)] w-full">
                                        <h4 className="font-serif text-lg mb-3">Horario de atención</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Lunes - Viernes</span>
                                                <span className="font-medium">8:00 - 18:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Sábados</span>
                                                <span className="font-medium">9:00 - 13:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Domingos</span>
                                                <span className="font-medium">Cerrado</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Columna formulario */}
                        <ContactForm />
                    </div>
                </div>
            </main>
        </div>
    );
}