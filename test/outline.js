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
