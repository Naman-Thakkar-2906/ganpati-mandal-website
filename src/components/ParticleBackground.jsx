import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Depth simulation (z-index concept). Higher z = closer = bigger & faster
        this.z = Math.random() * 3 + 1; 
        this.size = this.z * 1.5;
        this.baseSpeedX = (Math.random() * 0.5 - 0.25) * this.z;
        this.baseSpeedY = (Math.random() * -0.5 - 0.2) * this.z;
        this.opacity = (this.z / 4) * 0.8 + 0.1;
      }

      update() {
        // Subtle parallax effect based on mouse position
        const dx = (mouseX - canvas.width / 2) * 0.0001 * this.z;
        const dy = (mouseY - canvas.height / 2) * 0.0001 * this.z;

        this.x += this.baseSpeedX - dx;
        this.y += this.baseSpeedY - dy;

        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
      }

      draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow to larger particles
        if (this.z > 2.5) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      particles = [];
      const numParticles = window.innerWidth < 768 ? 40 : 100; // Adjusted for mobile performance
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
