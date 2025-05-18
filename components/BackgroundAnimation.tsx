"use client";

import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Circles configuration
    const circlesCount = 15;
    const circles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];

    // Initialize circles
    const colors = ['rgba(11, 206, 175, 0.2)', 'rgba(255, 111, 97, 0.15)', 'rgba(107, 91, 149, 0.1)'];
    
    for (let i = 0; i < circlesCount; i++) {
      const radius = Math.random() * 100 + 50;
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update circles
      circles.forEach(circle => {
        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();

        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Boundary check
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.dx = -circle.dx;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.dy = -circle.dy;
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundAnimation;