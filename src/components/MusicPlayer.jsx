import React, { useState, useRef, useEffect } from "react";
import { Music, Music2, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);

  // Intentar reproducir la música al primer clic o toque en cualquier parte del sitio (Autoplay)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(true); // Mostrar tooltip indicando que suba el volumen
            // Ocultar el aviso de subir volumen en 8 segundos
            setTimeout(() => {
              setShowTooltip(false);
            }, 8000);
          })
          .catch((err) => {
            console.log("Autoplay bloqueado por el navegador hasta una mayor interacción.", err);
          });
      }
      // Remover los listeners tras la primera interacción
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.log("Error al reproducir música.", err);
          alert("Coloca tu canción 'Vengo del futuro' en public/assets/vengo-del-futuro.mp3 para escucharla aquí. 😊");
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip flotante con aviso de volumen */}
      {showTooltip && (
        <div className="bg-white/95 text-plum-wine text-[11px] md:text-xs px-3.5 py-2 rounded-2xl shadow-md border border-rosewater animate-bounce whitespace-nowrap backdrop-blur-xs font-medium">
          {isPlaying ? (
            <span>🔊 ¡Sube el volumen para escuchar! 💖</span>
          ) : (
            <span>🎵 Toca la pantalla y sube el volumen...</span>
          )}
        </div>
      )}

      {/* Botón flotante del reproductor de música */}
      <button
        onClick={togglePlay}
        className={`p-4 rounded-full shadow-lg border cursor-pointer transition-all duration-500 flex items-center justify-center relative group ${
          isPlaying
            ? "bg-rosewater/20 border-rosewater text-copper-rose animate-spin-slow"
            : "bg-white border-slate-100 text-slate-400 hover:border-rosewater hover:text-copper-rose hover:-translate-y-1 hover:shadow-xl"
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música de fondo"}
      >
        {isPlaying ? (
          <>
            <Music className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 p-1 rounded-full bg-copper-rose text-white scale-75 animate-pulse">
              <Volume2 className="w-3 h-3" />
            </span>
          </>
        ) : (
          <Music2 className="w-5 h-5" />
        )}
      </button>

      {/* Elemento de audio HTML5 oculto */}
      <audio
        ref={audioRef}
        src="/assets/vengo-del-futuro.mp3"
        loop
        preload="auto"
      />
    </div>
  );
}
