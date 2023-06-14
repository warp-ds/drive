import { escapeSelector } from '@unocss/core';
import { directionMap, cornerMap } from "#utils";
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
  [/^border$/, handlerBorder],
  [/^border-transparent$/, () => ({ 'border-color': 'transparent' })],
  [/^border-inherit$/, () => ({ 'border-color': 'inherit' })],
  [/^border-current$/, () => ({ 'border-color': 'currentColor' })],
  [/^border()-(\d+)$/, handlerBorder, { autocomplete: "(border)-<directions>" }],
  [/^border-([lrtbxy])$/, handlerBorder],
  [/^border-([lrtbxy])-(\d+)$/, handlerBorder],
  [/^border()-(.+)$/, handlerBorderStyle, { autocomplete: "(border)-style" }],
  [/^border-([lrtbxy])-(.+)$/, handlerBorderStyle],
  [
    /^border-([lrtb])?-?\[(\d+)\]$/,
    handlerArbitraryBorderSize,
    {
      autocomplete: [
        'border-<directions>-[$width]',
      ],
    },
  ],
  // divide
  [/^divide-([xy])-(\d+)$/, handlerDivideBorder, { autocomplete: `divide-<x|y>-(${Object.keys(lineWidth).join('|')})-(reverse)` }],
  [/^divide-([xy])$/, handlerDivideBorder],
  [/^divide-([xy])-reverse$/, ([, d]) => ({ [`--w-divide-${d}-reverse`]: 1 })],
];

function handlerBorder(m, ctx) {
  const borderSizes = handlerBorderSize(m, ctx);

  if (borderSizes ) return [...borderSizes];
}

function handlerBorderSize([, a = "", b], { theme }) {
  const v = theme.lineWidth?.[b ?? 1];
  if (a in directionMap && v != null) return directionMap[a].map((i) => [`border${i}-width`, v]);
}

function handlerArbitraryBorderSize([, a, v]) {
  if (a in directionMap && v != null) return directionMap[a].map((i) => [`border${i}-width`, `${v}px`]);

  return [[`border-width`, `${v}px`]];
}

function handlerBorderStyle([, a = "", s]) {
  if (borderStyles.includes(s) && a in directionMap) return directionMap[a].map((i) => [`border${i}-style`, s]);
}

export const rounded = [
  [/^rounded()(?:-(.+))?$/, handlerRounded, { autocomplete: ['(rounded)', '(rounded)-<num>'] }],
  [/^rounded-([rltb]+)(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se])(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se]-[bi][se])(?:-(.+))?$/, handlerRounded],
];

function handlerRounded([, a = '', s], { theme }) {
  const v = theme.borderRadius?.[s ?? 4];
  if (a in cornerMap && v != null) return cornerMap[a].map(i => [`border${i}-radius`, v]);
}

function handleDivideBorderSizes(direction, width, reverse, theme) {
  const borderWidth = theme.lineWidth?.[width ?? 1];
  if (direction in directionMap && borderWidth) {
    return directionMap[direction].map((i) => {
      if (i === directionMap[direction][1]) {
        return `border${i}-width:calc(${borderWidth} * var(--w-divide-${direction}-reverse))`;
      }
      return `border${i}-width:calc(${borderWidth} * calc(1 - var(--w-divide-${direction}-reverse)))`;
    });
  }
}

function handlerDivideBorder([_selector, direction = "", width, reverse], { theme }) {
  const sizes = handleDivideBorderSizes(direction, width, reverse, theme)?.join(';');
  const defaultReverse = `--w-divide-${direction}-reverse:0`;
  if (sizes) {
    const selector = escapeSelector(_selector);
    return `.${selector}>*+*{${defaultReverse};${sizes}}`;
  }
}

