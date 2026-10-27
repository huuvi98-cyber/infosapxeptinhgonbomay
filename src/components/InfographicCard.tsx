import React from 'react';
import { InfographicItem } from '../types/infographic';
import { NumberTicker } from './NumberTicker';
import { RenderInfographicIcon } from './SvgIcons';

interface InfographicCardProps {
  item: InfographicItem;
  isPlaying: boolean;
  speedMultiplier: number;
  isMuted: boolean;
  isDarkMode: boolean;
  onOpenDetail?: (item: InfographicItem) => void;
}

export const InfographicCard: React.FC<InfographicCardProps> = ({
  item,
  isPlaying,
  speedMultiplier,
  isMuted,
  isDarkMode,
}) => {
  return (
    <div
      className={`group relative p-5 rounded-2xl border transition-all duration-300 shadow-xs ${
        isDarkMode
          ? 'bg-slate-800/80 border-slate-700'
          : 'bg-white border-slate-200/90'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        
        {/* Left: Vector Visual Illustration */}
        <div className="shrink-0 p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
          <RenderInfographicIcon iconType={item.iconType} className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        {/* Right: Ticker Number & Copy */}
        <div className="flex-1 text-center sm:text-left">
          


          {/* MAIN DYNAMIC NUMBER TICKER ("NHẢY SỐ") */}
          <div className="my-1">
            <NumberTicker
              targetValue={item.targetValue}
              prefix={item.prefix}
              suffix={item.suffix}
              isPlaying={isPlaying}
              speedMultiplier={speedMultiplier}
              isMuted={isMuted}
              decimals={item.decimals || 0}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold number-sharp ${
                item.color === 'emerald'
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : 'text-sky-700 dark:text-sky-400'
              }`}
            />
            {item.unit && (
              <span className="ml-2 text-base sm:text-lg font-bold text-slate-700 dark:text-slate-200">
                {item.unit}
              </span>
            )}
          </div>

          {/* Primary Description */}
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mt-1">
            {item.description}
          </p>

        </div>

      </div>
    </div>
  );
};
