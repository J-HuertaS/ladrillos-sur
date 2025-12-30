"use client";

import { useState } from "react";

export default function ContactForm() {

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
    const [showPrivacy, setShowPrivacy] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("sending")

        const form = e.currentTarget
        const data = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xaqygpnn", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            })

            if (response.ok) {
                setStatus("success")
                form.reset()
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return (

        <div className="order-1 lg:order-2 flex flex-col justify-center">

            {showPrivacy && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setShowPrivacy(false)}
                    />

                    {/* Modal */}
                    <div className="relative bg-white max-w-2xl w-full mx-4 p-6 shadow-lg z-10">
                        <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">
                            Política de privacidad y tratamiento de datos
                        </h3>

                        <div className="text-sm text-gray-600 space-y-3 max-h-[60vh] overflow-y-auto">
                            <p>
                                De acuerdo con la Ley Estatutaria 1581 de 2012 de Protección de Datos y con el
                                Decreto 1074 de 2015, autorizo como titular de mis datos personales, que éstos
                                sean incorporados en una base de datos responsabilidad de LADRILLOS SUR S.A.S.,
                                los cuáles serán tratados con las finalidades estipuladas en el manual de
                                políticas y procedimientos al cual podré tener acceso a través del correo
                                electrónico:{" "}
                                <strong>gerenciacomercial@ladrillossur.com</strong>, y en especial para el
                                registro de mis datos personales en el presente formulario.
                            </p>
                            <p>
                                De igual modo, declaro haber sido informado de que puedo ejercitar los derechos
                                de acceso, corrección, supresión, revocación o reclamo por infracción sobre mis
                                datos, mediante escrito dirigido a LADRILLOS SUR S.A.S., a la dirección de correo
                                electrónico antes mencionada, indicando en el asunto el derecho que desea
                                ejercitar.
                            </p>
                        </div>

                        <div className="flex justify-center items-centert">
                            <button
                                onClick={() => setShowPrivacy(false)}
                                className="mt-6 w-full max-w-xs border border-gray-300 py-2 uppercase text-xs text-[var(--color-secondary)] tracking-widest hover:bg-gray-100 transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <div className="bg-white border border-gray-200 p-8 lg:p-12 shadow-sm">
                <h2 className="font-serif font-medium text-3xl mb-3 italic text-[var(--color-primary)]">Envíenos un mensaje</h2>
                <p className="text-gray-500 mb-8">Complete el formulario y nos pondremos en contacto.</p>

                <form className="space-y-6 text-[var(--color-black)]"
                    onSubmit={handleSubmit}
                >
                    {/* Fila 1: Nombre y Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-700">
                                Nombre
                            </label>
                            <input
                                required
                                aria-required="true"
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Su nombre"
                                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="empresa" className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-700">
                                Empresa
                            </label>
                            <input
                                id="empresa"
                                name="empresa"
                                type="text"
                                placeholder="Nombre de empresa"
                                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Fila 2: Email y Teléfono */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-700">
                                Email
                            </label>
                            <input
                                required
                                aria-required="true"
                                id="email"
                                name="_replyto"
                                type="email"
                                placeholder="correo@ejemplo.com"
                                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                            />

                        </div>
                        <div>
                            <label htmlFor="telefono" className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-700">
                                Teléfono
                            </label>
                            <input
                                id="telefono"
                                name="telefono"
                                type="tel"
                                placeholder="312 521 6075"
                                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Fila 3: Asunto */}
                    <input
                        id="asunto"
                        name="_subject"
                        type="hidden"
                        value="Nuevo mensaje desde página web de Ladrillos Sur"
                        className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                    />

                    {/* Fila 4: Mensaje */}
                    <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium mb-2 uppercase tracking-wider text-gray-700">
                            Mensaje
                        </label>
                        <textarea
                            required
                            aria-required="true"
                            id="mensaje"
                            name="mensaje"
                            placeholder="Cuéntenos sobre su proyecto..."
                            rows={6}
                            className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 resize-none transition-colors"
                        ></textarea>
                    </div>

                    <input type="text" name="_gotcha" className="hidden" />

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            id="privacy"
                            required
                            className="ml-2 mt-1 accent-[var(--color-primary)] cursor-pointer"
                        />

                        <label htmlFor="privacy" className="leading-relaxed">
                            He leído y acepto la{" "}
                            <button
                                type="button"
                                onClick={() => setShowPrivacy(true)}
                                className="underline text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors cursor-pointer"
                            >
                                política de privacidad y tratamiento de datos
                            </button>.
                        </label>
                    </div>

                    {/* Botón de Enviar */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)] active:scale-95 text-white rounded-none py-4 uppercase tracking-widest text-sm font-bold transition-colors duration-200"
                    >
                        Enviar mensaje
                    </button>

                    {status === "success" && (
                        <div className="bg-green-50 border border-green-200 text-green-800 p-4 text-sm">
                            ✅ Mensaje enviado correctamente. Pronto nos pondremos en contacto.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-800 p-4 text-sm">
                            ❌ Ocurrió un error. Intente nuevamente.
                        </div>
                    )}

                    

                </form>
            </div>
        </div>

    );
}