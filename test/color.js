import { setup } from "./_helpers.js";
import { expect, test } from "vitest";
import { opacity } from '#theme'



setup();

test('opacity by theme', async (t) => {
    const classes = Object.keys(opacity).map((op => `opacity-${op}`));
    
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .opacity-0{opacity:0%;}
      .opacity-100{opacity:100%;}
      .opacity-25{opacity:25%;}
      .opacity-50{opacity:50%;}"
    `) 
});
test('opacity not created if invalid', async (t) => {
    const classes = ['opacity-1'];
    
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
});