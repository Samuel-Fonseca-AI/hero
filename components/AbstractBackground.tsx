import React from 'react';

export const AbstractBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[#0f0f0f] overflow-hidden">
      <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#d4af37" strokeWidth="0.1"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      
      {/* Animated Blueprint Lines */}
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" viewBox="0 0 800 400">
         <path 
           d="M 50 300 Q 200 100 750 250" 
           fill="none" 
           stroke="#d4af37" 
           strokeWidth="1"
           className="opacity-50"
           strokeDasharray="1000"
           strokeDashoffset="1000"
         >
           <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" fill="freeze" />
         </path>
         <path 
           d="M 50 310 Q 200 110 750 260" 
           fill="none" 
           stroke="#d4af37" 
           strokeWidth="0.5"
           className="opacity-30"
           strokeDasharray="1000"
           strokeDashoffset="1000"
         >
            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="5s" fill="freeze" />
         </path>
         
         {/* Geometry circles */}
         <circle cx="200" cy="200" r="50" stroke="#d4af37" fill="none" strokeWidth="0.5" className="opacity-40">
            <animate attributeName="r" values="50;55;50" dur="10s" repeatCount="indefinite" />
         </circle>
         <circle cx="600" cy="250" r="30" stroke="#d4af37" fill="none" strokeWidth="0.5" className="opacity-40" />
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
    </div>
  );
};