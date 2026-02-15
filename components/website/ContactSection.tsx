"use client";

import { Mail, Phone, Send } from "lucide-react";

type ContactState = "idle" | "sending" | "success" | "error";

type ContactSectionProps = {
  formState: ContactState;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export function ContactSection({ formState, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-[84px] bg-[#0A0A0A] py-20">
      <div className="mx-auto container w-full px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.24em] text-[#555555]">
                CONTACTO
              </p>
              <div className="mb-6 h-[3px] w-16 bg-[#F2F2F2]" />
              <h2 className="max-w-md text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#F2F2F2] md:text-5xl">
                Hablemos de tu Próximo Evento
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-relaxed text-[#8C8C8C]">
              Nuestro equipo estará encantado de resolver vuestras dudas y
              preguntas. Contratando un artista Cam Art, estarás impulsando un
              movimiento.
            </p>

            <div className="space-y-4 text-[#EAEAEA]">
              <p className="flex items-center gap-3 text-[18px]">
                <Mail className="h-5 w-5" />
                info@camart.es
              </p>
              <p className="flex items-center gap-3 text-[18px]">
                <Phone className="h-5 w-5" />
                +34 600 000 000
              </p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[15px] text-[#F2F2F2]">
                  Nombre
                </label>
                <input
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="h-12 w-full rounded-none border border-[#2F2F2F] bg-[#121212] px-4 text-base font-thin text-[#F2F2F2] outline-none placeholder:text-[#6D6D6D] focus:border-[#5B5B5B]"
                />
              </div>
              <div>
                <label className="mb-2 block text-[15px] text-[#F2F2F2]">
                  Apellido
                </label>
                <input
                  name="lastname"
                  placeholder="Tu apellido"
                  required
                  className="h-12 w-full rounded-none border border-[#2F2F2F] bg-[#121212] px-4 text-base font-thin text-[#F2F2F2] outline-none placeholder:text-[#6D6D6D] focus:border-[#5B5B5B]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[15px] text-[#F2F2F2]">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="h-12 w-full rounded-none border border-[#2F2F2F] bg-[#121212] px-4 text-base font-thin text-[#F2F2F2] outline-none placeholder:text-[#6D6D6D] focus:border-[#5B5B5B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] text-[#F2F2F2]">
                Mensaje
              </label>
              <textarea
                name="message"
                placeholder="Tu mensaje..."
                required
                className="min-h-[170px] w-full rounded-none border border-[#2F2F2F] bg-[#121212] px-4 py-3 text-base font-thin text-[#F2F2F2] outline-none placeholder:text-[#6D6D6D] focus:border-[#5B5B5B]"
              />
            </div>

            <label className="flex items-center gap-3 text-[15px] text-[#8C8C8C]">
              <input
                type="checkbox"
                name="newsletter"
                className="h-4 w-4 rounded-none border border-[#333333] bg-transparent text-base font-thin"
              />
              Acepto recibir noticias, fechas de gira y ofertas especiales.
            </label>

            <button
              type="submit"
              disabled={formState === "sending"}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-none bg-[#F2F2F2] px-6 text-base font-semibold text-[#0A0A0A] transition hover:bg-white disabled:opacity-70 md:text-lg"
            >
              {formState === "sending" ? "Enviando..." : "Enviar Mensaje"}
              <Send className="h-4 w-4" />
            </button>

            {formState === "success" && (
              <p className="text-sm text-green-400">
                Mensaje enviado correctamente.
              </p>
            )}
            {formState === "error" && (
              <p className="text-sm text-red-400">
                No se pudo enviar el mensaje. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
