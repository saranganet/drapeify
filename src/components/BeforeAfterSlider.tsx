import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  id?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatioClassName?: string;
}

export default function BeforeAfterSlider({
  id = "ba-slider",
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  aspectRatioClassName = "aspect-[3/4]"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative select-none overflow-hidden rounded-2xl border border-slate-100 shadow-lg ${aspectRatioClassName} w-full cursor-ew-resize`}
    >
      {/* Before Image (Left side) - always full width */}
      <img
        src={beforeImage}
        alt="Before garment photo"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* After Image (Right side) - width is set by the state overlay */}
      <div
        className="absolute top-0 right-0 bottom-0 overflow-hidden"
        style={{ left: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt="After AI mockup photoshoot"
          referrerPolicy="no-referrer"
          className="absolute top-0 right-0 object-cover h-full"
          style={{ width: containerRef.current?.offsetWidth || "100%" }}
        />
      </div>

      {/* Visual Slit Separator Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Handle Button */}
      <div
        className={`absolute top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-white border border-slate-200 text-slate-800 shadow-xl flex items-center justify-center z-40 select-none cursor-grab active:cursor-grabbing transition-transform ${isDragging ? 'scale-110' : ''}`}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
          />
        </svg>
      </div>
    </div>
  );
}
