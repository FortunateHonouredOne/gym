"use client";

import React, { useState, useEffect, useRef } from "react";

export interface CountUpNumberProps {
  /** Target numeric value */
  end: number;
  /** Starting numeric value (default 0) */
  start?: number;
  /** Animation duration in milliseconds (default 1600ms) */
  duration?: number;
  /** Decimal places to display (default 0) */
  decimals?: number;
  /** Optional prefix (e.g. "$", "+") */
  prefix?: string;
  /** Optional suffix (e.g. "+", "★", "%") */
  suffix?: string;
  /** Optional CSS class for the wrapper */
  className?: string;
  /** Custom formatting function for numeric output */
  formatValue?: (value: number, isFinished: boolean) => string;
  /** Optional external boolean trigger. If omitted, internal IntersectionObserver is used */
  trigger?: boolean;
  /** Callback fired when animation completes */
  onEnd?: () => void;
}

/**
 * Premium CountUpNumber component
 * - Smooth easeOutCubic deceleration curve
 * - Layout-stable tabular-nums typography
 * - Viewport trigger-once behavior
 * - Full support for prefers-reduced-motion
 */
export default function CountUpNumber({
  end,
  start = 0,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  formatValue,
  trigger,
  onEnd,
}: CountUpNumberProps) {
  const [currentValue, setCurrentValue] = useState<number>(start);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [internalInView, setInternalInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // Setup internal IntersectionObserver if external trigger is not provided
  useEffect(() => {
    if (trigger !== undefined) return;
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInternalInView(true);
          observer.disconnect(); // Trigger once only
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [trigger]);

  const activeTrigger = trigger !== undefined ? trigger : internalInView;

  useEffect(() => {
    if (!activeTrigger || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const startTime = performance.now();
    let animationFrameId: number;

    const tick = (now: number) => {
      // Check prefers-reduced-motion inside async animation callback
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        setCurrentValue(end);
        setIsFinished(true);
        onEnd?.();
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Premium easeOutCubic: swift confident start, silky smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const nextValue = start + (end - start) * easeOut;

      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        setCurrentValue(end);
        setIsFinished(true);
        onEnd?.();
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeTrigger, start, end, duration, onEnd]);

  // Format the number cleanly
  let formattedNumber: string;
  if (formatValue) {
    formattedNumber = formatValue(currentValue, isFinished);
  } else if (decimals > 0) {
    formattedNumber = currentValue.toFixed(decimals);
  } else {
    formattedNumber = Math.round(currentValue).toString();
  }

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline tabular-nums select-none ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <span>{formattedNumber}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
