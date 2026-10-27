import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Share2 } from 'lucide-react';
import { InfographicData } from '../types/infographic';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: InfographicData;
  isDarkMode: boolean;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  data,
  isDarkMode,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const generateTextSummary = () => {
    let summary = `📊 ${data.title}\n${data.subtitle}\n\n`;
    data.sections.forEach((sec) => {
      summary += `📌 ${sec.title.toUpperCase()}\n`;
      sec.items.forEach((item) => {
        const valStr = `${item.prefix || ''}${item.targetValue.toLocaleString('vi-VN')}${item.suffix || ''} ${item.unit || ''}`;
        summary += `  • ${item.title}: ${valStr} - ${item.description}\n`;
      });
      summary += `\n`;
    });
    summary += `Nguồn: ${data.sourceNotes}`;
    return summary;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTextSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">Xuất Báo Cáo & Chia Sẻ Infographic</h3>
              <p className="text-xs text-slate-500">Sao chép trích dẫn số liệu hoặc in báo cáo tóm tắt</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Text Preview Box */}
        <div className="my-6">
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">
            Xem trước văn bản tóm tắt trích dẫn:
          </label>
          <textarea
            readOnly
            rows={8}
            value={generateTextSummary()}
            className="w-full p-3.5 text-xs font-mono rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>In bản báo cáo</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Đã sao chép!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao chép toàn bộ số liệu</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
