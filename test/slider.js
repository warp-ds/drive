import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';

setup();

describe('slider', () => {
  test('get active slider shadow', async ({ uno }) => {
    const { css } = await uno.generate(['slider-handle-shadow-active']);
    expect(css).toMatchSnapshot();
  });

  test('get hover slider shadow', async ({ uno }) => {
    const { css } = await uno.generate(['slider-handle-shadow-hover']);
    expect(css).toMatchSnapshot();
  });

  test('get slider outline none', async ({ uno }) => {
    const { css } = await uno.generate(['slider-handle-outline-none']);
    expect(css).toMatchSnapshot();
  });
});
