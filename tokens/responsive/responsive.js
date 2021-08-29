const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1280,
  xl: 1440,
  xxl: 1600,
};

const remCalc = (size) => {
  const remValue = size / 16;
  return `${remValue}rem`;
};

export const mediaQuery = (bpVal, max = false) => {
  // get the value
  bpVal = breakpoints[bpVal];

  // if max, subtract a pixel
  max && (bpVal -= 1);

  // to REMs
  bpVal = remCalc(bpVal);

  // min or max width
  let property = "min-width";
  if (max) {
    property = "max-width";
  } else {
  }

  return `@media (${property}: ${bpVal})`;
};
