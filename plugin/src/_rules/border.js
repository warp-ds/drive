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
  [/^border()-(.+)$/, handlerBorderStyle, { autocomplete: "(border)-<directions>" }],
  [/^border-([xy])-(.+)$/, handlerBorderStyle],
  [/^border-([rltb])-(.+)$/, handlerBorderStyle],
];

function handlerBorder(m, ctx) {
  const borderSizes = handlerBorderSize(m, ctx);
  const borderStyle = handlerBorderStyle(["", m[1], "solid"]);
  if (borderSizes && borderStyle) {
    return [...borderSizes, ...borderStyle];
  }
}

function handlerBorderSize([, a = "", b], { theme }) {
  const v =
    theme.lineWidth?.[b || "DEFAULT"] ?? h.bracket.cssvar.global.px(b || "1");
  if (a in directionMap && v != null)
    return directionMap[a].map((i) => [`border${i}-width`, v]);
}

function handlerBorderStyle([, a = "", s]) {
  if (borderStyles.includes(s) && a in directionMap)
    return directionMap[a].map((i) => [`border${i}-style`, s]);
}
