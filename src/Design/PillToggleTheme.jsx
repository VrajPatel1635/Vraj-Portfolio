import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoonIcon } from 'lucide-react';

const PillToggleTheme = ({ className }) => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (resolvedTheme === 'dark') setTheme('light');
    else if (resolvedTheme === 'light') setTheme('dark');
  };

  return (
    <div className={`relative group ${className}`}>
      <button
        type="button"
        onClick={handleSwitchTheme}
        className={`group peer relative h-14 w-10 overflow-hidden transition rounded-full bg-neutral-50 dark:bg-neutral-900 p-2 border border-neutral-500/20
          hover:scale-110 transform-gpu duration-150`}
      >
        <SunIcon
          className={`size-5 text-neutral-600 transition-all dark:text-neutral-300 z-50 duration-300 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu
            ${resolvedTheme === 'light'
              ? 'opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90'
              : 'opacity-50 -translate-y-8 scale-90  group-hover:-translate-y-3'}`}
        />
        <MoonIcon
          className={`size-5 text-neutral-600 transition-all dark:text-neutral-300 z-50 duration-300 absolute -translate-x-1/2 left-1/2 bottom-2 transform-gpu
            ${resolvedTheme === 'dark'
              ? 'opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90'
              : 'opacity-50 translate-y-8 scale-75 group-hover:translate-y-3'}`}
        />
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`peer group absolute left-12 size-10 overflow-hidden transition rounded-full bg-neutral-50 top-1/2 -translate-y-1/2 dark:bg-neutral-900 p-2 border border-neutral-500/20
          peer-hover:scale-110 transform-gpu duration-300 inline-flex items-center justify-center
          opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 scale-0 group-hover:scale-100`}
      >
        <SunMoonIcon
          className={`size-5 text-neutral-600 transition-all dark:text-neutral-300 z-50 duration-300 transform-gpu
            ${theme === 'system' ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`}
        />
      </button>
    </div>
  );
};

export default PillToggleTheme;
