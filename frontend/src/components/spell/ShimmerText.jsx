import React from 'react';

export function ShimmerText({
  children,
  className = "",
  style = {},
  variant = "vermilion", // "vermilion" | "cosmic" | "silver" | "emerald"
}) {
  return (
    <span
      className={`spell-shimmer-text spell-shimmer-${variant} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

export default ShimmerText;
