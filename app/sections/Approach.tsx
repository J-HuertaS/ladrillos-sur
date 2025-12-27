export default function Approach() {
    const titleStyle = `
        text-2xl
        md:text-4xl
        mb-6
        font-extrabold
        text-[var(--color-black)]
    `

    return (
        <section className="w-full max-w-4xl px-4 md:px-6 text-[var(--color-black)]">
            <div className="flex flex-col md:flex-row gap-5 md:gap-16 mb-16 max-w-5xl">
                <div className="bg-[var(--color-white)] p-5 rounded-lg shadow-lg">
                    <h3 className={titleStyle}>Misión</h3>
                    <p>Edificar confianza a través de la excelencia. Proveemos productos de arcilla que combinan tradición artesanal con precisión industrial para materializar los proyectos más exigentes del país.</p>
                </div>
                <div className="bg-[var(--color-white)] p-5 rounded-lg shadow-lg">
                    <h3 className={titleStyle}>Visión</h3>
                    <p>Ser la ladrillera más admirada de Colombia por su equilibrio entre capacidad productiva y respeto por el entorno, liderando la industria hacia una construcción más consciente y sostenible para el 2026.</p>
                </div>
            </div>
        </section>
    )
}