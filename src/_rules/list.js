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

const listCheckedContainerStyles = entriesToCss(
  Object.entries({
    'line-height': 'var(--w-font-line-height-1)', //TODO: Add proper line-height variable
  }),
);
const listCheckedItemStyles = entriesToCss(
  Object.entries({
    position: 'relative',
    'padding-left': '24px', //TODO: Change to corresponding variable when available
  }),
);
const checkmarkStyles = entriesToCss(
  Object.entries({
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '16px', //TODO: Change to corresponding variable when available
    height: '28px', //TODO: Change to corresponding variable when available
    left: 0,
    color: 'var(--w-s-color-icon-primary)',
    'background-size': 'contain',
    'background-position': '50%',
    'background-repeat': 'no-repeat',
    'background-image': '""', //TODO: Can we do this with an svg image url here? Or how will we solve this? Themeable?
  }),
);

export const listChecked = [
  [
    /^list-checked$/,
    ([selector]) => {
      const listContainer = `.${selector}{${listCheckedContainerStyles}}`;
      const listItem = `.${selector}>li{${listCheckedItemStyles}}`;
      const checkmark = `.${selector}>li::before{${checkmarkStyles}}`;
      return listContainer + listItem + checkmark;
    },
  ],
];
