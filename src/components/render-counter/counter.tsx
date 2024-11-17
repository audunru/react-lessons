import React, { useRef } from "react";
import colors from "tailwindcss/colors";

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const greenRgb = hexToRgb(colors.green[500]);
const redRgb = hexToRgb(colors.red[500]);

const getColor = (value: number) => {
  const percentage = Math.min((value - 1) / 4, 1); // Transition between 1 and 5
  const r = Math.round(greenRgb.r + (redRgb.r - greenRgb.r) * percentage).toString(10);
  const g = Math.round(greenRgb.g + (redRgb.g - greenRgb.g) * percentage).toString(10);
  const b = Math.round(greenRgb.b + (redRgb.b - greenRgb.b) * percentage).toString(10);
  return `rgb(${r}, ${g}, ${b})`;
};

export const Counter: React.FC = () => {
  const count = useRef<number>(0);

  count.current++;

  return (
    <p className="text-xl dark:text-gray-100">
      Render count:
      <span
        className="inline-block w-8 h-8 text-center text-gray-800 rounded-full ml-3"
        style={{
          backgroundColor: getColor(count.current),
        }}
      >
        {count.current}
      </span>
    </p>
  );
};
