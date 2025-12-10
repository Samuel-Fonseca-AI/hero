import React from 'react';
import { VisualMode } from '../types';

interface ControlPanelProps {
  currentMode: VisualMode;
  onModeChange: (mode: VisualMode) => void;
  loading: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ currentMode, onModeChange, loading }) => {
  const modes: VisualMode[] = ['photo', 'video', 'abstract', 'minimal'];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 bg-luxury-black/90 backdrop-blur-md border border-white/10 px-6 py-4 rounded-none shadow-2xl">
      <div className="flex space-x-4 md:space-x-8">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => !loading && onModeChange(mode)}
            disabled={loading}
            className={`
              relative group flex flex-col items-center space-y-2
              ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className={`
              w-3 h-3 md:w-4 md:h-4 transform rotate-45 border transition-all duration-300
              ${currentMode === mode ? 'bg-luxury-gold border-luxury-gold scale-110' : 'border-white/40 group-hover:border-white'}
            `}></div>
            <span className={`
              text-[10px] uppercase tracking-widest font-sans transition-colors duration-300
              ${currentMode === mode ? 'text-luxury-gold' : 'text-white/40 group-hover:text-white'}
            `}>
              {mode}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;