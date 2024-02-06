import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';
import { lineWidth } from '#theme';

setup();

describe('outline', () => {
  test('supports setting outline styles', async ({ uno }) => {
    const classes = ['outline-none', 'outline', 'outline-dashed', 'outline-dotted', 'outline-double'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting outline colors', async ({ uno }) => {
    const classes = ['outline-inherit', 'outline-current', 'outline-transparent', 'outline-[--w-s-color-border]', 'outline-[var(--w-s-color-border)]'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('supports setting arbitrary outline color variables with alpha channel', async ({ uno }) => {
    const classes = ['outline-[--w-black/90]', 'outline-[--w-s-color-background-positive-selected-hover/100]', 'outline-[--w-rgb-white/0]', 'outline-[var(--w-color-text-link-active)/55]', 'outline-[var(--w-s-color-border)/60]', 'outline-[--w-s-color-background/5]', 'outline-[var(--w-black)/100]', 'outline-[--w-white/5]', 'outline-[--w-rgb-black/75]', 'outline-[var(--w-s-rgb-border-disabled)/12]'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('it should not generate css for arbitrary outline color variables with incorrect alpha channel values', async ({ uno }) => {
    const antiClasses = ['outline-[--w-black/900]', 'outline-[--w-black/]', 'outline-[--w-black/101]', 'outline-[--w-black/001]', 'outline-[--w-black/1000]', 'outline-[--w-black/00]', 'outline-[--w-black/01]'];
    const { css } = await uno.generate(antiClasses);
    expect(css).toHaveLength(0);
  });

  test('width', async ({ uno }) => {
    const classes = Object.keys(lineWidth)
      .map((width) => [`outline-${width}`])
      .flat();
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('offset', async ({ uno }) => {
    const classes = Object.keys(lineWidth)
      .map((width) => [`outline-offset-${width}`])
      .flat();
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});
