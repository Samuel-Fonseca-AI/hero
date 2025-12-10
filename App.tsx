import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ControlPanel from './components/ControlPanel';
import { generateHeroContent } from './services/geminiService';
import { VisualMode, GeneratedContent } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<VisualMode>('photo');
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      setLoading(true);
      try {
        const data = await generateHeroContent(mode);
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error("Failed to fetch content", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [mode]);

  return (
    <main className="w-full h-screen bg-luxury-black text-white relative">
      <Hero mode={mode} content={content} loading={loading} />
      <ControlPanel currentMode={mode} onModeChange={setMode} loading={loading} />
      
      {/* Decorative vertical lines for structure */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 lg:px-24">
         <div className="w-px h-full bg-white/5"></div>
         <div className="w-px h-full bg-white/5"></div>
         <div className="w-px h-full bg-white/5"></div>
         <div className="w-px h-full bg-white/5"></div>
      </div>
    </main>
  );
};

export default App;