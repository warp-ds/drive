import { entriesToCss } from '@unocss/core';

const listItemStyles = entriesToCss(Object.entries({
  position: 'relative',
  'padding-left': '24px', //TODO: Change to corresponding variable when available
}));
const checkmarkStyles = entriesToCss(Object.entries({
  content: '""',
  display: 'block',
  position: 'absolute',
  width: '16px', //TODO: Change to corresponding variable when available
  height: '28px', //TODO: Change to corresponding variable when available
  left: 0,
  color: 'var(--w-list-color-icon-checked)',
  'background-size': 'contain',
  'background-position': '50%',
  'background-repeat': 'no-repeat',
  'background-image': '""', //TODO: Can we do this with an svg image url here? Or how will we solve this? Themeable?
}));

export const listChecked = [
  [/^list-checked$/, ([selector]) => {
    const base = `.${selector}{line-height: var(--w-font-line-height-1);}`; //TODO: Add proper line-height variable
    const child = `.${selector}>li{${listItemStyles}}`;
    const checkmark = `.${selector}>li::before{${checkmarkStyles}}`;
    return base + child + checkmark;
  }],
];
