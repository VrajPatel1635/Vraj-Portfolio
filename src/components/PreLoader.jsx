import React, { useEffect, useState } from "react";

const Preloader = ({ setIsAppReady }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => setIsAppReady(true), 500); // Allow fade-out
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [setIsAppReady]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black/10 backdrop-blur-2xl flex flex-col items-center justify-center transition-opacity duration-700 ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-white text-3xl font-semibold mb-8 flex items-center gap-2 tracking-wide">
        VRAJ <span className="text-cyan-400">{`</>`}</span>
      </div>

      <div className="w-64 h-2 bg-black/10 backdrop-blur-2xl rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-cyan-400 mt-4 font-mono text-sm">{progress}%</div>
    </div>
  );
};

export default Preloader;
