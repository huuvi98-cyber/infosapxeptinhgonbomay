import React from 'react';
import { Play, Pause, FastForward, RefreshCw, Calculator, GraduationCap } from 'lucide-react';

export type ViewMode = 'standard' | 'presentation' | 'impact';

interface ToolbarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  speedMultiplier: number;
  onChangeSpeed: (speed: number) => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onReset: () => void;
  onOpenCalculator: () => void;
  onOpenTuitionBreakdown: () => void;
  isDarkMode: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  isPlaying,
  onTogglePlay,
  speedMultiplier,
  onChangeSpeed,
  onReset,
  onOpenCalculator,
  onOpenTuitionBreakdown,
  isDarkMode,
}) => {
  return (
    <div className={`w-full border-b py-2 px-4 transition-colors ${
      isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Playback & Speed Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-colors shadow-xs ${
              isPlaying ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Tạm dừng</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Phát nhảy số</span>
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            title="Khôi phục về 0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Speed Multipliers */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 text-slate-600 dark:text-slate-300">
            <FastForward className="w-3 h-3 ml-1 text-slate-400" />
            {[0.5, 1, 1.5, 2].map((s) => (
              <button
                key={s}
                onClick={() => onChangeSpeed(s)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  speedMultiplier === s
                    ? 'bg-sky-600 text-white'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>

        {/* Right: Quick Action Modals */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors text-xs"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Tính tiết kiệm TTHC</span>
          </button>

          <button
            onClick={onOpenTuitionBreakdown}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 font-bold hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors text-xs"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Chi tiết 30.000 Tỷ Học Phí</span>
          </button>
        </div>

      </div>
    </div>
  );
};
