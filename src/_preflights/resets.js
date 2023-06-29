const reset = (await fetch('https://assets.finn.no/pkg/@warp-ds/css/v1/resets.min.css')).text();

export const resets = {
  layer: 'preflights',
  getCSS: () => reset,
};
