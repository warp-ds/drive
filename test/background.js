import { setup } from './_helpers.js';
import { expect, test } from 'vitest';
import { positionMap } from '#utils';

setup();

test('bg positions', async ({ uno }) => {
  const positions = Object.values(positionMap);
  const classes = positions.map(e => `bg-${e}`);
  const twoDimensionClasses = positions.flatMap(e => positions.map(f => `bg-${e}-${f}`));
  const { css } = await uno.generate([...classes, ...twoDimensionClasses]);
  expect(css).toMatchSnapshot();
});

test('bg repeats', async ({ uno }) => {
  const classes = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg origins', async ({ uno }) => {
  const classes = ['border', 'padding', 'content'].map(e => `bg-origin-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg size', async ({ uno }) => {
  const classes = ['auto', 'cover', 'contain'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg attachments', async ({ uno }) => {
  const classes = ['fixed', 'local', 'scroll'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
