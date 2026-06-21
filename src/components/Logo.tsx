export const Logo = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill={color}>
      <ellipse cx="32" cy="32" rx="14" ry="18" transform="rotate(-45 32 32)" />
      <ellipse cx="68" cy="32" rx="14" ry="18" transform="rotate(45 68 32)" />
      <ellipse cx="32" cy="68" rx="14" ry="18" transform="rotate(45 32 68)" />
      <ellipse cx="68" cy="68" rx="14" ry="18" transform="rotate(-45 68 68)" />
    </g>
  </svg>
);
