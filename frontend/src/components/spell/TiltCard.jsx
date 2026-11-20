import React, { useRef, useState, useCallback } from 'react';

export function TiltCard({
  tiltLimit = 8,
  scale = 1.01,
  perspective = 1000,
  effect = "evade",
  spotlight = true,
  className = "",
  style = {},
  children,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  );
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const dir = effect === "evade" ? -1 : 1;

  const handlePointerMove = useCallback(
    (e) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const xRot = (py - 0.5) * (tiltLimit * 2) * dir;
      const yRot = (px - 0.5) * -(tiltLimit * 2) * dir;
      setTransform(
        `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      if (spotlight) {
        setSpotlightPos({ x: px * 100, y: py * 100 });
      }
    },
    [tiltLimit, scale, perspective, dir, spotlight]
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    setIsHovered(false);
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`spell-tilt-card ${className}`}
      style={{
        position: 'relative',
        transform,
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
      {...props}
    >
      {children}
      {spotlight && (
        <div
          className="spell-tilt-spotlight"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
            overflow: 'hidden',
            borderRadius: 'inherit',
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: 'absolute',
              width: '180%',
              height: '180%',
              borderRadius: '50%',
              left: `${spotlightPos.x}%`,
              top: `${spotlightPos.y}%`,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(129, 140, 248, 0.06) 40%, transparent 70%)",
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default TiltCard;
