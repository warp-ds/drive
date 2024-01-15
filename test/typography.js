import { expect, test } from 'vitest';
import { setup } from './_helpers.js';
import { textMap, lineHeightMap } from '#utils';
import { typographyAliases } from '../src/_shortcuts/typography.js';

setup();

test('typography - text classes ', async ({ uno }) => {
  const classes = Object.entries(textMap)
    .map(([number, size]) => [`text-${number}`, `text-${size}`])
    .flat(1);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('typography - leading classes ', async ({ uno }) => {
  const classes = Object.entries(lineHeightMap)
    .map(([number, size]) => [`leading-${number}`, `leading-${size}`])
    .flat(1);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('typography - leading classes with arbitrary values', async ({ uno }) => {
  const classes = [`leading-[24]`, `leading-[11]`, `leading-[24px]`, `leading-[24rem]`].flat();
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('shortcuts', async ({ uno }) => {
  const classes = Object.keys(typographyAliases);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
