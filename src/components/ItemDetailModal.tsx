import React from 'react';
import { X, TrendingDown, TrendingUp, BarChart3, Info, CheckCircle2 } from 'lucide-react';
import { InfographicItem } from '../types/infographic';
import { RenderInfographicIcon } from './SvgIcons';
import { NumberTicker } from './NumberTicker';

interface ItemDetailModalProps {
  item: InfographicItem | null;
  onClose: () => void;
  isPlaying: boolean;
  speedMultiplier: number;
  isMuted: boolean;
  isDarkMode: boolean;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  isPlaying,
  speedMultiplier,
  isMuted,
  isDarkMode,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <RenderInfographicIcon iconType={item.iconType} className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Chi Tiết Phân Tích Chỉ Số</span>
              <h3 className="text-lg font-extrabold font-display">{item.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Ticker Section */}
        <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white text-center shadow-lg">
          <div className="text-4xl sm:text-5xl font-black font-display text-sky-300 my-1">
            <NumberTicker
              targetValue={item.targetValue}
              prefix={item.prefix}
              suffix={item.suffix}
              isPlaying={isPlaying}
              speedMultiplier={speedMultiplier}
              isMuted={isMuted}
              decimals={item.decimals || 0}
            />
            {item.unit && <span className="ml-2 text-xl font-bold text-white">{item.unit}</span>}
          </div>
          <p className="text-sm font-semibold text-slate-200 mt-2 max-w-lg mx-auto">
            {item.description}
          </p>
        </div>

        {/* Context Note */}
        {item.detailNote && (
          <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Bối cảnh chỉ đạo & thực thi:</span>
              <p>{item.detailNote}</p>
            </div>
          </div>
        )}

        {/* Breakdown Chart if Available */}
        {item.breakdownData && item.breakdownData.length > 0 && (
          <div className="space-y-4 my-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-sky-600" />
              <span>{item.breakdownTitle || 'Cơ cấu phân bổ chi tiết:'}</span>
            </h4>

            <div className="space-y-3">
              {item.breakdownData.map((bd, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700">
                  <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                    <span>{bd.label}</span>
                    <span className="text-sky-600 dark:text-sky-400">{bd.value.toLocaleString('vi-VN')} {bd.unit}</span>
                  </div>
                  {bd.percentage && (
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${bd.percentage}%`,
                          backgroundColor: bd.color || '#0284c7'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
          >
            Đóng bảng chi tiết
          </button>
        </div>

      </div>
    </div>
  );
};
