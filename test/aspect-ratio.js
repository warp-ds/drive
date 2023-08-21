import { setup } from './_helpers.js';
import { expect, test } from 'vitest';

setup();

test('it generates backported aspect-ratios', async ({ uno }) => {
  const classes = ['aspect-16/9', 'aspect-1/1', 'aspect-4/3', 'aspect-2/1'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('aspect-ratio, -video and -square', async ({ uno }) => {
  const classes = ['aspect-ratio', 'aspect-video', 'aspect-square'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});