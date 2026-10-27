import React from 'react';
import { InfographicSection } from '../types/infographic';
import { InfographicCard } from './InfographicCard';

interface SectionContainerProps {
  section: InfographicSection;
  isPlaying: boolean;
  speedMultiplier: number;
  isMuted: boolean;
  isDarkMode: boolean;
  onOpenDetail: (item: any) => void;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  section,
  isPlaying,
  speedMultiplier,
  isMuted,
  isDarkMode,
  onOpenDetail,
}) => {
  return (
    <div className="relative my-8 pt-4">
      
      {/* Dashed Outline Box (Matching the original Vietnamese Infographic styling) */}
      <div className={`relative p-6 sm:p-8 rounded-3xl transition-colors ${
        isDarkMode
          ? 'dashed-border-stone bg-slate-900/40'
          : 'dashed-border-blue bg-white/70 shadow-xs'
      }`}>
        
        {/* Banner Pill Header Overlay */}
        <div className="absolute -top-5 left-6 sm:left-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-600 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md font-display">
            <span>{section.title}</span>
          </div>
        </div>

        {/* Grid of Infographic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
          {section.items.map((item) => (
            <div key={item.id} className={item.isFullWidth ? 'col-span-1 lg:col-span-2' : ''}>
              <InfographicCard
                item={item}
                isPlaying={isPlaying}
                speedMultiplier={speedMultiplier}
                isMuted={isMuted}
                isDarkMode={isDarkMode}
                onOpenDetail={onOpenDetail}
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
