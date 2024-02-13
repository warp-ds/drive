import { setup } from './_helpers.js';
import { describe, expect, test } from 'vitest';

setup();

describe('list', () => {
  test('list style type', async ({ uno }) => {
    const classes = ['list-disc', 'list-circle', 'list-square', 'list-decimal', 'list-zero-decimal', 'list-none'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });

  test('list style position', async ({ uno }) => {
    const { css } = await uno.generate(['list-outside', 'list-inside']);
    expect(css).toMatchSnapshot();
  });

  test('list style invalid class', async ({ uno }) => {
    const { css } = await uno.generate(['list-style-invalid', 'list', 'list-[decimal]']);
    expect(css).toMatchInlineSnapshot('""');
  });

  test('Render style for list-checked', async (t) => {
    const classes = ['list-checked'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .list-checked{line-height:var(--w-font-line-height-1);}.list-checked>li{position:relative;padding-left:24px;}.list-checked>li::before{content:"";display:block;position:absolute;width:16px;height:28px;left:0;color:var(--w-s-color-icon-primary);background-size:contain;background-position:50%;background-repeat:no-repeat;background-image:"";}"
    `);
  });
});
