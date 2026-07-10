import React, { useState, useEffect } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { anniversaryData } from "../data/anniversaryData";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(anniversaryData.relationshipStartDate);

    const calculateTimeDiff = () => {
      const now = new Date();
      const differenceMs = now.getTime() - startDate.getTime();

      if (differenceMs > 0) {
        const totalSeconds = Math.floor(differenceMs / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const days = Math.floor(totalHours / 24);

        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeDiff();
    const interval = setInterval(calculateTimeDiff, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-between px-4 py-12 md:py-20 overflow-hidden isolate">
      {/* Imagen de fondo nítida y con colores vivos (con overlay muy suave) */}
      <div className="absolute inset-0 -z-20">
        <img
          src="assets/foto7.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Filtro suave de Rosewater sobre la imagen */}
        <div className="absolute inset-0 bg-rosewater/15"></div>
        {/* Degradado suave superior e inferior para integrarse con la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-soft-bg/30 via-transparent to-soft-bg"></div>
      </div>

      {/* Contenedor principal con tarjeta de vidrio esmerilado que engloba el texto y el contador */}
      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-3xl mt-8 px-2">
        <div className="glass rounded-[32px] p-6 md:p-10 w-full shadow-2xl border border-white/50 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Luces sutiles de fondo dentro de la tarjeta */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-rosewater/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rosewater/25 rounded-full blur-2xl -z-10"></div>

          {/* Etiqueta / Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-rosewater/60 shadow-xs mb-5">
            <Heart className="w-4 h-4 text-copper-rose fill-copper-rose animate-beat" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-copper-rose uppercase">
              1 Año y Medio Juntos
            </span>
          </div>

          {/* Título y Descripción */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-plum-wine tracking-tight leading-tight mb-4">
            Nuestra Historia de Amor
          </h1>
          <p className="text-xs md:text-base text-dusty-rose font-light max-w-lg leading-relaxed mb-8">
            Cada segundo a tu lado es un regalo del cielo. Aquí guardo un pedacito de nuestro camino juntos.
          </p>

          {/* CONTADOR EN TIEMPO REAL */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-xl">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="bg-white/75 backdrop-blur-xs rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center shadow-xs border border-white/55 hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl md:text-4xl font-light tracking-tight text-plum-wine font-mono">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-dusty-rose mt-1.5 font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botón estético hacia abajo */}
      <div className="mt-12 md:mt-8">
        <a
          href="#dashboard"
          className="group flex flex-col items-center gap-2 text-xs md:text-sm text-dusty-rose hover:text-copper-rose transition-colors duration-300"
        >
          <span className="tracking-widest font-semibold uppercase">Nuestra bitácora</span>
          <div className="p-2 rounded-full bg-white border border-slate-100 shadow-xs group-hover:border-rosewater group-hover:shadow-md transition-all duration-300 animate-bounce">
            <ChevronDown className="w-4 h-4 text-dusty-rose group-hover:text-copper-rose transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
}
