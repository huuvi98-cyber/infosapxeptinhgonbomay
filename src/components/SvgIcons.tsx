import React from 'react';

export interface IconProps {
  className?: string;
}

// 1. Personnel / Apparatus Restructuring Icon (Matching blue document stack & personnel transfer)
export const PersonnelIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="25" y="20" width="45" height="60" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
    <rect x="35" y="30" width="25" height="4" rx="2" fill="#0284C7" />
    <rect x="35" y="40" width="25" height="4" rx="2" fill="#38BDF8" />
    <rect x="35" y="50" width="18" height="4" rx="2" fill="#0284C7" />
    
    {/* Personnel Avatar 1 */}
    <circle cx="28" cy="72" r="6" fill="#F59E0B" />
    <path d="M18 88C18 80 22 78 28 78C34 78 38 80 38 88" fill="#0284C7" />
    
    {/* Curved Transfer Arrow */}
    <path d="M50 45 Q75 35 75 60 T90 70" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
    <polygon points="90,65 96,74 85,73" fill="#059669" />

    {/* Personnel Avatar 2 (Streamlined & Reorganized) */}
    <circle cx="85" cy="45" r="7" fill="#F59E0B" />
    <path d="M73 62C73 53 78 51 85 51C92 51 97 53 97 62" fill="#1E3A8A" />
  </svg>
);

// 2. Piggy Bank / Savings Icon (Matching orange piggy bank with coins & dollar stack)
export const PiggyBankIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Piggy Body */}
    <ellipse cx="65" cy="65" rx="32" ry="24" fill="#FF8A65" stroke="#E65100" strokeWidth="2.5" />
    <circle cx="42" cy="55" r="14" fill="#FF8A65" stroke="#E65100" strokeWidth="2.5" />
    <ellipse cx="36" cy="58" rx="6" ry="4" fill="#FFAB91" />
    <circle cx="44" cy="52" r="2" fill="#3E2723" />
    
    {/* Piggy Ears & Legs */}
    <path d="M48 43 L54 32 L58 42 Z" fill="#FF8A65" stroke="#E65100" strokeWidth="2" />
    <rect x="50" y="85" width="8" height="12" rx="3" fill="#E65100" />
    <rect x="72" y="85" width="8" height="12" rx="3" fill="#E65100" />
    
    {/* Coin Slot & Drop Coin */}
    <rect x="62" y="42" width="12" height="3" fill="#BF360C" />
    <circle cx="68" cy="28" r="10" fill="#FFD54F" stroke="#FF8F00" strokeWidth="2" />
    <text x="65" y="32" fontSize="11" fontWeight="bold" fill="#E65100">$</text>

    {/* Gold Coins Stack Side */}
    <circle cx="22" cy="82" r="7" fill="#FFD54F" stroke="#FF8F00" strokeWidth="2" />
    <circle cx="28" cy="85" r="7" fill="#FFCA28" stroke="#FF8F00" strokeWidth="2" />
  </svg>
);

// 3. Portal / Administrative Terminal Kiosk Icon (Matching terminal & citizen)
export const PortalTerminalIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Kiosk Machine */}
    <rect x="15" y="40" width="30" height="55" rx="4" fill="#ECEFF1" stroke="#455A64" strokeWidth="2.5" />
    <rect x="20" y="48" width="20" height="22" rx="2" fill="#0284C7" />
    <circle cx="30" cy="59" r="6" fill="#E0F2FE" />
    <line x1="22" y1="78" x2="38" y2="78" stroke="#78909C" strokeWidth="3" strokeLinecap="round" />

    {/* Laptop Screen with Checkmark */}
    <rect x="52" y="32" width="38" height="26" rx="3" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
    <rect x="55" y="35" width="32" height="20" fill="#FFFFFF" />
    <circle cx="71" cy="45" r="6" fill="#10B981" />
    <path d="M68 45 L70 47 L74 43" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Citizen Figure */}
    <circle cx="98" cy="45" r="6" fill="#FFB74D" />
    <path d="M88 62 L98 52 L108 62 L108 88 L88 88 Z" fill="#FB8C00" />
    <rect x="92" y="62" width="12" height="26" fill="#1E3A8A" />
  </svg>
);

// 4. Clock & Cost Reduction Icon (Matching clock with down arrow and coin)
export const ClockCostIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Clock */}
    <circle cx="45" cy="55" r="28" fill="#F0F9FF" stroke="#0284C7" strokeWidth="3.5" />
    <line x1="45" y1="55" x2="45" y2="38" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" />
    <line x1="45" y1="55" x2="58" y2="55" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" />

    {/* Downward Arrow */}
    <path d="M78 30 L78 70" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
    <polygon points="68,66 78,82 88,66" fill="#059669" />

    {/* Gold Coin Bag */}
    <circle cx="92" cy="58" r="14" fill="#FFD54F" stroke="#FF8F00" strokeWidth="2.5" />
    <text x="88" y="63" fontSize="14" fontWeight="bold" fill="#B45309">$</text>
  </svg>
);

// 5. Graduation Cap & Education Support Icon (Matching books, cap & hand holding money)
export const GraduationCapIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Graduation Cap */}
    <path d="M85 32 L60 22 L35 32 L60 42 Z" fill="#1E3A8A" stroke="#1E1B4B" strokeWidth="2" />
    <rect x="48" y="38" width="24" height="12" fill="#1E3A8A" />
    <line x1="80" y1="33" x2="80" y2="48" stroke="#F59E0B" strokeWidth="2.5" />
    <circle cx="80" cy="50" r="3" fill="#F59E0B" />

    {/* Stack of Books */}
    <rect x="68" y="52" width="34" height="8" rx="2" fill="#0284C7" />
    <rect x="65" y="60" width="38" height="8" rx="2" fill="#059669" />
    <rect x="62" y="68" width="42" height="8" rx="2" fill="#E11D48" />

    {/* Hand Holding Money Sack */}
    <path d="M15 80 Q35 75 45 78 L55 85 Q35 92 15 88 Z" fill="#FFB74D" />
    <circle cx="35" cy="58" r="16" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
    <text x="30" y="64" fontSize="16" fontWeight="bold" fill="#FFFFFF">$</text>
  </svg>
);

// 6. Tech & Digital Transformation Icon
export const TechIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="20" y="25" width="80" height="50" rx="6" fill="#1E1B4B" stroke="#4338CA" strokeWidth="3" />
    <rect x="25" y="30" width="70" height="40" fill="#0F172A" />
    <path d="M35 50 L45 40 L55 55 L70 35 L85 50" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="70" cy="35" r="4" fill="#38BDF8" />
    <path d="M45 80 L75 80 L80 90 L40 90 Z" fill="#475569" />
  </svg>
);

// 7. Green Energy Icon
export const EnergyIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="60" cy="60" r="35" fill="#ECFDF5" stroke="#10B981" strokeWidth="3" />
    <path d="M60 25 Q75 40 60 70 Q45 40 60 25 Z" fill="#10B981" />
    <polygon points="60,35 52,55 62,55 56,75 72,50 60,50" fill="#F59E0B" />
  </svg>
);

export const RenderInfographicIcon: React.FC<{ iconType: string; className?: string }> = ({ iconType, className }) => {
  switch (iconType) {
    case 'personnel':
      return <PersonnelIcon className={className} />;
    case 'savings':
      return <PiggyBankIcon className={className} />;
    case 'portal':
      return <PortalTerminalIcon className={className} />;
    case 'clock':
      return <ClockCostIcon className={className} />;
    case 'cost':
      return <ClockCostIcon className={className} />;
    case 'education':
      return <GraduationCapIcon className={className} />;
    case 'tech':
      return <TechIcon className={className} />;
    case 'energy':
      return <EnergyIcon className={className} />;
    default:
      return <PersonnelIcon className={className} />;
  }
};
