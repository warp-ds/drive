import { expect, test } from 'vitest';
import { setup } from "./_helpers.js";

setup();

test("focus ring", async (t) => {
  const classes = [
    "focusable",
    "peer:focus:focusable",
    "focusable-inset",
  ];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .focusable:focus,.focusable:focus-visible{outline:2px solid var(--w-color-focused);outline-offset:var(--w-outline-offset, 1px);}.focusable:not(:focus-visible){outline:none;}
    .focusable-inset{--w-outline-offset:-3px;}"
  `);
});
