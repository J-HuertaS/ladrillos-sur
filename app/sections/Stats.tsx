export default function Stats() {
  const stats = [
    { label: "Años de Trayectoria", value: "60+" },
    { label: "Proyectos Entregados", value: "50k+" },
    { label: "Ladrillos por Mes", value: "2M+" },
    { label: "Certificaciones ISO", value: "04" },
  ]

  return (
    <section>
      <div className="shadow-md hidden bg-[var(--color-dark)] md:block lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-8 text-center h-fit lg:py-10 items-center justify-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 group">
              <p className="mb-5 text-4xl md:text-6xl font-serif text-[var(--color-secondary)] group-hover:text-accent group-hover:scale-110 transition-all duration-500">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-white)] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
