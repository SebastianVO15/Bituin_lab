import React from 'react';

interface SiteLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  imageSrc?: string | null;
  alt?: string;
  size?: number | string;
}

const SiteLogo: React.FC<SiteLogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  imageSrc = '/logo.png',
  alt = 'Bituin Lab',
  size,
}) => {
  const style = size ? { width: size, height: 'auto' } : undefined;

  if (imageSrc) {
    return <img src={imageSrc} alt={alt} className={`${className} object-contain`} style={style} />;
  }

  const orange = '#FF6B4A';
  const pink = '#E91E63';
  const primaryFill = variant === 'light' ? '#FFFFFF' : '#1a1a1a';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" className={className} aria-label="Bituin Lab Logo">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={orange} />
          <stop offset="100%" stopColor={pink} />
        </linearGradient>
      </defs>

      <path d="M25 5 L31 18 L45 20 L35 29 L38 43 L25 36 L12 43 L15 29 L5 20 L19 18 Z" fill="url(#starGradient)" stroke={variant === 'light' ? 'white' : 'none'} strokeWidth="0.5" />

      <text x="55" y="35" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="28" fill={primaryFill} letterSpacing="2">
        BITUIN
      </text>

      <text x="170" y="35" fontFamily="Open Sans, sans-serif" fontWeight="300" fontSize="28" fill={primaryFill} letterSpacing="1">
        LAB
      </text>
    </svg>
  );
};

export default SiteLogo;
