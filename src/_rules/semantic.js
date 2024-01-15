import { directionMap, handler as h } from '#utils';
import { escapeSelector } from '@unocss/core';

const handleBorder = ([, direction = '', cssvar = '']) => directionMap[direction.substring(1)]?.map((dir) => [`border${dir}-color`, h.semanticToken(`border${cssvar}`)]);

const handleDivide = ([_selector, direction = '', cssvar = '']) => `.${escapeSelector(_selector)}>*+*{${directionMap[direction.substring(1)]?.map((dir) => `border${dir}-color: ${h.semanticToken(`border${cssvar}`)};`).join('')}}`;

export const semanticRules = [
  [/^s-bg(-.+)?$/, ([, cssvar = '']) => ({ 'background-color': h.semanticToken(`background${cssvar}`) })],
  [/^s-text(-.+)?$/, ([, cssvar = '']) => ({ color: h.semanticToken(`text${cssvar}`) })],
  [/^s-icon(-.+)?$/, ([, cssvar = '']) => ({ color: h.semanticToken(`icon${cssvar}`) })],
  [/^s-border(-[lrtbxy])?(-.+)?$/, handleBorder],
  [/^s-outline(-.+)?$/, ([, cssvar = '']) => ({ 'outline-color': h.semanticToken(`border${cssvar}`) })],
  [/^s-divide(-[xy])?(-.+)?$/, handleDivide],
];
