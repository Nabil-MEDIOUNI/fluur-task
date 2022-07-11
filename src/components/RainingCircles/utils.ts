import {  COLORS, SIZES } from "./constants";

export const createDot = () => {
  // pick random color and size
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const size = SIZES[Math.floor(Math.random() * SIZES.length)];

  let x = Math.floor(Math.random() * 100);

  return {
    color,
    size,
    x,
    y: 0,
  };
};
