import React from 'react';
import { X, Image as ImageIcon, Sparkles, Eye, CheckCircle2 } from 'lucide-react';

interface OriginalComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const OriginalComparisonModal: React.FC<OriginalComparisonModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">So Sánh Với Infographic Gốc</h3>
              <p className="text-xs text-slate-500">Đối chiếu bản vẽ thiết kế gốc và phiên bản Infographic Động Nhảy Số</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Comparison */}
        <div className="my-6 space-y-6">
          
          <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 text-xs text-sky-900 dark:text-sky-200 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-sky-800 dark:text-sky-300">Tái hiện trung thực 100% dữ liệu gốc:</span>
              <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                Toàn bộ các mốc chỉ số (145.000 biên chế, 39.000 tỷ tiết kiệm, &gt;3.500 TTHC, ↓53% thời gian, ↓55% chi phí tuân thủ, 23.000 tỷ tiết kiệm xã hội và &gt;30.000 tỷ học phí) được lập trình hiệu ứng đếm số sống động.
              </p>
            </div>
          </div>

          {/* Image Display */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-950 flex justify-center p-2">
            <img
              src="/assets/aistudio/info_849f9e76.png"
              alt="Infographic Cải cách bộ máy gốc"
              className="max-h-[60vh] object-contain rounded-xl"
            />
          </div>

        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
          >
            Trở lại bản Infographic Động
          </button>
        </div>

      </div>
    </div>
  );
};
