import Link from "next/link";

export default function Info1() {
    return (
        <section className="py-24 relative overflow-hidden bg-[var(--color-light)]">
            <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square">
                <img 
                    src="tu-imagen.png" 
                    alt="Fondo" 
                    className="w-full h-full object-cover opacity-50 brightness-80"
                />
                <div className="absolute -bottom-8 -right-2 w-48 h-48 lg:-right-8 lg:w-64 lg:h-64 bg-white/95 p-8 hidden md:flex flex-col justify-center shadow-2xl animate-bounce-slow">
                    <p className="text-5xl font-serif text-orange-500">1963</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2 font-bold text-[var(--color-black)]">
                    Nacimiento de Ladrillos Sur
                    </p>
                </div>
                </div>
                <div className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--color-primary)] font-bold">Nuestra Historia</h2>
                <p className="text-4xl md:text-5xl font-medium font-serif leading-tight text-[var(--color-black)]">Más de 60 años entregando calidad de vida</p>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-[var(--color-black)]">
                    <p>
                    Ladrillos Sur nació como un pequeño emprendimiento familiar a orillas del río Paraná. Con el paso de
                    las décadas, invertimos en tecnología de vanguardia europea sin perder el respeto por la materia prima
                    noble que nos brinda nuestra tierra.
                    </p>
                    <p>
                    Hoy somos la fábrica más importante de la región, proveyendo materiales a las obras más emblemáticas y
                    a miles de familias que confían en nuestra marca para proteger lo que más aman.
                    </p>
                </div>
                <Link href="/quienes-somos" className="text-xs uppercase tracking-[0.3em] text-[var(--color-black)] font-bold border-b-2 border-[var(--color-black)] pb-2 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all active:scale-95 cursor-pointer">
                    Descubra nuestro proceso
                </Link>
                </div>
            </div>
            </div>
        </section>
        );
}