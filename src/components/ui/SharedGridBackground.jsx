// src/components/ui/GridParticleBackground.jsx - Fixed particle system with full coverage
import React, { useEffect, useRef } from 'react';

const GridParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize particles after resize
      initializeParticles();
    };
    
    let particles = [];
    const gridSize = 20; // Smaller grid for more density
    
    const initializeParticles = () => {
      particles = []; // Clear existing particles
      
      // Create dense grid of particles - FIXED: proper grid calculation
      const cols = Math.ceil(canvas.width / gridSize) + 4; // Extra columns for coverage
      const rows = Math.ceil(canvas.height / gridSize) + 4; // Extra rows for coverage
      
      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const x = col * gridSize;
          const y = row * gridSize;
          particles.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            opacity: Math.random() * 0.6 + 0.4,
            size: Math.random() * 2.5 + 1.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            pulseSpeed: Math.random() * 0.04 + 0.02,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      }

      // Add many more random particles scattered everywhere - INCREASED COUNT
      for (let i = 0; i < 500; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          opacity: Math.random() * 0.5 + 0.3,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          pulseSpeed: Math.random() * 0.035 + 0.015,
          pulseOffset: Math.random() * Math.PI * 2
        });
      }

      // Add floating particles in more clusters - INCREASED CLUSTERS
      for (let cluster = 0; cluster < 8; cluster++) {
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        
        for (let i = 0; i < 75; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 120;
          particles.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            baseX: centerX + Math.cos(angle) * radius,
            baseY: centerY + Math.sin(angle) * radius,
            opacity: Math.random() * 0.4 + 0.2,
            size: Math.random() * 1.5 + 0.8,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            pulseSpeed: Math.random() * 0.03 + 0.01,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      }

      // Add edge particles to ensure full coverage
      for (let i = 0; i < 200; i++) {
        let x, y;
        const edge = Math.floor(Math.random() * 4);
        
        switch(edge) {
          case 0: // top edge
            x = Math.random() * canvas.width;
            y = Math.random() * 50;
            break;
          case 1: // right edge
            x = canvas.width - Math.random() * 50;
            y = Math.random() * canvas.height;
            break;
          case 2: // bottom edge
            x = Math.random() * canvas.width;
            y = canvas.height - Math.random() * 50;
            break;
          case 3: // left edge
            x = Math.random() * 50;
            y = Math.random() * canvas.height;
            break;
        }
        
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          opacity: Math.random() * 0.5 + 0.3,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          pulseSpeed: Math.random() * 0.035 + 0.015,
          pulseOffset: Math.random() * Math.PI * 2
        });
      }
    };
    
    resizeCanvas();
    let animationId;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;
      
      // Draw very dense grid lines - FIXED: proper grid line coverage
      ctx.strokeStyle = 'rgba(220, 53, 69, 0.12)';
      ctx.lineWidth = 1;
      
      // Many vertical lines - ensure full width coverage
      for (let x = 0; x <= canvas.width + gridSize; x += gridSize) {
        const opacity = 0.08 + Math.sin(time + x * 0.005) * 0.05;
        ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Many horizontal lines - ensure full height coverage
      for (let y = 0; y <= canvas.height + gridSize; y += gridSize) {
        const opacity = 0.08 + Math.sin(time + y * 0.005) * 0.05;
        ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate ALL particles
      particles.forEach((particle, index) => {
        // Enhanced movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary wrapping for continuous effect - IMPROVED wrapping
        const margin = 20;
        if (particle.x < -margin) particle.x = canvas.width + margin;
        if (particle.x > canvas.width + margin) particle.x = -margin;
        if (particle.y < -margin) particle.y = canvas.height + margin;
        if (particle.y > canvas.height + margin) particle.y = -margin;
        
        // Strong pulse effect
        const pulse = Math.sin(time * particle.pulseSpeed + particle.pulseOffset);
        const currentOpacity = particle.opacity + pulse * 0.4;
        const currentSize = particle.size + pulse * 1.2;
        
        // Draw main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 53, 69, ${Math.max(0.1, currentOpacity)})`;
        ctx.fill();
        
        // Add glow to every particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 53, 69, ${Math.max(0.02, currentOpacity * 0.2)})`;
        ctx.fill();
        
        // Add extra bright glow to some particles
        if (index % 4 === 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize * 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 53, 69, ${Math.max(0.01, currentOpacity * 0.1)})`;
          ctx.fill();
        }
      });

      // Draw connection lines between many particles - OPTIMIZED for more particles
      for (let i = 0; i < particles.length; i += 2) { // Check every 2nd particle instead of 3rd
        const particle = particles[i];
        
        for (let j = i + 1; j < Math.min(particles.length, i + 12); j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 85) { // Slightly longer connection distance
            const opacity = (85 - distance) / 85 * 0.25;
            ctx.strokeStyle = `rgba(220, 53, 69, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
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
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ 
        zIndex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
  );
};

export default GridParticleBackground;