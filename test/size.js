import { setup, getFractions } from './_helpers.js';
import { spaceBase } from '#theme';
import { describe, expect, test } from 'vitest';

setup();

const getSpecialSuffixes = (prefix) => ['full', 'fit', 'min', 'max', 'screen'].map(e => `${prefix}-${e}`);

describe('width and height', () => {
  test('width', async ({ uno }) => {
    const classes = spaceBase.map(e => `w-${e}`);
    classes.push(...getSpecialSuffixes('w'));
    classes.push(...getFractions('w'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height', async ({ uno }) => {
    const classes = spaceBase.map(e => `h-${e}`);
    classes.push(...getSpecialSuffixes('h'));
    classes.push(...getFractions('h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});

describe('max width and height', () => {
  test('max-width', async ({ uno }) => {
    const classes = spaceBase.map(e => `max-w-${e}`);
    classes.push(...getSpecialSuffixes('max-w'));
    classes.push(...getFractions('max-w'));
    classes.push('max-w-prose');
    classes.push('max-w-none');
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height', async ({ uno }) => {
    const classes = spaceBase.map(e => `max-h-${e}`);
    classes.push(...getSpecialSuffixes('max-h'));
    classes.push(...getFractions('max-h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});

describe('min width and height', () => {
  test('min-width', async ({ uno }) => {
    const classes = spaceBase.map(e => `min-w-${e}`);
    classes.push(...getSpecialSuffixes('min-w'));
    classes.push(...getFractions('min-w'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height', async ({ uno }) => {
    const classes = spaceBase.map(e => `min-h-${e}`);
    classes.push(...getSpecialSuffixes('min-h'));
    classes.push(...getFractions('min-h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});
