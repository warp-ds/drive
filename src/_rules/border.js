import { escapeSelector } from '@unocss/core';
import { directionMap, cornerMap, resolveArbitraryValues } from "#utils";
import { lineWidth } from '#theme';

const borderStyles = [
  "solid",
  "dashed",
  "dotted",
  "double",
  "hidden",
  "none",
  "groove",
  "ridge",
  "inset",
  "outset",
];

export const borders = [
  // border-width
  [
    /^border(-[lrtbxy])?$/,
    handleBorderWidth,
    { autocomplete: ['border', 'border-<directions>'] },
  ],
  [
    /^border(-[lrtbxy])?-(\d+)$/,
    handleBorderWidth,
    { autocomplete: [`border-(${Object.keys(lineWidth).join('|')})`, `border-<directions>-(${Object.keys(lineWidth).join('|')})`] },
  ],
  [
    /^border(-[lrtbxy])?-\[(\d+)(rem|px|%)?]$/,
    handleArbitraryBorderWidth,
    { autocomplete: ['border-[<num>]', 'border-<directions>-[<num>]'] },
  ],

  // border-color
  [/^border-transparent$/, () => ({ 'border-color': 'transparent' })],
  [/^border-inverted$/, () => ({ 'border-color': 'var(--w-s-border-inverted)' })],
  [/^border-inherit$/, () => ({ 'border-color': 'inherit' })],
  [/^border-current$/, () => ({ 'border-color': 'currentColor' })],
  [/^border(-[lrtbxy])?-\[((?:var|--).*)]$/, handleArbitraryBorderColor],

  // border-style
  [
    new RegExp(`^border(-[lrtbxy])?-(${borderStyles.join('|')})$`),
    handleBorderStyle,
    { autocomplete: [`border-(${borderStyles.join('|')})`, `border-<directions>-(${borderStyles.join('|')})`] },
  ],
];

function handleBorderWidth([, dir = '', width], { theme }) {
  const applicableWidth = theme.lineWidth?.[width ?? 1];
  if (applicableWidth) return directionMap[dir.substring(1)]?.map((i) => [`border${i}-width`, applicableWidth]);
}

function handleArbitraryBorderWidth([, dir = '', value, unit], context) {
  return directionMap[dir.substring(1)]?.map((i) => [`border${i}-width`, resolveArbitraryValues(value, unit, context)]);
}

function handleArbitraryBorderColor([, dir = '', val]) {
  const cssvar = val.startsWith('var') ? val : `var(${val})`;
  return directionMap[dir.substring(1)]?.map((i) => [`border${i}-color`, cssvar]);
}

function handleBorderStyle([, dir = '', style]) {
  return directionMap[dir.substring(1)]?.map((i) => [`border${i}-style`, style]);
}

export const divide = [
  // border-width
  [/^divide-([xy])$/, handleDivideBorder, { autocomplete: 'divide-(x|y)' }],
  [
    /^divide-([xy])-(\d+)(-reverse)?$/,
    handleDivideBorder,
    { autocomplete: [`divide-(x|y)-(${Object.keys(lineWidth).join('|')})`, `divide-(x|y)-(${Object.keys(lineWidth).join('|')})-reverse`] },
  ],

  // reverse order
  [/^divide-([xy])-reverse$/, ([, d]) => ({ [`--w-divide-${d}-reverse`]: 1 })],

  // arbitrary border-color
  [/^divide(-[xy])?-\[((?:var|--).+)]$/, handleArbitraryDivideColor],
];

function handleDivideBorder([_selector, dir, width, reverse], { theme }) {
  const applicableWidth = theme.lineWidth?.[width ?? 1];
  if (applicableWidth) {
    const sizes = directionMap[dir]?.map((i) => {
      const reverseVar = `var(--w-divide-${dir}-reverse)`;
      const reverseCalc = (i === directionMap[dir][1]) ? reverseVar : `calc(1 - ${reverseVar})`;
      return `border${i}-width:calc(${applicableWidth} * ${reverseCalc})`;
    });
    if (sizes) {
      return `.${escapeSelector(_selector)}>*+*{--w-divide-${dir}-reverse:${reverse ? 1 : 0};${sizes.join(';')};}`;
    }
  }
}

function handleArbitraryDivideColor([_selector, dir = '', val]) {
  const cssRules = directionMap[dir.substring(1)]?.map((i) => `border${i}-color: ${val.startsWith('var') ? val : `var(${val})`}`);
  if (cssRules) return `.${escapeSelector(_selector)}>*+*{${cssRules.join(';')};}`;
}

export const rounded = [
  [/^rounded()(?:-(.+))?$/, handleRounded, { autocomplete: ['rounded', 'rounded-<num>'] }],
  [/^rounded-([rltb]+)(?:-(.+))?$/, handleRounded],
  [/^rounded-([bi][se])(?:-(.+))?$/, handleRounded],
  [/^rounded-([bi][se]-[bi][se])(?:-(.+))?$/, handleRounded],
  // matching arbitrary values
  [
    /^rounded-\[(.\d*)(rem|px|%)?]$/,
    ([, value, unit], context) => ({
      'border-radius': resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^rounded-([rltb]+)-\[(.\d*)(rem|px|%)?]$/,
    ([, direction, value, unit], context) =>
      cornerMap[direction].map((i) => [
        `border${i}-radius`,
        resolveArbitraryValues(value, unit,context),
      ]),
  ],
];

function handleRounded([, corner = '', val], { theme }) {
  const applicableRadius = theme.borderRadius?.[val ?? 4];
  if (applicableRadius) return cornerMap[corner].map(i => [`border${i}-radius`, applicableRadius]);
}
