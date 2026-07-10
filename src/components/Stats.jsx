import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { anniversaryData } from "../data/anniversaryData";
import ScrollReveal from "./ScrollReveal";

export default function Stats() {
  const [daysJuntos, setDaysJuntos] = useState(546); // valor de fallback aproximado

  useEffect(() => {
    const startDate = new Date(anniversaryData.relationshipStartDate);
    const calculateDays = () => {
      const now = new Date();
      const differenceMs = now.getTime() - startDate.getTime();
      const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      setDaysJuntos(days);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dashboard"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-6"
    >
      {/* Encabezado de la Sección */}
      <ScrollReveal direction="up">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-plum-wine mb-4">
            Detalles de Nuestro Viaje
          </h2>
          <div className="h-0.5 w-16 bg-rosewater mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-dusty-rose font-light mt-4 max-w-md mx-auto">
            Pequeños detalles llenos de cariño, complicidad y momentos compartidos en estos 18 meses.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid de Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {anniversaryData.stats.map((stat, index) => {
          const IconComponent = Icons[stat.iconName] || Icons.Heart;
          const displayValue = stat.id === "dias-juntos" ? daysJuntos : stat.value;

          return (
            <ScrollReveal key={stat.id} direction="up" delay={index * 150}>
              <div className="glass rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between text-center h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-rosewater">
                {/* Contenedor del Icono con gradiente suave */}
                <div className={`p-4 rounded-2xl bg-gradient-to-tr ${stat.color} mb-6 flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Valor de la Estadística */}
                <span className="text-3xl md:text-4xl font-semibold text-plum-wine tracking-tight mb-2">
                  {displayValue}
                </span>

                {/* Título de la Estadística */}
                <h3 className="text-sm md:text-base font-semibold text-dusty-rose mb-3 uppercase tracking-wider">
                  {stat.label}
                </h3>

                {/* Descripción sutil */}
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
