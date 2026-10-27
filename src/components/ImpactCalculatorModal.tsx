import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, Clock, DollarSign, Building2, User } from 'lucide-react';

interface ImpactCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ImpactCalculatorModal: React.FC<ImpactCalculatorModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
}) => {
  const [userType, setUserType] = useState<'citizen' | 'business'>('business');
  const [procCount, setProcCount] = useState<number>(12); // monthly procedures
  const [avgHours, setAvgHours] = useState<number>(8); // hours per procedure originally
  const [hourlyRate, setHourlyRate] = useState<number>(150000); // 150.000 VND / hour

  if (!isOpen) return null;

  // 53% time reduction
  const originalTotalHours = procCount * avgHours;
  const hoursSavedMonthly = originalTotalHours * 0.53;
  const hoursSavedYearly = hoursSavedMonthly * 12;

  // 55% compliance cost reduction
  const originalTotalCost = originalTotalHours * hourlyRate;
  const moneySavedMonthly = originalTotalCost * 0.55;
  const moneySavedYearly = moneySavedMonthly * 12;

  const formatVND = (num: number) => {
    return Math.round(num).toLocaleString('vi-VN');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">Công Cụ Tính Toán Tiết Kiệm TTHC</h3>
              <p className="text-xs text-slate-500">Dựa trên chỉ số giảm 53% thời gian & 55% chi phí tuân thủ năm 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="my-6 space-y-5">
          
          {/* User Type Segment */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setUserType('business')}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                userType === 'business'
                  ? 'bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Doanh nghiệp / Tổ chức</span>
            </button>
            <button
              onClick={() => setUserType('citizen')}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                userType === 'citizen'
                  ? 'bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Cá nhân / Hộ gia đình</span>
            </button>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Procedure Count Slider */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold mb-2">
                Số thủ tục thực hiện hàng tháng: <span className="text-sky-600 font-extrabold text-sm ml-1">{procCount}</span> thủ tục
              </label>
              <input
                type="range"
                min={1}
                max={100}
                value={procCount}
                onChange={(e) => setProcCount(Number(e.target.value))}
                className="w-full accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 thủ tục</span>
                <span>100 thủ tục</span>
              </div>
            </div>

            {/* Hours per procedure */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold mb-2">
                Thời gian xử lý trước cải cách: <span className="text-sky-600 font-extrabold text-sm ml-1">{avgHours}</span> giờ/thủ tục
              </label>
              <input
                type="range"
                min={1}
                max={40}
                value={avgHours}
                onChange={(e) => setAvgHours(Number(e.target.value))}
                className="w-full accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 giờ</span>
                <span>40 giờ</span>
              </div>
            </div>

          </div>

          {/* Hourly Cost Input */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <label className="block text-xs font-bold mb-1">
              Chi phí nhân sự / cơ hội ước tính (VNĐ / giờ):
            </label>
            <input
              type="number"
              step={10000}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full p-2 text-sm font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sky-600 dark:text-sky-400"
            />
          </div>

        </div>

        {/* Calculated Results Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-900 to-slate-900 text-white shadow-lg space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Kết Quả Ước Tính Tiết Kiệm Hàng Năm:</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 text-xs text-sky-200 font-medium mb-1">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Thời gian tiết kiệm (Giảm 53%):</span>
              </div>
              <div className="text-2xl font-black text-sky-300 font-display">
                {Math.round(hoursSavedYearly)} <span className="text-sm font-bold text-white">giờ / năm</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">Tương đương ~{Math.round(hoursSavedYearly / 8)} ngày làm việc</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 text-xs text-emerald-200 font-medium mb-1">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Chi phí tiết kiệm (Giảm 55%):</span>
              </div>
              <div className="text-2xl font-black text-emerald-400 font-display">
                {formatVND(moneySavedYearly)} <span className="text-sm font-bold text-white">VNĐ / năm</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">Trực tiếp tái bổ sung lợi nhuận & năng suất</p>
            </div>

          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
          >
            Đóng công cụ
          </button>
        </div>

      </div>
    </div>
  );
};
