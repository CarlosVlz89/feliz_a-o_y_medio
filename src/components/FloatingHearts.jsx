import React, { useEffect, useRef } from "react";

export default function FloatingHearts() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = [];
    const maxParticles = 30; // Partículas flotantes de fondo normales

    const colors = [
      "rgba(216, 166, 148, 0.45)", // rosewater
      "rgba(224, 203, 185, 0.45)", // china doll
      "rgba(171, 136, 130, 0.35)", // dusty rose
      "rgba(168, 106, 101, 0.4)",  // copper rose
    ];

    // Partícula normal flotante (sube de abajo a arriba)
    class FloatingParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 20;
        this.size = Math.random() * 8 + 5;
        this.speedY = -(Math.random() * 0.8 + 0.4);
        this.speedX = Math.random() * 0.4 - 0.2;
        this.wobble = Math.random() * Math.PI;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.type = Math.random() > 0.55 ? "heart" : "petal";
      }

      update() {
        this.y += this.speedY;
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.25;

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (this.type === "heart") {
          drawHeartShape(this.x, this.y, this.size);
        } else {
          ctx.ellipse(this.x, this.y, this.size * 0.5, this.size, Math.sin(this.wobble) * 0.4, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    }

    // Partícula de explosión (se expande desde el centro con gravedad y desvanecimiento)
    class ExplosionParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 12 + 6; // ligeramente más grandes
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2; // velocidad radial
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.gravity = 0.08; // cae lentamente
        this.alpha = 1.0;
        this.decay = Math.random() * 0.012 + 0.008; // desvanecimiento
        this.colorIndex = Math.floor(Math.random() * colors.length);
        this.type = Math.random() > 0.5 ? "heart" : "petal";
        this.wobble = Math.random() * Math.PI;
        this.wobbleSpeed = Math.random() * 0.1 - 0.05;
      }

      update() {
        this.x += this.speedX;
        this.speedY += this.gravity;
        this.y += this.speedY;
        this.alpha -= this.decay;
        this.wobble += this.wobbleSpeed;
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Asignar el color correspondiente de la paleta
        ctx.fillStyle = colors[this.colorIndex];
        ctx.beginPath();
        
        if (this.type === "heart") {
          drawHeartShape(this.x, this.y, this.size);
        } else {
          ctx.ellipse(this.x, this.y, this.size * 0.5, this.size, this.wobble, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    // Función auxiliar para dibujar corazones
    function drawHeartShape(x, y, size) {
      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y + size / 4);
      ctx.bezierCurveTo(x - size, y + size * 0.8, x, y + size * 1.3, x, y + size * 1.4);
      ctx.bezierCurveTo(x, y + size * 1.3, x + size, y + size * 0.8, x + size, y + size / 4);
      ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y + size / 4);
    }

    // Inicializar partículas flotantes
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new FloatingParticle());
    }

    // Escuchar el evento personalizado de explosión de corazones
    const triggerExplosion = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Crear 60 partículas de explosión
      for (let i = 0; i < 60; i++) {
        particles.push(new ExplosionParticle(centerX, centerY));
      }
    };
    window.addEventListener("heart-explosion", triggerExplosion);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Actualizar y dibujar partículas, filtrando las que se desvanecieron por completo
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        
        // Si es una partícula de explosión terminada, la eliminamos del array
        if (p instanceof ExplosionParticle && p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        p.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("heart-explosion", triggerExplosion);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 select-none"
    />
  );
}
