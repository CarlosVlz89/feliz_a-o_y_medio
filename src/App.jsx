import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import FloatingHearts from "./components/FloatingHearts";
import MusicPlayer from "./components/MusicPlayer";
import { Heart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-soft-gray text-slate-700 selection:bg-rosewater selection:text-plum-wine">
      {/* Elementos Interactivos Globales */}
      <FloatingHearts />
      <MusicPlayer />

      {/* 1. HERO SECTION (Bienvenida y Contador en Tiempo Real) */}
      <Hero />

      {/* Separador estético suave */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      {/* 2. DASHBOARD DE ESTADÍSTICAS (Métricas divertidas) */}
      <Stats />

      {/* Separador estético suave */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      {/* 3. GALERÍA MODULAR DE RECUERDOS (22 Fotos y Lightbox) */}
      <Gallery />

      {/* Separador estético suave */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      {/* 4. CARTA INTERACTIVA Y VIDEO (El cierre) */}
      <Letter />

      {/* FOOTER (Cierre romántico) */}
      <footer className="py-12 border-t border-rosewater/20 text-center">
        <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-3">
          <div className="p-3 rounded-full bg-red-50 text-red-500">
            <Heart className="w-5 h-5 fill-red-500 text-red-500 animate-pulse" />
          </div>
          <p className="font-serif text-lg font-light text-plum-wine">
            Feliz año y medio, mi vida. Te amo.
          </p>
          <p className="text-xs text-slate-400 font-light">
            Diseñado y desarrollado con todo el amor del mundo. <br />
            10 de enero de 2025 — 10 de julio de 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
