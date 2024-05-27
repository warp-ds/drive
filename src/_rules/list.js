import { entriesToCss } from '@unocss/core';
import { makeGlobalStaticRules } from '#utils';

const listStyleTypes = {
  disc: 'disc',
  circle: 'circle',
  square: 'square',
  decimal: 'decimal',
  'zero-decimal': 'decimal-leading-zero',
};

export const listStyle = [
  // base
  [
    /^list-(.+)$/,
    ([, alias]) => {
      const style = listStyleTypes[alias];
      if (style) return { 'list-style-type': style };
    },
  ],
  // styles
  ['list-outside', { 'list-style-position': 'outside' }],
  ['list-inside', { 'list-style-position': 'inside' }],
  ['list-none', { 'list-style-type': 'none' }],
  ...makeGlobalStaticRules('list', 'list-style-type'),
];

const listCheckedItemStyles = entriesToCss(
  Object.entries({
    position: 'relative',
    'padding-left': '1.5em',
  }),
);
const checkmarkStyles = entriesToCss(
  Object.entries({
    content: '""',
    position: 'absolute',
    left: 0,
    width: '1em',
    height: '1.2em',
    background: 'no-repeat 50%/contain var(--w-icon-list-checked)',
  }),
);

export const listChecked = [
  [
    /^list-checked$/,
    ([selector]) => {
      const listItem = `.${selector}>li{${listCheckedItemStyles}}`;
      const checkmark = `.${selector}>li::before{${checkmarkStyles}}`;
      return listItem + checkmark;
    },
  ],
];
