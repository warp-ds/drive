import { entriesToCss } from '@unocss/core';

const listItemStyles = entriesToCss(Object.entries({
  position: 'relative',
  'padding-left': 'var(--w-space-3)',
}));
const checkmarkStyles = entriesToCss(Object.entries({
  content: '""',
  display: 'block',
  position: 'absolute',
  width: '16px',
  height: '28px',
  left: 0,
  color: 'var(--w-list-color-icon-checked)',
  'background-size': 'contain',
  'background-position': '50%',
  'background-repeat': 'no-repeat',
  'background-image': '""',
}));

export const listChecked = [
  [/^list-checked$/, ([selector]) => {
    const base = `.${selector}{line-height: var(--w-font-line-height-1);}`; //TODO: Add proper line-height variable
    const child = `.${selector}>li{${listItemStyles}}`;
    const checkmark = `.${selector}>li::before{${checkmarkStyles}}`;
    return base + child + checkmark;
  }],
];
