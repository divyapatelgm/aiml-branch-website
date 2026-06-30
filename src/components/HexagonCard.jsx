import React from 'react';

const HexagonCard = ({
  icon: Icon,
  title,
  subtitle,
  colorGradient = 'from-primary to-primary-dark',
  size = 'medium',
  className = '',
  image,
}) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-40 h-40',
    large: 'w-48 h-48',
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Hexagon Card */}
      <div className={`relative hexagon-card cursor-pointer ${sizeClasses[size]} transform-gpu hover:scale-105 transition-all duration-300`}>

        {/* SOLID BACKGROUND */}
        <div
          className="absolute inset-0 hexagon-shape"
          style={{
            zIndex: -3,
            background: colorGradient.includes('primary-dark') ? '#6B4226' :
                        colorGradient.includes('primary') ? '#B47149' :
                        colorGradient.includes('accent') ? '#E26A2C' : '#E9CBA7',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        ></div>

        {/* Secondary Layer */}
        <div
          className="absolute inset-0 hexagon-shape"
          style={{
            zIndex: -2,
            background: colorGradient.includes('primary-dark') ? '#B47149' :
                        colorGradient.includes('primary') ? '#B47149' :
                        colorGradient.includes('accent') ? '#E26A2C' : '#E9CBA7',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        ></div>

        {/* Background Image */}
        {image && (
          <div
            className="absolute inset-0 hexagon-shape opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          />
        )}

        {/* Content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center text-white p-2" style={{ transform: 'translateZ(20px)' }}>
          <div className="mb-2 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" style={{ transformStyle: 'preserve-3d', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <Icon className={`${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-5 h-5' : 'w-6 h-6'}`} />
          </div>
          <h4 className={`font-bold leading-tight group-hover:text-accent transition-all duration-300 ${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'}`} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)', transform: 'translateZ(10px)' }}>
            {title}
          </h4>
          {subtitle && (
            <p className={`text-white/80 text-xs mt-1 leading-tight ${size === 'small' ? 'hidden' : ''}`} style={{ transform: 'translateZ(5px)' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-accent/40 hexagon-shape opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md -z-10" style={{ transform: 'translateZ(-10px) scale(1.1)', filter: 'blur(8px)' }}></div>
      </div>
    </div>
  );
};
