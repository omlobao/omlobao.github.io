import React, { useRef, useState, useEffect } from 'react';

function createRoundedRectPath(width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  return `
    M ${r} 0
    H ${width - r}
    A ${r} ${r} 0 0 1 ${width} ${r}
    V ${height - r}
    A ${r} ${r} 0 0 1 ${width - r} ${height}
    H ${r}
    A ${r} ${r} 0 0 1 0 ${height - r}
    V ${r}
    A ${r} ${r} 0 0 1 ${r} 0
    Z
  `.replace(/\s+/g, ' ').trim();
}

export function FlowButton({
  children,
  size = "default",
  borderColor = "var(--vermilion)",
  className = "",
  onClick,
  href,
  target,
  rel,
  icon: Icon,
  ...props
}) {
  const buttonRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const radiusMap = {
    sm: 14,
    default: 18,
    lg: 22,
  };
  const radius = radiusMap[size] || 18;

  const measure = () => {
    if (buttonRef.current) {
      const { offsetWidth, offsetHeight } = buttonRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  };

  useEffect(() => {
    measure();
  }, [children]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const innerContent = (
    <>
      {Icon && <Icon size={14} className="spell-flow-icon" />}
      <span className="spell-flow-label">{children}</span>
    </>
  );

  return (
    <div className={`spell-flow-wrapper ${className}`}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          className="spell-flow-svg-container"
          style={{ borderRadius: `${radius}px` }}
          aria-hidden="true"
        >
          <svg
            width={dimensions.width}
            height={dimensions.height}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            preserveAspectRatio="none"
            className="spell-flow-svg"
          >
            <path
              d={createRoundedRectPath(dimensions.width, dimensions.height, radius)}
              fill="none"
              stroke={borderColor}
              strokeWidth="1.5"
              strokeDasharray="8,6"
              strokeDashoffset="0"
              className="spell-flow-path"
            />
          </svg>
        </div>
      )}

      {href ? (
        <a
          ref={buttonRef}
          href={href}
          target={target}
          rel={rel}
          className={`spell-flow-element spell-flow-${size}`}
          {...props}
        >
          {innerContent}
        </a>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          onClick={onClick}
          className={`spell-flow-element spell-flow-${size}`}
          {...props}
        >
          {innerContent}
        </button>
      )}
    </div>
  );
}

export default FlowButton;
