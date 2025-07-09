import React, { useEffect, useRef } from 'react';

const ScreenshotOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create a subtle pattern that interferes with screenshots
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add invisible watermark pattern
      ctx.globalAlpha = 0.01;
      ctx.fillStyle = '#000000';
      
      for (let x = 0; x < canvas.width; x += 100) {
        for (let y = 0; y < canvas.height; y += 100) {
          ctx.fillText('English Subject Hub - Protected Content', x, y);
        }
      }
      
      ctx.globalAlpha = 1;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: 'difference' }}
    />
  );
};

export default ScreenshotOverlay;