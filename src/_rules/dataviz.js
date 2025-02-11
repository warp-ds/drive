import { directionMap, handler as h } from '#utils';

const handleBorder = ([, category, direction = '', semanticVal = '']) =>
  directionMap[direction.substring(1)]?.map((dir) => [`border${dir}-color`, h.datavizToken(`${category}${semanticVal}`)]);

const getSemanticRegEx = (groupName, directions) =>
  new RegExp(`^dv-s-${groupName}${directions ? `(-[${directions}])?` : ''}((-[^\\/]+)?(\\/(0|[1-9][0-9]?|100))?)?$`);

export const datavizRules = [
  [
    /^dv-s-(fill|stroke)-(line|border|text|icon)((-[^\/]+)?(\/(0|[1-9][0-9]?|100))?)?$/,
    ([, svgProperty, category, semanticVal = '']) => ({
      [svgProperty]: h.datavizToken(`${category}${semanticVal}`),
    }),
  ],
  [/^dv-s-(line|border)(-[lrtbxy])?((-[^\/]+)?(\/(0|[1-9][0-9]?|100))?)?$/, handleBorder],
  [getSemanticRegEx('fill-bg'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`background${semanticVal}`) })],
  [getSemanticRegEx('bg'), ([, semanticVal = '']) => ({ 'background-color': h.datavizToken(`background${semanticVal}`) })],
  [getSemanticRegEx('chartline'), ([, semanticVal = '']) => ({ color: h.datavizToken(`chartline${semanticVal}`) })],
  [getSemanticRegEx('fill-chartline'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`chartline${semanticVal}`) })],
  [getSemanticRegEx('stroke-chartline'), ([, semanticVal = '']) => ({ stroke: h.datavizToken(`chartline${semanticVal}`) })],
  [getSemanticRegEx('chartbg'), ([, semanticVal = '']) => ({ color: h.datavizToken(`chartbackground${semanticVal}`) })],
  [getSemanticRegEx('fill-chartbg'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`chartbackground${semanticVal}`) })],
  [getSemanticRegEx('stroke-chartbg'), ([, semanticVal = '']) => ({ stroke: h.datavizToken(`chartbackground${semanticVal}`) })],
  [getSemanticRegEx('charttext'), ([, semanticVal = '']) => ({ color: h.datavizToken(`charttext${semanticVal}`) })],
  [getSemanticRegEx('fill-charttext'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`charttext${semanticVal}`) })],
  [getSemanticRegEx('stroke-charttext'), ([, semanticVal = '']) => ({ stroke: h.datavizToken(`charttext${semanticVal}`) })],
  [getSemanticRegEx('outline'), ([, semanticVal = '']) => ({ 'outline-color': h.datavizToken(`border${semanticVal}`) })],
  [getSemanticRegEx('text'), ([, semanticVal = '']) => ({ color: h.datavizToken(`text${semanticVal}`) })],
  [getSemanticRegEx('icon'), ([, semanticVal = '']) => ({ color: h.datavizToken(`icon${semanticVal}`) })],
];
