import React from 'react';

interface ClientLogoCardProps {
  name: string;
  image: string;
  fallbackUrl: string;
  alt: string;
  sizeClass?: string;
}

const LeadnicsVectorLogo: React.FC = () => (
  <svg
    viewBox="0 0 210 50"
    className="h-8 sm:h-9 w-auto max-w-[130px] sm:max-w-[150px] object-contain transition-all duration-300 group-hover:scale-105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Leadnics Logo"
  >
    <defs>
      <linearGradient id="leadnics-grad-card" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9447" />
        <stop offset="100%" stopColor="#FF6004" />
      </linearGradient>
      <filter id="leadnics-glow-card" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#FF7A20" floodOpacity="0.4" />
      </filter>
    </defs>
    <g transform="translate(4, 5)">
      <path
        d="M4 14V8C4 5.79 5.79 4 8 4H14"
        stroke="url(#leadnics-grad-card)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M34 26V32C34 34.21 32.21 36 30 36H24"
        stroke="url(#leadnics-grad-card)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="19" cy="20" r="5" fill="url(#leadnics-grad-card)" filter="url(#leadnics-glow-card)" />
      <path
        d="M11 12C13.1 9.9 16 8.5 19 8.5C22 8.5 24.9 9.9 27 12"
        stroke="#FF7A20"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M27 28C24.9 30.1 22 31.5 19 31.5C16 31.5 13.1 30.1 11 28"
        stroke="#FF7A20"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </g>
    <text
      x="52"
      y="32"
      className="fill-[#00519E] dark:fill-white font-extrabold text-[21px] tracking-[0.07em] transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      LEADNICS
    </text>
  </svg>
);

const AaravNexusVectorLogo: React.FC = () => (
  <svg
    viewBox="0 0 220 50"
    className="h-8 sm:h-9 w-auto max-w-[135px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Aarav Nexus Logo"
  >
    <defs>
      <linearGradient id="aarav-grad-card" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <filter id="aarav-glow-card" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#06B6D4" floodOpacity="0.45" />
      </filter>
    </defs>
    <g transform="translate(4, 5)">
      <path
        d="M17 4L3 36H11L21 13L31 36H39L25 4H17Z"
        fill="url(#aarav-grad-card)"
        filter="url(#aarav-glow-card)"
      />
      <path d="M11 26L21 17L31 26L21 35L11 26Z" fill="#06B6D4" opacity="0.9" />
      <circle cx="21" cy="26" r="2.8" fill="#FFFFFF" />
    </g>
    <text
      x="54"
      y="24"
      className="fill-[#0A142A] dark:fill-white font-black text-[16px] tracking-[0.14em] transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      AARAV
    </text>
    <text
      x="54"
      y="38"
      className="fill-[#0891B2] dark:fill-[#22D3EE] font-bold text-[11px] tracking-[0.26em] transition-colors duration-200"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      NEXUS
    </text>
  </svg>
);

export const ClientLogoCard: React.FC<ClientLogoCardProps> = ({
  name,
  image,
  fallbackUrl,
  alt,
  sizeClass,
}) => {
  const isLeadnics = name.toLowerCase().includes('leadnics') || alt.toLowerCase().includes('leadnics');
  const isAaravNexus = name.toLowerCase().includes('aarav') || alt.toLowerCase().includes('aarav');

  return (
    <div
      className="w-44 sm:w-52 h-18 sm:h-20 shrink-0 flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#F6F5F2]/90 dark:bg-[#1C1B20]/90 border border-[#E5E3DC] dark:border-white/[0.08] shadow-2xs dark:shadow-none hover:border-[#FF6004]/40 dark:hover:border-[#FF6004]/40 transition-all duration-300 group select-none"
      title={name}
    >
      {isLeadnics ? (
        <LeadnicsVectorLogo />
      ) : isAaravNexus ? (
        <AaravNexusVectorLogo />
      ) : (
        <img
          src={image}
          alt={alt}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            if (target.src !== fallbackUrl) {
              target.src = fallbackUrl;
            }
          }}
          className={`client-logo-raster-invert max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-105 ${
            sizeClass || ''
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
};
