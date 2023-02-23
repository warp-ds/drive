import { escapeSelector } from '@unocss/core';
import { directionMap, cornerMap } from "#utils";

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
  [/^border()-(\d+)$/, handlerBorder, { autocomplete: "(border)-<directions>" }],
  [/^border-([xy])-(\d+)$/, handlerBorder],
  [/^border-([rltb])$/, handlerBorder],
  [/^border-([rltb])-(\d+)$/, handlerBorder],
  [/^border()-(.+)$/, handlerBorderStyle, { autocomplete: "(border)-style" }],
  [/^border-([xy])-(.+)$/, handlerBorderStyle],
  [/^border-([rltb])-(.+)$/, handlerBorderStyle],
  // divide
  [/^divide-([xy])-?(\d+)?$/, handlerDivideBorder],
];

function handlerBorder(m, ctx) {
  const borderSizes = handlerBorderSize(m, ctx);
  if (borderSizes ) return [...borderSizes];
}

function handlerBorderSize([, a = "", b], { theme }) {
  const v = theme.lineWidth?.[b ?? 1];
  if (a in directionMap && v != null) return directionMap[a].map((i) => [`border${i}-width`, v]);
}

function handlerBorderStyle([, a = "", s]) {
  if (borderStyles.includes(s) && a in directionMap) return directionMap[a].map((i) => [`border${i}-style`, s]);
}

export const rounded = [
  [/^rounded()(?:-(.+))?$/, handlerRounded, { autocomplete: ['(rounded)', '(rounded)-<num>'] }],
  [/^rounded-([rltb]+)(?:-(.+))?$/, handlerRounded],
  [/^rounded([rltb]{2})(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se])(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se]-[bi][se])(?:-(.+))?$/, handlerRounded],
];

function handlerRounded([, a = '', s], { theme }) {
  const v = theme.borderRadius?.[s ?? 4];
  if (a in cornerMap && v != null) return cornerMap[a].map(i => [`border${i}-radius`, v]);
}

function handleDivideBorderSizes(direction, width, theme) {
  const borderWidth = theme.lineWidth?.[width ?? 1];
  if (direction in directionMap && borderWidth) {
    return directionMap[direction].map((i) => {
      if (i === directionMap[direction][1]) {
        return `border${i}-width:0px`;
      }
      return `border${i}-width:${borderWidth}`;
    });
  };
}

function handlerDivideBorder([_selector, direction = "", width], { theme }) {
  const sizes = handleDivideBorderSizes(direction, width, theme)?.join(';');
  if (sizes) {
    const selector = escapeSelector(_selector);
    return `.${selector}>*+*{${sizes}}`;
  }
}
