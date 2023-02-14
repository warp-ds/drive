
const handleOpacity = ([, d = ''], { theme }) => {
  const v = theme.opacity[d];

  if (v != null) {
    return {
        ['opacity']: v,
    };
}

};

export const opacity = [
  [/^opacity-?(\d+)$/, handleOpacity, { autocomplete: 'opacity-${opacity}' }],
];
