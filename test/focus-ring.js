import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('focus ring', async (t) => {
  const classes = ['focusable', 'peer-focus:focusable', 'group-focus:focusable', 'focus-within:focusable', 'focusable-inset'];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .focus-within\\:focusable:focus-within{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset, 1px);}
    .focusable:focus,.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset, 1px);}.focusable:not(:focus-visible){outline:none;}
    .group:focus .group-focus\\:focusable,.group:focus-visible .group-focus\\:focusable{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset, 1px);}.group:not(:focus-visible) .group-focus\\:focusable{outline:none;}
    .peer:focus~.peer-focus\\:focusable,.peer:focus-visible~.peer-focus\\:focusable{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset, 1px);}.peer:not(:focus-visible)~.peer-focus\\:focusable{outline:none;}
    .focusable-inset{--w-outline-offset:-3px;}"
  `);
});
