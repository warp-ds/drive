import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('backdrop blur', async ({ uno }) => {
  const classes = [
    'backdrop-blur-none',
    'backdrop-blur',
    'backdrop-blur-s',
    'backdrop-blur-m',
    'backdrop-blur-l',
    'backdrop-blur-xl',
    'backdrop-blur-xxl',
    'backdrop-blur-xxxl',
  ];
  const antiClasses = [
    'backdrop-blur-',
    'backdrop-blur-4',
    'backdrop-blur-inherit',
    'backdrop-blur-sm',
    'backdrop-blur-lg',
    'backdrop-blur-xl2',
    'backdrop-blur-3xl',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});
