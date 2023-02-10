import { expect, test } from 'vitest';
import { setup } from './_helpers.js';



setup()

test('flex with arbitrary values', async (t) => {
    const classes = ['flex-[2_2_0%]'];

    const { css } = await t.uno.generate(classes)
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .flex-\\\\[2_2_0\\\\%\\\\]{flex:2 2 0%;}"
    `)
});