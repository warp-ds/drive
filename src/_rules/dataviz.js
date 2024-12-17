import { directionMap, handler as h } from '#utils';

const handleBorder = ([, direction = '', semanticVal = '']) =>
  directionMap[direction.substring(1)]?.map((dir) => [`border${dir}-color`, h.datavizToken(`border${semanticVal}`)]);

const getSemanticRegEx = (groupName, directions) =>
  new RegExp(`^dv-s-${groupName}${directions ? `(-[${directions}])?` : ''}((-[^\\/]+)?(\\/(0|[1-9][0-9]?|100))?)?$`);

export const datavizRules = [
  // utilities pointing to background tokens
  [getSemanticRegEx('svgfill'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`background${semanticVal}`) })],
  [
    getSemanticRegEx('bg'),
    ([, semanticVal = '']) => ({
      'background-color': h.datavizToken(`background${semanticVal}`),
    }),
  ],

  // utilities pointing to line tokens
  [
    getSemanticRegEx('svgline'),
    ([, semanticVal = '']) => ({
      stroke: h.datavizToken(`line${semanticVal}`),
    }),
  ],

  // utilities pointing to border tokens
  [
    getSemanticRegEx('svgborder'),
    ([, semanticVal = '']) => ({
      fill: h.datavizToken(`border${semanticVal}`),
    }),
  ],
  [getSemanticRegEx('border', 'lrtbxy'), handleBorder],
  [
    getSemanticRegEx('outline'),
    ([, semanticVal = '']) => ({
      'outline-color': h.datavizToken(`border${semanticVal}`),
    }),
  ],

  // utilities pointing to text tokens
  [getSemanticRegEx('svgtext'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`text${semanticVal}`) })],
  [getSemanticRegEx('text'), ([, semanticVal = '']) => ({ color: h.datavizToken(`text${semanticVal}`) })],

  // utilities pointing to icon tokens
  [getSemanticRegEx('svgiconfill'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`icon${semanticVal}`) })],
  [getSemanticRegEx('svgiconstroke'), ([, semanticVal = '']) => ({ stroke: h.datavizToken(`icon${semanticVal}`) })],
  [getSemanticRegEx('icon'), ([, semanticVal = '']) => ({ color: h.datavizToken(`icon${semanticVal}`) })],
];
