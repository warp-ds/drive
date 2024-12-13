import { escapeSelector } from '@unocss/core';

import { directionMap, handler as h } from '#utils';

const handleBorder = ([, direction = '', semanticVal = '']) =>
  directionMap[direction.substring(1)]?.map((dir) => [`border${dir}-color`, h.datavizToken(`border${semanticVal}`)]);

const handleDivide = ([_selector, direction = '', semanticVal = '']) =>
  `.${escapeSelector(_selector)}>*+*{${directionMap[direction.substring(1)]?.map((dir) => `border${dir}-color: ${h.datavizToken(`border${semanticVal}`)};`).join('')}}`;

const getSemanticRegEx = (groupName, directions) =>
  new RegExp(`^dv-s-${groupName}${directions ? `(-[${directions}])?` : ''}((-[^\\/]+)?(\\/(0|[1-9][0-9]?|100))?)?$`);

export const datavizRules = [
  [
    getSemanticRegEx('bg'),
    ([, semanticVal = '']) => ({
      'background-color': h.datavizToken(`fill${semanticVal}`),
    }),
  ],
  [getSemanticRegEx('fill'), ([, semanticVal = '']) => ({ fill: h.datavizToken(`fill${semanticVal}`) })],
  [
    getSemanticRegEx('line'),
    ([, semanticVal = '']) => ({
      stroke: h.datavizToken(`line${semanticVal}`),
    }),
  ],
  [getSemanticRegEx('text'), ([, semanticVal = '']) => ({ color: h.datavizToken(`text${semanticVal}`) })],
  [getSemanticRegEx('icon'), ([, semanticVal = '']) => ({ color: h.datavizToken(`icon${semanticVal}`) })],
  [
    getSemanticRegEx('outline'),
    ([, semanticVal = '']) => ({
      'outline-color': h.datavizToken(`border${semanticVal}`),
    }),
  ],
  [getSemanticRegEx('border', 'lrtbxy'), handleBorder],
  [getSemanticRegEx('divide', 'xy'), handleDivide],
];
