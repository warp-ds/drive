import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

import { durationBase } from '#theme';

setup();

test('transition', async ({ uno }) => {
  const classes = ['none', 'all', 'colors', 'opacity', 'shadow', 'transform'].map((e) => `transition-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('duration', async ({ uno }) => {
  const classes = durationBase.map((e) => `duration-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('delay', async ({ uno }) => {
  const classes = durationBase.map((e) => `delay-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('ease', async ({ uno }) => {
  const classes = ['linear', 'in', 'out', 'in-out'].map((e) => `ease-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('ease with arbitrary values', async ({ uno }) => {
  const classes = [
    'ease-[cubic-bezier(0.95,0.05,0.795,0.035)]',
    'ease-[cubic-bezier(.29, 1.01, 1, -0.68)]',
    'cubic-bezier(0.1, 0.7, 1, 0.1)',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
