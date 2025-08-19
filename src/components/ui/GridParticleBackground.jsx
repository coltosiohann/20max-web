// src/components/ui/GridParticleBackground.jsx
import React, { useEffect, useRef } from 'react';

const GridParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const particles = [];
    const gridSize = 60;
    
    // Create grid points
    for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          opacity: Math.random() * 0.4 + 0.2,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2
        });
      }
    }

    let animationId;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;
      
      // Draw grid lines with fade effect
      ctx.strokeStyle = 'rgba(220, 53, 69, 0.08)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        const opacity = 0.05 + Math.sin(time + x * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        const opacity = 0.05 + Math.sin(time + y * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate particles
      particles.forEach((particle, index) => {
        // Gentle floating movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary handling with smooth bounce
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Pulse effect
        const pulse = Math.sin(time * particle.pulseSpeed + particle.pulseOffset);
        const currentOpacity = particle.opacity + pulse * 0.2;
        const currentSize = particle.size + pulse * 0.5;
        
        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 53, 69, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
        
        // Add subtle glow for some particles
        if (index % 5 === 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 53, 69, ${Math.max(0, currentOpacity * 0.1)})`;
          ctx.fill();
        }
      });

      // Add some connection lines between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.1;
            ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      // Regenerate particles for new canvas size
      particles.length = 0;
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
          particles.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            opacity: Math.random() * 0.4 + 0.2,
            size: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default GridParticleBackground;