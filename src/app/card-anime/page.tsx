"use client"

import React, { useState } from 'react';

const CardHoverAnimation: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ring SVG - starts behind the card */}
      <div className={`absolute transition-all duration-700 ease-out ${hovered ? 'z-30' : 'z-10'}`}>
        <svg viewBox="0 0 100 100" className="w-36 h-36">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#000"
            strokeWidth="8"
            strokeDasharray="300"
            strokeDashoffset={hovered ? 0 : 300}
            className={`transition-all duration-700 ease-out origin-center ${hovered ? 'rotate-[-180deg]' : 'rotate-[0deg]'}`}
          />
        </svg>
      </div>

      {/* Card Element */}
      <div className="relative z-20 w-72 h-96 bg-gradient-to-r from-blue-400 to-blue-100 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2">
        {/* Content */}
      </div>
    </div>
  );
};

export default CardHoverAnimation;
