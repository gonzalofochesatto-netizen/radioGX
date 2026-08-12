import { useEffect, useState } from "react";

interface Props {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
}

export function EqualizerBars({ isPlaying, barCount = 16, className = "" }: Props) {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: barCount }, () => 15),
  );

  useEffect(() => {
    if (!isPlaying) {
      setHeights(Array.from({ length: barCount }, () => 12));
      return;
    }

    const interval = setInterval(() => {
      setHeights(
        Array.from({ length: barCount }, (_, i) => {
          // create a rhythm wave effect mixed with randomness
          const center = barCount / 2;
          const dist = 1 - Math.abs(i - center) / center;
          return Math.floor(Math.random() * 75 * (0.4 + dist * 0.6) + 18);
        }),
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div className={`flex items-end justify-center gap-1.5 h-16 ${className}`}>
      {heights.map((h, index) => (
        <div
          key={`eq-bar-${index}`}
          style={{ height: `${h}%` }}
          className="w-1.5 rounded-full bg-gradient-to-t from-sky-500 via-accent to-indigo-400 shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-150 ease-out"
        />
      ))}
    </div>
  );
}
