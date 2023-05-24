const headingsReset = `
  h1  {
    font-size: var(--w-font-size-xxl);
    line-height:var(--w-line-height-xxl);
  }

  h2  {
    font-size:var(--w-font-size-xl);
    line-height:var(--w-line-height-xl);
  }

  h3  {
    font-size:var(--w-font-size-l);
    line-height:var(--w-line-height-l);
  }

  h4  {
    font-size:var(--w-font-size-m);
    line-height:var(--w-line-height-m);
  }

  h5  {
    font-size:var(--w-font-size-s);
    line-height:var(--w-line-height-s);
  }
`;

export const headingsBase = {
  layer: 'preflights',
  getCSS() {
    return headingsReset;
  },
};
