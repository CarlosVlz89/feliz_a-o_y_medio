import React, { useState } from "react";
import { Mail, Heart } from "lucide-react";
import { anniversaryData } from "../data/anniversaryData";
import ScrollReveal from "./ScrollReveal";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Lanzar el evento de explosión de corazones en toda la pantalla
    window.dispatchEvent(new CustomEvent("heart-explosion"));
  };

  return (
    <section id="carta" className="py-20 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-6">
      {/* Encabezado de la Sección */}
      <ScrollReveal direction="up">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-plum-wine mb-4">
            Una carta para ti
          </h2>
          <div className="h-0.5 w-16 bg-rosewater mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-dusty-rose font-light mt-4 max-w-md mx-auto">
            Para la persona que le da color y sentido a mi vida. He escrito algo muy especial para ti, Jenny.
          </p>
        </div>
      </ScrollReveal>

      {/* CONTENEDOR DEL SOBRE INTERACTIVO */}
      <div className="flex flex-col items-center justify-center min-h-[400px] w-full py-8">
        {!isOpen ? (
          /* VISTA DEL SOBRE CERRADO */
          <ScrollReveal direction="scale">
            <div
              onClick={handleOpenLetter}
              className="group relative w-full max-w-lg aspect-[1.6/1] bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-rosewater flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Detalles decorativos en las esquinas */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rosewater/45 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-rosewater/45 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-rosewater/45 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rosewater/45 rounded-br-lg"></div>

              {/* Sello de lacre / Botón interactivo */}
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-rosewater/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative p-6 rounded-full bg-rosewater/10 border border-rosewater/30 text-copper-rose group-hover:bg-rosewater/25 transition-all duration-500">
                  <Mail className="w-10 h-10 animate-bounce" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-light text-plum-wine mb-2">
                Para mi changuito consentido 🐒❤️
              </h3>
              <p className="text-xs md:text-sm text-dusty-rose font-light mb-4 px-4">
                Dieciocho meses de risas, apoyo infinito y de compartir este camino juntos.
              </p>
              <button className="px-6 py-2.5 rounded-full bg-copper-rose text-white font-semibold text-xs tracking-wider uppercase shadow-xs hover:bg-copper-rose/90 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                <Heart className="w-3.5 h-3.5 fill-white" />
                Abrir con amor
              </button>
            </div>
          </ScrollReveal>
        ) : (
          /* VISTA DE LA CARTA ABIERTA */
          <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 md:p-12 animate-scale-up relative">
            {/* Detalle decorativo de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rosewater/20 to-transparent rounded-tr-3xl -z-10"></div>

            {/* Encabezado de la Carta */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-6 mb-8">
              <div>
                <h3 className="font-serif text-3xl font-light text-plum-wine mb-1">
                  {anniversaryData.loveLetter.title}
                </h3>
                <span className="text-xs text-dusty-rose font-mono tracking-wider">
                  10 de enero de 2025 — 10 de julio de 2026
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-dusty-rose hover:text-plum-wine border border-slate-200 hover:border-rosewater rounded-full px-3 py-1.5 transition-colors cursor-pointer"
              >
                Cerrar sobre
              </button>
            </div>

            {/* Cuerpo de la Carta */}
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-sm md:text-base md:px-4">
              <p className="font-serif italic text-lg text-plum-wine font-semibold mb-2">
                {anniversaryData.loveLetter.greeting}
              </p>
              
              {anniversaryData.loveLetter.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify font-sans">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-slate-50 text-right">
                <p className="font-serif italic text-dusty-rose mb-1">
                  {anniversaryData.loveLetter.closing}
                </p>
                <p className="font-serif text-lg font-semibold text-plum-wine">
                  {anniversaryData.loveLetter.signature}
                </p>
              </div>
            </div>

            {/* SECCIÓN DEL VIDEO */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="text-center mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-copper-rose block mb-2">
                  Nuestra memoria en video
                </span>
                <p className="text-xs text-dusty-rose font-light max-w-sm mx-auto">
                  compartiendo cada momento juntos
                </p>
              </div>

              {/* Reproductor de Video */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-md border border-rosewater max-w-xl mx-auto group">
                <video
                  src={anniversaryData.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const fallbackOverlay = e.currentTarget.nextElementSibling;
                    if (fallbackOverlay) fallbackOverlay.classList.remove("hidden");
                  }}
                >
                  Tu navegador no soporta la reproducción de video.
                </video>

                {/* Pantalla de Fallback (Placeholder) */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-6 text-slate-300 hidden">
                  <span className="text-sm font-semibold tracking-wider text-rosewater uppercase">Video del aniversario</span>
                  <span className="text-xs font-mono text-slate-500 mt-2 break-all">{anniversaryData.videoUrl}</span>
                  <p className="text-[11px] text-slate-400 mt-4 max-w-xs leading-normal">
                    (Coloca tu video local en la ruta del proyecto para reproducirlo aquí)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
