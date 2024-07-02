import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('shadows work', async ({ uno }) => {
  const classes = ['shadow-s', 'shadow-m', 'shadow-l', 'shadow-xl'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('arbitrary box-shadows work', async ({ uno }) => {
  const classes = [
    'shadow-[var(--arbitrary-shadow-var)]',
    'shadow-[--w-shadow-m]',
    'shadow-[0_6px_12px_rgba(0,0,0,.2),0_10px_20px_rgba(0,0,0,.1)]',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('drop shadows', async ({ uno }) => {
  const classes = ['drop-shadow-s', 'drop-shadow-m', 'drop-shadow-l', 'drop-shadow-xl'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
