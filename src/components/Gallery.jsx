import React from "react";
import { anniversaryData } from "../data/anniversaryData";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-6">
      {/* Encabezado de la Sección */}
      <ScrollReveal direction="up">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-plum-wine mb-4">
            Nuestra galería de recuerdos
          </h2>
          <div className="h-0.5 w-16 bg-rosewater mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-dusty-rose font-light mt-4 max-w-md mx-auto">
            {anniversaryData.galleryImages.length} momentos mágicos de nuestro camino juntos.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid de Fotos Tipo Scrapbook (Masonry con CSS Columns) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {anniversaryData.galleryImages.map((image, index) => (
          <ScrollReveal
            key={image.id}
            direction="scale"
            delay={(index % 4) * 100}
          >
            <div
              className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-xs border border-white hover:border-rosewater transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Imagen mostrada directamente */}
              <img
                src={image.url}
                alt={`Recuerdo #${image.id}`}
                className="w-full h-auto object-cover block"
                loading="lazy"
                onError={(e) => {
                  // Si hay un error, ocultar esta imagen rota en la vista
                  e.currentTarget.parentElement.style.display = "none";
                }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
