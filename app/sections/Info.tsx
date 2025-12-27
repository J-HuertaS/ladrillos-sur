export default function Info() {
    return (
        <section className="
        w-full 
        py-12 
        flex flex-col
        items-center 
        justify-center 
        text-[var(--color-black)]
        px-8 
        lg:px-16
        lg:flex-row">
            <div className="flex flex-col text-center lg:text-left lg:pr-12">
                <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-6 text-center lg:text-left">Seis décadas definiendo el estándar del ladrillo</h2>
                <p className="text-[var(--color-black)] text-center max-w-4xl pb-6 lg:text-left">
                    En Ladrillos Sur, nos enorgullece ofrecer productos de la más alta calidad, fabricados con técnicas tradicionales y materiales sostenibles. Nuestro compromiso con el medio ambiente y la excelencia nos distingue en el mercado. Al elegirnos, no solo obtienes ladrillos duraderos y estéticamente atractivos, sino que también apoyas prácticas responsables que benefician a nuestra comunidad y al planeta.
                </p>
                <a
                    href="/nosotros"
                    className=" 
                        italic
                        font-bold
                        transition 
                        duration-200 
                        text-[var(--color-black)]
                        text-lg
                        hover:text-[var(--color-secondary)] 
                        active:scale-95 
                        inline-block
                        lg:w-fit
                    "
                >
                    <p>Conoce más de nosotros <span aria-hidden="true">→</span></p>
                </a>
            </div>
            {/* Video de presentación */}
            <img src="tu-imagen.png" alt="Video de presentación" className="mt-8 w-full max-w-4xl rounded-md shadow-lg" />
        </section>
    );
}
