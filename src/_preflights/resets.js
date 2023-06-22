import fetch from 'node-fetch';

export const resets = {
  layer: 'preflights',
  getCSS: async () => (await fetch('https://assets.finn.no/pkg/@warp-ds/css/v1/resets.min.css')).text(),
};
