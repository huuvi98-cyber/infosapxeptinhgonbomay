import React from 'react';
import { Volume2, VolumeX, Sparkles, Image as ImageIcon, Download, RotateCcw, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onReplayAll: () => void;
  onOpenAiGenerator: () => void;
  onOpenOriginalComparison: () => void;
  onOpenExportModal: () => void;
  activePresetId: string;
  onSelectPreset: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMuted,
  onToggleMute,
  isDarkMode,
  onToggleDarkMode,
  onReplayAll,
  onOpenAiGenerator,
  onOpenOriginalComparison,
  onOpenExportModal,
  activePresetId,
  onSelectPreset,
}) => {
  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/90 border-slate-800 text-slate-100' 
        : 'bg-white/90 border-slate-200 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-sm">
            I
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-tight font-display whitespace-nowrap">
              Infographic Động <span className="text-sky-500 font-semibold text-xs ml-1 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded-md border border-sky-200 dark:border-sky-800">Nhảy Số</span>
            </h1>
          </div>
        </div>

        {/* Zone 3: Actions Toolbar */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Sound Toggle */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Bật âm thanh nhảy số" : "Tắt âm thanh"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-sky-600 dark:text-sky-400 animate-pulse" />}
          </button>

          {/* Replay Counters */}
          <button
            onClick={onReplayAll}
            title="Phát lại hiệu ứng nhảy số"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-medium"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Phát lại</span>
          </button>

          {/* Original Image View Toggle */}
          <button
            onClick={onOpenOriginalComparison}
            title="Xem Infographic gốc"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700"
          >
            <ImageIcon className="w-4 h-4 text-sky-600" />
            <span className="hidden md:inline">Ảnh gốc</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            title="Đổi giao diện Sáng / Tối"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Export PNG Report */}
          <button
            onClick={onOpenExportModal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất file</span>
          </button>

          {/* AI Generator Primary Button */}
          <button
            onClick={onOpenAiGenerator}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Tạo Infographic AI</span>
          </button>

        </div>
      </div>
    </header>
  );
};
