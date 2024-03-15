import { directionMap, handler as h } from '#utils';
import { escapeSelector } from '@unocss/core';

const handleBorder = ([, direction = '', semanticVal = '']) => directionMap[direction.substring(1)]?.map((dir) => [`border${dir}-color`, h.semanticToken(`border${semanticVal}`)]);

const handleDivide = ([_selector, direction = '', semanticVal = '']) => `.${escapeSelector(_selector)}>*+*{${directionMap[direction.substring(1)]?.map((dir) => `border${dir}-color: ${h.semanticToken(`border${semanticVal}`)};`).join('')}}`;

const getSemanticRegEx = (groupName, directions) => new RegExp(`^s-${groupName}${directions ? `(-[${directions}])?` : ''}((-[^\\/]+)?(\\/(0|[1-9][0-9]?|100))?)?$`);

export const semanticRules = [
  [getSemanticRegEx('bg'), ([, semanticVal = '']) => ({ 'background-color': h.semanticToken(`background${semanticVal}`) })],
  [getSemanticRegEx('text'), ([, semanticVal = '']) => ({ color: h.semanticToken(`text${semanticVal}`) })],
  [getSemanticRegEx('icon'), ([, semanticVal = '']) => ({ color: h.semanticToken(`icon${semanticVal}`) })],
  [getSemanticRegEx('outline'), ([, semanticVal = '']) => ({ 'outline-color': h.semanticToken(`border${semanticVal}`) })],
  [getSemanticRegEx('border', 'lrtbxy'), handleBorder],
  [getSemanticRegEx('divide', 'xy'), handleDivide],
  [/^s-surface-sunken$/, () => ({ 'background-color': 'var(--w-s-color-surface-sunken)' })],
  [
    /^s-(surface-elevated-.*)$/,
    ([, semanticVal]) => ({
      'background-color': `var(--w-s-color-${semanticVal}`,
      'box-shadow': `var(--w-s-shadow-${semanticVal})`,
    }),
  ],
];
