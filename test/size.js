import { setup, getFractions, getGenerator } from './_helpers.js';
import { spaceBase } from '#theme';
import { describe, expect, test } from 'vitest';

setup();

const getSpecialSuffixes = (prefix) => ['full', 'fit', 'min', 'max', 'screen'].map((e) => `${prefix}-${e}`);

describe('width and height', () => {
  test('width', async ({ uno }) => {
    const classes = spaceBase.map((e) => `w-${e}`);
    classes.push(...getSpecialSuffixes('w'));
    classes.push(...getFractions('w'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test(`width without dash shouldn't match`, async ({ uno }) => {
    const { css } = await uno.generate(['w2', 'w32']);
    expect(css).toMatchInlineSnapshot('""');
  });
  test('height', async ({ uno }) => {
    const classes = spaceBase.map((e) => `h-${e}`);
    classes.push(...getSpecialSuffixes('h'));
    classes.push(...getFractions('h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test(`height without dash shouldn't match`, async ({ uno }) => {
    const { css } = await uno.generate(['h32']);
    expect(css).toMatchInlineSnapshot('""');
  });
});

describe('max width and height', () => {
  test('max-width', async ({ uno }) => {
    const classes = spaceBase.map((e) => `max-w-${e}`);
    classes.push(...getSpecialSuffixes('max-w'));
    classes.push(...getFractions('max-w'));
    classes.push('max-w-prose');
    classes.push('max-w-none');
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height', async ({ uno }) => {
    const classes = spaceBase.map((e) => `max-h-${e}`);
    classes.push(...getSpecialSuffixes('max-h'));
    classes.push(...getFractions('max-h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});

describe('min width and height', () => {
  test('min-width', async ({ uno }) => {
    const classes = spaceBase.map((e) => `min-w-${e}`);
    classes.push(...getSpecialSuffixes('min-w'));
    classes.push(...getFractions('min-w'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height', async ({ uno }) => {
    const classes = spaceBase.map((e) => `min-h-${e}`);
    classes.push(...getSpecialSuffixes('min-h'));
    classes.push(...getFractions('min-h'));
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});

describe('width and height with arbitrary values', () => {
  test('width with css variables and anything else', async (t) => {
    const classes = ['w-[--css-variable]', 'w-[var(--css-variable)]', 'w-[customStuff]'];
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('width with rem values', async (t) => {
    const classes = ['w-[20000]', 'w-[99999]', 'w-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('width with rem unit', async (t) => {
    const classes = ['w-[20000rem]', 'w-[99999rem]', 'w-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('width with pixel values', async () => {
    const classes = ['w-[20000]', 'w-[99999]', 'w-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('width with pixel unit', async (t) => {
    const classes = ['w-[20000px]', 'w-[99999px]', 'w-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('width with invalid value', async (t) => {
    const classes = ['w-20000', 'w-99999', 'w-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });
  test('height with css variables and anything else', async (t) => {
    const classes = ['h-[--css-variable]', 'h-[var(--css-variable)]', 'h-[customStuff]'];
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height with rem values', async (t) => {
    const classes = ['h-[20000]', 'h-[99999]', 'h-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height with rem unit', async (t) => {
    const classes = ['h-[20000rem]', 'h-[99999rem]', 'h-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height with pixel values', async () => {
    const classes = ['h-[20000]', 'h-[99999]', 'h-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height with pixel unit', async (t) => {
    const classes = ['h-[20000px]', 'h-[99999px]', 'h-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('height with invalid value', async (t) => {
    const classes = ['h-20000', 'h-99999', 'h-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });
});

describe('min width and height with arbitrary values', () => {
  test('min width with css variables and anything else', async (t) => {
    const classes = ['min-w-[--css-variable]', 'min-w-[var(--css-variable)]', 'min-w-[customStuff]'];
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-width with rem values', async (t) => {
    const classes = ['min-w-[20000]', 'min-w-[99999]', 'min-w-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-width with rem unit', async (t) => {
    const classes = ['min-w-[20000rem]', 'min-w-[99999rem]', 'min-w-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-width with pixel values', async () => {
    const classes = ['min-w-[20000]', 'min-w-[99999]', 'min-w-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-width with pixel unit', async (t) => {
    const classes = ['min-w-[20000px]', 'min-w-[99999px]', 'min-w-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-width with invalid value', async (t) => {
    const classes = ['min-w-20000', 'min-w-99999', 'min-w-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });

  test('min height with css variables and anything else', async (t) => {
    const classes = ['min-h-[--css-variable]', 'min-h-[var(--css-variable)]', 'min-h-[customStuff]'];
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height with rem values', async (t) => {
    const classes = ['min-h-[20000]', 'min-h-[99999]', 'min-h-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height with rem unit', async (t) => {
    const classes = ['min-h-[20000rem]', 'min-h-[99999rem]', 'min-h-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height with pixel values', async () => {
    const classes = ['min-h-[20000]', 'min-h-[99999]', 'min-h-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height with pixel unit', async (t) => {
    const classes = ['min-h-[20000px]', 'min-h-[99999px]', 'min-h-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('min-height with invalid value', async (t) => {
    const classes = ['min-h-20000', 'min-h-99999', 'min-h-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });
});

describe('max width and height with arbitrary values', () => {
  test('max-width with rem values', async (t) => {
    const classes = ['max-w-[20000]', 'max-w-[99999]', 'max-w-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-width with rem unit', async (t) => {
    const classes = ['max-w-[20000rem]', 'max-w-[99999rem]', 'max-w-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-width with pixel values', async () => {
    const classes = ['max-w-[20000]', 'max-w-[99999]', 'max-w-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-width with pixel unit', async (t) => {
    const classes = ['max-w-[20000px]', 'max-w-[99999px]', 'max-w-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-width with invalid value', async (t) => {
    const classes = ['max-w-20000', 'max-w-99999', 'max-w-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });

  test('max-height with rem values', async (t) => {
    const classes = ['max-h-[20000]', 'max-h-[99999]', 'max-h-[378]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height with rem unit', async (t) => {
    const classes = ['max-h-[20000rem]', 'max-h-[99999rem]', 'max-h-[378rem]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height with pixel values', async () => {
    const classes = ['max-h-[20000]', 'max-h-[99999]', 'max-h-[378]'];

    const uno = getGenerator({ usePixels: true });
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height with pixel unit', async (t) => {
    const classes = ['max-h-[20000px]', 'max-h-[99999px]', 'max-h-[378px]'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('max-height with invalid value', async (t) => {
    const classes = ['max-h-20000', 'max-h-99999', 'max-h-378'];

    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });
});
