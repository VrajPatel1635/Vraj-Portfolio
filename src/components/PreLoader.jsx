import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExit(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30 transition-opacity duration-500 ${
        exit ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-40 h-40 animate-drawAndFade`}
      >
        <defs>
          <linearGradient id="vpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F00FF" />
            <stop offset="100%" stopColor="#747bff" />
          </linearGradient>
        </defs>
        <path
          d="M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"
          stroke="url(#vpGradient)"
          strokeWidth="20"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Preloader;
