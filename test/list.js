import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("list", () => {
  test("Render style for list-checked", async (t) => {
    const classes = ['list-checked'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .list-checked{line-height: var(--w-font-line-height-1);}.list-checked>li{position:relative;padding-left:var(--w-space-3);}.list-checked>li::before{content:\\"\\";display:block;position:absolute;width:16px;height:28px;left:0;color:var(--w-list-color-icon-checked);background-size:contain;background-position:50%;background-repeat:no-repeat;background-image:\\"\\";}"
    `);
  });

});
