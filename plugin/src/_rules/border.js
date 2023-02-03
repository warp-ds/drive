import { handler as h, directionMap, cornerMap } from "#utils";

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
];

function handlerBorder(m, ctx) {
  const borderSizes = handlerBorderSize(m, ctx);

  if (borderSizes ) return [...borderSizes];
}

function handlerBorderSize([, a = "", b], { theme }) {
  const v = theme.lineWidth?.[b ?? 1] ?? h.global(b);
  if (a in directionMap && v != null)
    return directionMap[a].map((i) => [`border${i}-width`, v]);
}

function handlerBorderStyle([, a = "", s]) {
  if (borderStyles.includes(s) && a in directionMap)
    return directionMap[a].map((i) => [`border${i}-style`, s]);
}

export const rounded = [
  [/^rounded()(?:-(.+))?$/, handlerRounded, { autocomplete: ['(rounded)', '(rounded)-<num>'] }],
  [/^rounded-([rltb]+)(?:-(.+))?$/, handlerRounded],
  [/^rounded([rltb]{2})(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se])(?:-(.+))?$/, handlerRounded],
  [/^rounded-([bi][se]-[bi][se])(?:-(.+))?$/, handlerRounded],
]

function handlerRounded([, a = '', s], { theme }) {
  const v = theme.borderRadius?.[s ?? 1] || h.global(s);
  if (a in cornerMap && v != null)
      return cornerMap[a].map(i => [`border${i}-radius`, v]);
}
