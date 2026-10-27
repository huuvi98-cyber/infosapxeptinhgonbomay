import React, { useState } from 'react';
import { X, Sparkles, Loader2, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { InfographicData } from '../types/infographic';

interface AiGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInfographicGenerated: (data: InfographicData) => void;
  isDarkMode: boolean;
}

export const AiGeneratorModal: React.FC<AiGeneratorModalProps> = ({
  isOpen,
  onClose,
  onInfographicGenerated,
  isDarkMode,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const sampleTexts = [
    {
      title: 'Kinh Tế Xanh & Năng Lượng 2026',
      content: 'Báo cáo năng lượng tái tạo 2026: Sản lượng điện gió ngoài khơi tăng 45% đạt 18.000 MW. Giảm phát thải 52 triệu tấn CO2/năm. Thu hút 12.500 tỷ đồng vốn đầu tư FDI tư nhân vào hạ tầng truyền tải điện.'
    },
    {
      title: 'Thương Mại Điện Tử & Logistics',
      content: 'Tăng trưởng thương mại điện tử Việt Nam 2026: Doanh thu thị trường đạt 32 tỷ USD, tăng 28% so với cùng kỳ. Thời gian giao hàng nội địa trung bình giảm 40% xuống còn 18 giờ. Hơn 85% giao dịch trực tuyến qua QR code & VNeID.'
    }
  ];

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setErrorMessage('Vui lòng nhập nội dung báo cáo hoặc chọn kịch bản mẫu.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/gemini/parse-infographic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawText: inputText }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Không thể tạo Infographic từ nội dung này.');
      }

      onInfographicGenerated(result.data);
      onClose();
    } catch (err: any) {
      setErrorMessage(err.message || 'Đã có lỗi xảy ra khi gọi Gemini AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white shadow-sm">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">Tạo Infographic Nhảy Số Bằng AI</h3>
              <p className="text-xs text-slate-500">Gemini AI tự động trích xuất chỉ số & tạo hiệu ứng nhảy số</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Input */}
        <div className="my-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-300">
              Dán nội dung báo cáo / bài viết / nghị quyết:
            </label>
            <textarea
              rows={5}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ví dụ: Báo cáo kinh tế xã hội năm 2026: Tinh giản 145.000 biên chế, tiết kiệm 39.000 tỷ đồng chi thường xuyên..."
              className="w-full p-3.5 text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Preset Buttons */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Hoặc chọn kịch bản mẫu nhanh:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sampleTexts.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputText(sample.content)}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-left hover:border-sky-500 transition-colors text-xs font-medium bg-white dark:bg-slate-800/80 flex items-start gap-2"
                >
                  <FileText className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-800 dark:text-slate-200">{sample.title}</span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">{sample.content}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Error display */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl shadow-md transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gemini đang phân tích & tạo số nhảy...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Tạo Infographic Nhảy Số</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
