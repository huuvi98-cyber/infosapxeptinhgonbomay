import React, { useState } from 'react';
import { SectionContainer } from './components/SectionContainer';
import { ImpactCalculatorModal } from './components/ImpactCalculatorModal';
import { TuitionBreakdownModal } from './components/TuitionBreakdownModal';
import { AiGeneratorModal } from './components/AiGeneratorModal';
import { OriginalComparisonModal } from './components/OriginalComparisonModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { ExportModal } from './components/ExportModal';
import { REFORM_2026_DATA } from './data/infographicsData';
import { InfographicData, InfographicItem } from './types/infographic';
import { Volume2, VolumeX, RotateCcw, Sparkles, Image as ImageIcon, Download, Moon, Sun, Calculator, GraduationCap } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<InfographicData>(REFORM_2026_DATA);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Selected item for drill down
  const [selectedItem, setSelectedItem] = useState<InfographicItem | null>(null);

  // Modals
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isTuitionOpen, setIsTuitionOpen] = useState<boolean>(false);
  const [isAiGeneratorOpen, setIsAiGeneratorOpen] = useState<boolean>(false);
  const [isOriginalComparisonOpen, setIsOriginalComparisonOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const handleReplayAll = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const handleInfographicGenerated = (newData: InfographicData) => {
    setData(newData);
    handleReplayAll();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans p-4 sm:p-6 lg:p-10 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#fffdf0] text-slate-800'
    }`}>
      
      {/* Pure Infographic Canvas (containing ONLY the 2 main section boxes) */}
      <main className="max-w-6xl mx-auto space-y-6">
        
        {/* Render the 2 Main Infographic Boxes */}
        {data.sections.map((section) => (
          <SectionContainer
            key={section.id}
            section={section}
            isPlaying={isPlaying}
            speedMultiplier={1}
            isMuted={isMuted}
            isDarkMode={isDarkMode}
          />
        ))}

        {/* Footnote Source Citation (Matching original infographic poster footer) */}
        {data.sourceNotes && (
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-left font-sans font-medium">
            {data.sourceNotes}
          </div>
        )}

      </main>

      {/* Modals & Dialogs */}
      <ImpactCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        isDarkMode={isDarkMode}
      />

      <TuitionBreakdownModal
        isOpen={isTuitionOpen}
        onClose={() => setIsTuitionOpen(false)}
        isDarkMode={isDarkMode}
      />

      <AiGeneratorModal
        isOpen={isAiGeneratorOpen}
        onClose={() => setIsAiGeneratorOpen(false)}
        onInfographicGenerated={handleInfographicGenerated}
        isDarkMode={isDarkMode}
      />

      <OriginalComparisonModal
        isOpen={isOriginalComparisonOpen}
        onClose={() => setIsOriginalComparisonOpen(false)}
        isDarkMode={isDarkMode}
      />

      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        isPlaying={isPlaying}
        speedMultiplier={1}
        isMuted={isMuted}
        isDarkMode={isDarkMode}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        data={data}
        isDarkMode={isDarkMode}
      />

    </div>
  );
}
