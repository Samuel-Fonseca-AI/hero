import React from 'react';
import { HeroProps } from '../types';
import { AbstractBackground } from './AbstractBackground';

const Hero: React.FC<HeroProps> = ({ mode, content, loading }) => {
  
  // Render Background based on mode
  const renderBackground = () => {
    switch (mode) {
      case 'photo':
        return (
          <div className="absolute inset-0 overflow-hidden">
             {/* High Res Leather Texture/Macro Shot */}
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Shoe Detail" 
              className="object-cover w-full h-full opacity-60 scale-105 transition-transform duration-[20s]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          </div>
        );
      case 'video':
        return (
          <div className="absolute inset-0 overflow-hidden bg-black">
             {/* Video Background with reliable source and poster fallback */}
            <video 
              key="luxury-craft-video"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute w-full h-full object-cover opacity-60"
              poster="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-shoemaker-working-with-leather-41317-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Cinematic Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        );
      case 'abstract':
        return <AbstractBackground />;
      case 'minimal':
        return (
          <div className="absolute inset-0 bg-luxury-terracotta flex items-center justify-center overflow-hidden">
             {/* Texture overlay */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`}} />
          </div>
        );
      default:
        return null;
    }
  };

  const getTextColorClass = () => {
    return mode === 'minimal' ? 'text-luxury-cream' : 'text-white';
  };

  const getButtonClass = () => {
    if (mode === 'minimal') {
      return "border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-terracotta";
    }
    return "border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black";
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      {renderBackground()}

      {/* Content Layer */}
      <div className={`relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center ${mode === 'photo' ? 'md:items-start md:text-left' : ''}`}>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
             <div className="w-12 h-12 border-t-2 border-b-2 border-luxury-gold rounded-full animate-spin"></div>
             <p className="text-luxury-gold font-serif italic text-sm tracking-widest uppercase animate-pulse">Diseñando Experiencia...</p>
          </div>
        ) : content ? (
          <div className="fade-in max-w-4xl">
            <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight ${getTextColorClass()}`}>
              {content.headline}
            </h1>
            <p className={`font-sans font-light text-lg md:text-xl tracking-wide mb-10 opacity-90 ${getTextColorClass()} max-w-2xl ${mode === 'photo' ? 'md:mr-auto' : 'mx-auto'}`}>
              {content.subheadline}
            </p>
            <button className={`px-8 py-3 border uppercase text-xs md:text-sm font-bold tracking-[0.2em] transition-all duration-500 ease-out ${getButtonClass()}`}>
              {content.ctaText}
            </button>
          </div>
        ) : null}
      </div>

      {/* Branding Overlay (Fixed) */}
      <div className="absolute top-8 left-0 right-0 z-20 flex justify-between px-8 md:px-12 items-center">
        <div className="text-2xl font-serif font-bold text-white tracking-widest">ELEGANCE<span className="text-luxury-gold italic">STEP</span></div>
        <div className="hidden md:flex space-x-8 text-xs font-sans text-white/80 tracking-widest uppercase">
          <a href="#" className="hover:text-luxury-gold transition-colors">Colecciones</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Bespoke</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Maison</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;