import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';

setup({
  externalizeClasses: true,
  externalClasses: ['mt-32', 'mb-32'],
});

describe('external classes', () => {
  test('externalized classes of mt-32 and mb-32 should be excluded from the css', async ({
    uno,
  }) => {
    const classes = ['mt-40', 'mt-32', 'mb-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('externalized class of mt-32 should be excluded from the css', async ({
    uno,
  }) => {
    const classes = ['mt-40', 'mt-32', 'mb-24'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('externalized class of mt-32 should be included if used with modifier', async ({
    uno,
  }) => {
    const classes = ['sm:mt-32', 'md:mt-32', 'active:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});
