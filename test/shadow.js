import { expect, test } from 'vitest';
import { setup } from './_helpers.js';

setup();

test('shadows work', async ({ uno }) => {
  const classes = ['shadow-s', 'shadow-m', 'shadow-l', 'shadow-xl'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('drop shadows', async ({ uno }) => {
  const classes = ['drop-shadow-s', 'drop-shadow-m', 'drop-shadow-l', 'drop-shadow-xl'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
