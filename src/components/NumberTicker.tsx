import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { tickerSound } from '../utils/soundEffects';

interface NumberTickerProps {
  targetValue: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  isPlaying?: boolean;
  speedMultiplier?: number;
  isMuted?: boolean;
  decimals?: number;
  className?: string;
  onComplete?: () => void;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  targetValue,
  prefix = '',
  suffix = '',
  durationMs = 2000,
  isPlaying = true,
  speedMultiplier = 1,
  isMuted = false,
  decimals = 0,
  className = '',
  onComplete,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastSoundValueRef = useRef<number>(0);
  const hasTriggeredConfettiRef = useRef<boolean>(false);

  // Sync mute state with sound controller
  useEffect(() => {
    tickerSound.setMuted(isMuted);
  }, [isMuted]);

  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    // Reset when starting play from 0 if current value is 0 or target value
    if (currentValue === targetValue) {
      setCurrentValue(0);
      hasTriggeredConfettiRef.current = false;
    }

    const actualDuration = Math.max(300, durationMs / speedMultiplier);
    const startVal = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / actualDuration, 1);

      // Ease out expo formula for satisfying smooth slowing ticker effect
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextVal = startVal + (targetValue - startVal) * easeProgress;

      setCurrentValue(nextVal);

      // Play audio tick whenever value increments substantially
      const stepCheck = targetValue > 100 ? Math.floor(nextVal / 500) : Math.floor(nextVal);
      if (stepCheck !== lastSoundValueRef.current) {
        lastSoundValueRef.current = stepCheck;
        const pitch = 0.8 + (progress * 0.5); // pitch increases as counter reaches end
        tickerSound.playTick(pitch);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
        tickerSound.playSuccessTone();

        if (!hasTriggeredConfettiRef.current && targetValue >= 1000) {
          hasTriggeredConfettiRef.current = true;
          confetti({
            particleCount: 25,
            spread: 50,
            origin: { y: 0.7 },
            colors: ['#0284c7', '#059669', '#38bdf8', '#f59e0b']
          });
        }

        if (onComplete) onComplete();
      }
    };

    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetValue, durationMs, isPlaying, speedMultiplier]);

  // Format Vietnamese number: 145000 -> 145.000
  const formatVietnameseNumber = (val: number, decimalDigits: number): string => {
    if (decimalDigits > 0) {
      return val.toLocaleString('vi-VN', {
        minimumFractionDigits: decimalDigits,
        maximumFractionDigits: decimalDigits,
      });
    }
    return Math.round(val).toLocaleString('vi-VN');
  };

  const formattedNum = formatVietnameseNumber(currentValue, decimals);

  return (
    <span className={`inline-flex items-baseline font-extrabold tracking-tight font-display tabular-nums ${className}`}>
      {prefix && <span className="mr-1 text-[0.85em] font-semibold opacity-90">{prefix}</span>}
      <span className="relative inline-block transition-transform transform active:scale-105">
        {formattedNum}
      </span>
      {suffix && <span className="ml-1 text-[0.8em] font-medium opacity-90">{suffix}</span>}
    </span>
  );
};
