let reset;
async function getReset() {
  if (reset) return reset;
  else {
    reset = (await fetch('https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css')).text();
    return reset;
  }
}

export const resets = {
  layer: 'preflights',
  getCSS: getReset,
};
