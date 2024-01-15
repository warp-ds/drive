import { setup, getFractions } from './_helpers.js';
import { expect, test } from 'vitest';
import { positionMap } from '#utils';
import { spaceBase } from '#theme';

setup();

test('origin', async ({ uno }) => {
  const classes = Object.keys(positionMap).map((e) => `origin-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('translate', async ({ uno }) => {
  const classes = ['full', ...spaceBase].flatMap((e) => [`translate-x-${e}`, `translate-y-${e}`]);
  classes.push(...getFractions('translate-x'));
  classes.push(...getFractions('translate-y'));
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('arbitrary translate', async ({ uno }) => {
  const classes = ['translate-x-[75]', 'translate-x-[75rem]', 'translate-x-[75px]', 'translate-y-[75]', 'translate-y-[75rem]', 'translate-y-[75px]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('rotate', async ({ uno }) => {
  const classes = [0, 1, 2, 3, 6, 12, 45, 90, 180].map((e) => `rotate-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('skew', async ({ uno }) => {
  const classes = [0, 1, 2, 3, 6, 12].flatMap((e) => [`skew-y-${e}`, `skew-x-${e}`]);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('scale', async ({ uno }) => {
  const classes = [0, 50, 75, 90, 100, 105, 110, 125, 150].flatMap((e) => [`scale-${e}`, `scale-x-${e}`, `scale-y-${e}`]);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('transform', async ({ uno }) => {
  const classes = ['transform', 'transform-cpu', 'transform-gpu', 'transform-none'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
