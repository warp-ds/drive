import { directionMap } from '#utils';

export const spaceMargins = [
  [/^space-([xy])-(\d+)$/, handlerSpace, { autocomplete: ['space-(x|y)', 'space-(x|y)-reverse', 'space-(x|y)-$spacing'] }],
  [/^space-([xy])$/, handlerSpace],
  [/^space-([xy])-reverse$/, ([, d]) => ({ [`--w-space-${d}-reverse`]: 1 })],
];

function handlerSpace([, d, s = 1], { theme }) {
  const v = theme.spacing?.[s];
  if (v != null) {
    const results = directionMap[d].map((item) => {
      const key = `margin${item}`;
      const value = item.endsWith('right') || item.endsWith('bottom')
        ? `calc(${v} * var(--w-space-${d}-reverse))`
        : `calc(${v} * calc(1 - var(--w-space-${d}-reverse)))`;
      return [key, value];
    });

    if (results) {
      return [
        [`--w-space-${d}-reverse`, 0],
        ...results,
      ];
    }
  }
}
