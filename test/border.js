import { describe, expect, test } from 'vitest';

import { setup } from './_helpers.js';

import { lineWidth } from '#theme';

setup();

describe('border', () => {
  test('supports x|y with value and without', async ({ uno }) => {
    const x = ['border-x', 'border-x-0', 'border-x-2', 'border-x-4', 'border-x-8'];
    const y = ['border-y', 'border-y-0', 'border-y-2', 'border-y-4', 'border-y-8'];
    const classes = [...x, ...y];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting border width', async ({ uno }) => {
    const classes = ['border', 'border-0', 'border-2', 'border-4', 'border-8'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary border width', async ({ uno }) => {
    const classes = [
      'border-[66px]',
      'border-[6]',
      'border-l-[10%]',
      'border-r-[7]',
      'border-t-[7rem]',
      'border-b-[7px]',
      'border-w-[800]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary border color variables', async ({ uno }) => {
    const classes = [
      'border-[--w-s-color-border]',
      'border-[var(--w-s-color-border)]',
      'border-x-[var(--w-s-color-border)]',
      'border-y-[--w-s-color-border]',
      'border-l-[var(--w-s-color-border)]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary border color values', async ({ uno }) => {
    const classes = ['border-[#000000]', 'border-[black]', 'border-x-[rgb(0,0,0)]', 'border-y-[rgba(0,0,0,0)]', 'border-l-[white]'];
    const antiClasses = ['border-#000000', 'border-black', 'border-x-white', 'border-y-rgba(0,0,0,0)', 'border[white]'];
    const { css } = await uno.generate([...classes, ...antiClasses]);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary border color variables with alpha channel', async ({ uno }) => {
    const classes = [
      'border-[--w-black/90]',
      'border-[--w-s-color-background-positive-selected-hover/100]',
      'border-[--w-rgb-white/0]',
      'border-[var(--w-color-text-link-active)/55]',
      'border-[var(--w-s-color-border)/60]',
      'border-l-[--w-s-color-background/5]',
      'border-r-[var(--w-black)/100]',
      'border-x-[--w-white/5]',
      'border-y-[--w-rgb-black/75]',
      'border-l-[var(--w-s-rgb-border-disabled)/12]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('it should not generate css for arbitrary border color variables with incorrect alpha channel values', async ({ uno }) => {
    const antiClasses = [
      'border-[--w-black/900]',
      'border-x-[--w-black/]',
      'border-l-[--w-black/101]',
      'border-[--w-black/001]',
      'border-[--w-black/1000]',
      'border-[--w-black/00]',
      'border-y-[--w-black/01]',
    ];
    const { css } = await uno.generate(antiClasses);
    expect(css).toHaveLength(0);
  });

  test('supports setting arbitrary divide color variables', async ({ uno }) => {
    const classes = [
      'divide-[--w-s-color-border]',
      'divide-[var(--w-s-color-border-subtle)]',
      'divide-x-[var(--w-s-color-border-negative)]',
      'divide-y-[var(--w-s-color-border-positive)]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting divide to current color', async ({ uno }) => {
    const classes = ['divide-current', 'divide-x-current', 'divide-y-current'];
    const antiClasses = ['divide-currentcolor', 'dividecurrent', 'divide-l-current', 'divide-current-y'];
    const { css } = await uno.generate([...classes, ...antiClasses]);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary divide color values', async ({ uno }) => {
    const classes = ['divide-[#000000]', 'divide-[black]', 'divide-x-[rgb(0,0,0)]', 'divide-y-[rgba(0,0,0,0)]'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary divide color variables with alpha channel', async ({ uno }) => {
    const classes = [
      'divide-[--w-black/90]',
      'divide-[--w-s-color-background-positive-selected-hover/100]',
      'divide-[--w-rgb-white/0]',
      'divide-[var(--w-color-text-link-active)/55]',
      'divide-[var(--w-s-color-border)/60]',
      'divide-x-[--w-s-color-background/5]',
      'divide-y-[var(--w-black)/100]',
      'divide-x-[--w-white/5]',
      'divide-y-[--w-rgb-black/75]',
      'divide-y-[var(--w-s-rgb-border-disabled)/12]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('it should not generate css for arbitrary divide color variables with incorrect alpha channel values', async ({ uno }) => {
    const antiClasses = [
      'divide-[--w-black/900]',
      'divide-x-[--w-black/]',
      'divide-y-[--w-black/101]',
      'divide-[--w-black/001]',
      'divide-[--w-black/1000]',
      'divide-[--w-black/00]',
      'divide-y-[--w-black/01]',
    ];
    const { css } = await uno.generate(antiClasses);
    expect(css).toHaveLength(0);
  });

  test('supports setting border style', async ({ uno }) => {
    const classes = [
      'border-solid',
      'border-dashed',
      'border-dotted',
      'border-double',
      'border-hidden',
      'border-none',
      'border-groove',
      'border-ridge',
      'border-inset',
      'border-outset',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting border color', async ({ uno }) => {
    const classes = ['border-transparent', 'border-inherit', 'border-current'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('right, left, top bottom', async ({ uno }) => {
    const right = ['border-r', 'border-r-0', 'border-r-2', 'border-r-4', 'border-r-8'];
    const left = ['border-l', 'border-l-0', 'border-l-2', 'border-l-4', 'border-l-8'];
    const top = ['border-t', 'border-t-0', 'border-t-2', 'border-t-4', 'border-t-8'];
    const bottom = ['border-b', 'border-b-0', 'border-b-2', 'border-b-4', 'border-b-8'];
    const classes = [...right, ...left, ...top, ...bottom];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports divide borders between horizontal and stacked children', async ({ uno }) => {
    const classes = Object.keys(lineWidth)
      .map((width) => [`divide-x-${width}`, `divide-y-${width}`])
      .flat();
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports divide borders between horizontal and stacked children in reverse order', async ({ uno }) => {
    const classes = Object.keys(lineWidth)
      .map(() => [`divide-x-reverse`, `divide-y-reverse`])
      .flat();
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports divide borders between horizontal and stacked children, default width', async ({ uno }) => {
    const { css } = await uno.generate(['divide-x', 'divide-y']);
    expect(css).toMatchSnapshot();
  });

  test('does not support divide borders when invalid width provided', async ({ uno }) => {
    const classes = ['divide-x-10', 'divide-y-hej', 'divide-z-2-not-reverse'];
    const { css } = await uno.generate(classes);
    expect(css).toHaveLength(0);
  });
});

describe('rounded', () => {
  test('supports x|y with value', async ({ uno }) => {
    const classes = [
      'rounded',
      'rounded-0',
      'rounded-2',
      'rounded-4',
      'rounded-8',
      'rounded-16',
      'rounded-full',
      'rounded-t',
      'rounded-t-0',
      'rounded-t-2',
      'rounded-t-4',
      'rounded-t-8',
      'rounded-t-16',
      'rounded-t-full',
      'rounded-r',
      'rounded-r-0',
      'rounded-r-2',
      'rounded-r-4',
      'rounded-r-8',
      'rounded-r-16',
      'rounded-r-full',
      'rounded-b',
      'rounded-b-0',
      'rounded-b-2',
      'rounded-b-4',
      'rounded-b-8',
      'rounded-b-16',
      'rounded-b-full',
      'rounded-l',
      'rounded-l-0',
      'rounded-l-2',
      'rounded-l-4',
      'rounded-l-8',
      'rounded-l-16',
      'rounded-l-full',
      'rounded-tl-0',
      'rounded-tl-2',
      'rounded-tl-4',
      'rounded-tl-8',
      'rounded-tl-16',
      'rounded-tl-full',
      'rounded-tr-0',
      'rounded-tr-2',
      'rounded-tr-4',
      'rounded-tr-8',
      'rounded-tr-16',
      'rounded-tr-full',
      'rounded-br-0',
      'rounded-br-2',
      'rounded-br-4',
      'rounded-br-8',
      'rounded-br-16',
      'rounded-br-full',
      'rounded-bl-0',
      'rounded-bl-2',
      'rounded-bl-4',
      'rounded-bl-8',
      'rounded-bl-16',
      'rounded-bl-full',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('support setting arbitrary rounded', async ({ uno }) => {
    const classes = [
      'rounded-[31]',
      'rounded-[31rem]',
      'rounded-[31px]',
      'rounded-[31%]',
      'rounded-t-[31]',
      'rounded-t-[31rem]',
      'rounded-t-[31px]',
      'rounded-t-[31%]',
      'rounded-tr-[31]',
      'rounded-tr-[31rem]',
      'rounded-tr-[31px]',
      'rounded-tr-[31%]',
      'rounded-tl-[31]',
      'rounded-tl-[31rem]',
      'rounded-tl-[31px]',
      'rounded-tl-[31%]',
      'rounded-r-[31]',
      'rounded-r-[31rem]',
      'rounded-r-[31px]',
      'rounded-r-[31%]',
      'rounded-l-[31]',
      'rounded-l-[31rem]',
      'rounded-l-[31px]',
      'rounded-l-[31%]',
      'rounded-b-[31]',
      'rounded-b-[31rem]',
      'rounded-b-[31px]',
      'rounded-b-[31%]',
      'rounded-br-[31]',
      'rounded-br-[31rem]',
      'rounded-br-[31px]',
      'rounded-br-[31%]',
      'rounded-bl-[31]',
      'rounded-bl-[31rem]',
      'rounded-bl-[31px]',
      'rounded-bl-[31%]',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});
