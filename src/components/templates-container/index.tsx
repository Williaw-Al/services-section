import React, { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  visibleCount?: number;
}

export const TemplatesContainer: React.FC<CarouselProps> = ({ children, visibleCount = 4 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLeft, setHasLeft] = useState(false);
  const [hasRight, setHasRight] = useState(false);

  const updateFades = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setHasLeft(scrollLeft > 0);
      setHasRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 para tolerância
    }
  };

  useEffect(() => {
    updateFades();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateFades);
      // Atualiza no resize, caso visibleCount mude ou layout
      window.addEventListener('resize', updateFades);
      return () => {
        container.removeEventListener('scroll', updateFades);
        window.removeEventListener('resize', updateFades);
      };
    }
  }, [children, visibleCount]);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Esconde scrollbar no Firefox
          msOverflowStyle: 'none', // Esconde no IE/Edge
          WebkitOverflowScrolling: 'touch', // Smooth scroll no iOS
        }}
        onScroll={updateFades}
      >
        {/* Esconde scrollbar no Chrome/Safari */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {React.Children.map(children, (child) => (
          <div
            style={{
              flex: `0 0 ${100 / visibleCount}%`,
              scrollSnapAlign: 'start',
              minWidth: `${100 / visibleCount}%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Fade esquerdo */}
      {hasLeft && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50px', // Ajuste a largura do fade
            height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Fade direito */}
      {hasRight && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50px', // Ajuste a largura do fade
            height: '100%',
            background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};