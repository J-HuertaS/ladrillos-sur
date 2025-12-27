export default function Hero() {
  const buttonStylesOrange = `
    border-3 
    border-[var(--color-primary)] 
    text-white 
    bg-[var(--color-primary)]
    font-[600]
    w-60
    sm:w-75
    px-7 
    py-3 
    rounded-2xl 
    transition-all
    hover:scale-105
    hover:bg-[var(--color-primary-dark)]
    hover:border-[var(--color-primary-dark)]
    active:scale-95
    lg:py-2
    lg:w-55
  `;

  const buttonStylesGreen = `
    border-3 
    border-[var(--color-accent)] 
    text-white 
    font-[600]
    px-7 
    w-60
    sm:w-75
    py-3 
    rounded-2xl 
    hover:bg-[var(--color-accent)]
    hover:scale-105
    active:scale-95
    transition-all
    lg:py-2
    lg:w-55
  `;

  return (
    <section className=" relative w-full h-[calc(100vh-6rem)] items-center justify-center bg-black/75">
      {/* 1. Fondo Base (Imagen de fondo estática) */}
      <div className="absolute inset-0">
        <img 
          src="tu-imagen.png" 
          alt="Fondo" 
          className="w-full h-full object-cover opacity-50 brightness-80"
        />
      </div>
      {/* 2. Romboide Superior (Parte superior de la S) */}
      <div 
        className="absolute inset-0 [clip-path:polygon(41%_0%,100%_0%,88%_50%,29%_50%)] z-10 bg-black hidden lg:block"
      >
        <img 
          src="tu-imagen.png" 
          className="w-full h-full object-cover opacity-80 contrast-125" 
          alt="Corte Superior"
        />
      </div>

      {/* 3. Romboide Inferior (Parte inferior de la S) */}
      <div 
        className="absolute inset-0 [clip-path:polygon(12%_49%,71%_49%,59%_100%,0%_100%)] z-10 bg-black hidden lg:block"
      >
        <img 
          src="tu-imagen.png" 
          className="w-full h-full object-cover opacity-80 contrast-125" 
          alt="Corte Inferior"
        />
      </div>
      {/* 4. Contenido Principal (Texto y Botones) */}
      <div className="relative flex flex-col items-center justify-center z-10 h-[calc(100vh-6rem)] lg:justify-between lg:items-stretch">
        {/* Bienvenida y botones */}
        <div className="flex flex-col gap-2 items-center lg:justify-start lg:pl-16 lg:items-start">
          <h1 className="text-5xl text-center font-thin text-[var(--color-white)] py-10 sm:text-7xl lg:text-5xl lg:text-left lg:py-0 lg:pt-14 lg:pb-4">
            Bienvenidos a<br /> <span className="font-extrabold italic"> Ladrillos Sur</span>
          </h1>
          {/* Texto mobile */}
          <div className="md: items-end gap-4 pb-10 text-center lg:justify-end lg:items-end lg:pr-10 lg:hidden">
            <p className="text-[var(--color-white)]">Más de 100 años, entregando calidad de vida</p>
          </div>
            <button aria-label="Ver productos" className={`${buttonStylesOrange} cursor-pointer`}>
            Ver productos
            </button>
            <button aria-label="Cotizar ahora" className={`${buttonStylesGreen} cursor-pointer`}>
            Cotizar ahora
            </button>
        </div>
        
        {/* Texto desktop */}
        <div className="hidden lg:flex lg:justify-end lg:items-end lg:pr-16 lg:pb-6 lg:text-[1.65rem]">
          <p className="text-[var(--color-white)] text-right">Más de 100 años, <br />entregando <span className="font-bold">calidad de vida</span></p>
        </div>
      </div>

    </ section>
  );
}