import { describe, expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

describe('text decoration', () => {
  test('supports underline and line-through', async (t) => {
    const classes = ['underline', 'line-through'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('supports no-underline', async (t) => {
    const classes = ['no-underline'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});
