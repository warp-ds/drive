// TODO: can we get rid of box-orient and webkit-box?
// seems like they might be supporting _very_ old browsers and are marked deprecated
export const lineClamp = [
  [
    /^line-clamp-(\d+)$/,
    ([, v]) => ({
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': v,
      'line-clamp': v,
    }),
    { autocomplete: ['line-clamp-<num>'] },
  ],
];
