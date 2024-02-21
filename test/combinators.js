import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';

setup();

describe('combinators', () => {
  test('all', async ({ uno }) => {
    const classes = ['all:mt-32', 'all:-mt-32', 'all:-bottom-1/2', '!all:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('children', async ({ uno }) => {
    const classes = ['children:mt-32', 'children:-mt-32', 'children:-bottom-1/2', '!children:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('next', async ({ uno }) => {
    const classes = ['next:mt-32', 'next:-mt-32', 'next:-bottom-1/2', '!next:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('sibling', async ({ uno }) => {
    const classes = ['sibling:mt-32', 'sibling:-mt-32', 'sibling:-bottom-1/2', '!sibling:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
  test('siblings', async ({ uno }) => {
    const classes = ['siblings:mt-32', 'siblings:-mt-32', 'siblings:-bottom-1/2', '!siblings:mt-32'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  // space/divide variant is already tested by the space/divide classes
});
