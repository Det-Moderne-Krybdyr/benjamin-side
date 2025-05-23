"use client";

import { useRef, useState } from "react";

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hideStartButton, setHideStartButton] = useState(false);

  const moveButton = () => {
    if (buttonRef.current) {
      const x = Math.random() * 80;
      const y = Math.random() * 80;
      buttonRef.current.style.position = "absolute";
      buttonRef.current.style.left = `${x}%`;
      buttonRef.current.style.top = `${y}%`;
    }
  };

  const handleStart = () => {
    setHideStartButton(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Zooming Benjamin Image */}
      <img
        src="./Benjamin.png"
        alt="Benjamin"
        className="mt-36 transition-transform duration-[20000ms] ease-linear animate-[slowZoom_20s_linear_infinite]"
      />

      {/* Impossible Button */}
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-10"
      >
        Click Me!
      </button>

      {/* Start Button */}
      {!hideStartButton && (
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-red-600 text-white font-bold text-xl rounded hover:bg-red-700 z-10 mt-4"
        >
          Start
        </button>
      )}

      {/* Rickroll Audio */}
      <audio ref={audioRef} src="/rick.mp3" />

      {/* Keyframes for slow zoom */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
