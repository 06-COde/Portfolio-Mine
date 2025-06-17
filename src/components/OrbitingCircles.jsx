import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 180,
  path = true,
  iconSize = 50,
  speed = 1,
  ...props
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreen(); // Initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const responsiveRadius = isSmallScreen ? radius * 0.6 : radius; // e.g., 180 → 108
  const responsiveIconSize = isSmallScreen ? iconSize * 0.7 : iconSize; // e.g., 50 → 35
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={responsiveRadius}
            fill="none"
          />
        </svg>
      )}
      <div
        className={twMerge(
          "absolute inset-0 flex items-center justify-center",
          reverse ? "animate-spin-reverse" : "animate-spin",
          className
        )}
        style={{
          animationDuration: `${calculatedDuration}s`,
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          const angle = (360 / React.Children.count(children)) * index;
          return (
            <div
              key={index}
              style={{
                transform: `rotate(${angle}deg) translate(${responsiveRadius}px) rotate(-${angle}deg)`,
                width: `${responsiveIconSize}px`,
                height: `${responsiveIconSize}px`,
              }}
              className="absolute flex items-center justify-center"
            >
              {child}
            </div>
          );
        })}
      </div>
    </>
  );
}
