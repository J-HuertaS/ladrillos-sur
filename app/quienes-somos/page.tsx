
import Info from "../sections/Info"
import Timeline1 from "../sections/Timeline1"
import Navbar from "../components/Navbar"
import Approach from "../sections/Approach"
import Communication from "../components/Communication"

export default function Nosotros() {
    return (
        <div>
        <Navbar />
        <main className="pt-24">
            <div className="bg-[#f7f7f7]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="pt-16 text-7xl text-[var(--color-black)] text-center font-serif font-medium italic"
                    >Nosotros</h2>
                    <p className="text-[var(--color-secondary)] font-medium uppercase text-md tracking-wide text-center">Nuestra identidad y proposito</p>
                </div>
                <div className="flex flex-col items-center justify-center text-[var(--color-black)] py-10 px-4 md:px-8 lg:px-16 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)]">
                    <Approach />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-[var(--color-black)] py-10 px-4 md:px-8 lg:px-16">
                <Timeline1 />
            </div>
            
            <section className="relative py-22 mt-3 px-4 bg-gradient-to-t from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                <div className="pointer-events-none absolute top-0 left-0 w-full h-18
                    bg-gradient-to-b from-stone-50 to-transparent" />   
                <div className="container mx-auto max-w-6xl text-center">
                <p className="text-sm md:text-base uppercase tracking-widest mb-4 text-orange-100">Desde 1963</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Tradición y Excelencia</h1>
                <p className="text-xl md:text-2xl text-orange-50 max-w-3xl mx-auto">
                    Una trayectoria de más de 60 años construyendo calidad de vida en Colombia
                </p>
                </div>
                
            </section>
        </main>
        <Communication />
        </div>
    )
}
