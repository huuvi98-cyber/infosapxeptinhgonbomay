import React from 'react';
import { X, GraduationCap, CheckCircle2, PieChart, Users, School, Sparkles } from 'lucide-react';

interface TuitionBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const TuitionBreakdownModal: React.FC<TuitionBreakdownModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
}) => {
  if (!isOpen) return null;

  const breakdownLevels = [
    { level: 'Tiểu học & Mầm non 5 tuổi', amount: 12000, percentage: 40, students: '~8.2 triệu học sinh', color: 'bg-blue-600' },
    { level: 'Trung học cơ sở (THCS)', amount: 9000, percentage: 30, students: '~5.5 triệu học sinh', color: 'bg-sky-500' },
    { level: 'Trung học phổ thông (THPT)', amount: 6000, percentage: 20, students: '~3.2 triệu học sinh', color: 'bg-indigo-500' },
    { level: 'Chính sách ưu tiên & Vùng khó khăn', amount: 3000, percentage: 10, students: '~1.8 triệu học sinh', color: 'bg-emerald-500' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">Chi Tiết Hỗ Trợ & Miễn Học Phí 30.000 Tỷ</h3>
              <p className="text-xs text-slate-500">Áp dụng từ năm học 2025–2026 trên phạm vi toàn quốc</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Total Highlight */}
        <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-sky-200 uppercase tracking-wider">Tổng Kinh Phí Dự Kiến / Năm</span>
            <div className="text-3xl font-black font-display text-white mt-0.5">&gt;30.000 Tỷ Đồng</div>
          </div>
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
            <School className="w-8 h-8 text-sky-200" />
          </div>
        </div>

        {/* Breakdown Items with Progress Bars */}
        <div className="space-y-4 my-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <PieChart className="w-4 h-4 text-sky-600" />
            <span>Phân Bổ Theo Cấp Học & Đối Tượng:</span>
          </h4>

          {breakdownLevels.map((lvl, index) => (
            <div key={index} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${lvl.color}`}></span>
                  <span>{lvl.level}</span>
                </span>
                <span className="text-sky-600 dark:text-sky-400 font-extrabold">{lvl.amount.toLocaleString('vi-VN')} tỷ ({lvl.percentage}%)</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className={`h-full rounded-full ${lvl.color}`}
                  style={{ width: `${lvl.percentage}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  <span>Quy mô thụ hưởng: {lvl.students}</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Công lập</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key policy highlights */}
        <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60 text-xs text-sky-900 dark:text-sky-200 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-sky-700 dark:text-sky-300">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Ý nghĩa an sinh xã hội đột phá:</span>
          </div>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Chính sách giúp giảm gánh nặng tài chính trực tiếp cho hàng triệu hộ gia đình Việt Nam, đặc biệt là khu vực nông thôn và vùng đồng bào dân tộc thiểu số.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
          >
            Đóng bảng phân bổ
          </button>
        </div>

      </div>
    </div>
  );
};
