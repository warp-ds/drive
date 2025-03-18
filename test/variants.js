import { describe, expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

describe('variants', () => {
  test('negative', async ({ uno }) => {
    const classes = ['-inset-16', '-mt-32', '-bottom-1/2'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('breakpoints', async ({ uno }) => {
    const classes = ['md:mt-32', 'at-md:mt-32', 'lt-md:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('important', async ({ uno }) => {
    const classes = ['!mb-32', '!sm:mt-32', '!md:-bottom-1/2'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('pseudo', async ({ uno }) => {
    const classes = [
      'last:mb-0',
      'before:p-32',
      'focus:border',
      'group',
      'group-hover:p-16',
      'group/llama',
      'group-hover/llama:m-32',
      'part-[part-name]:s-bg-primary',
    ];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('custom', async ({ uno }) => {
    const classes = ['last-child:mb-0'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('data variant', async ({ uno }) => {
    const classes = ['data-[is-active]:s-bg-primary'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('aria variant', async ({ uno }) => {
    const classes = ['aria-[invalid=spelling]:s-bg-primary'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  // space/divide variant is already tested by the space/divide classes
});
