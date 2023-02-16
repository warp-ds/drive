const directions = {
  '': '',
  'x': 'column-',
  'y': 'row-',
};

const handleGap = ([, d = '', s], { theme }) => {
  const v = theme.spacing?.[s];

  if (v != null) {
    return {
      [`${directions[d]}gap`]: v,
    };
  }
};

export const gap = [
  [/^gap-?()(\d+)$/, handleGap, { autocomplete: ['gap-$spacing'] }],
  [/^gap-([xy])-?(\d+)$/, handleGap, { autocomplete: ['gap-(x|y)-$spacing'] }],
];
