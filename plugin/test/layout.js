import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("position", () => {
  test("check static, fixed, absolute, relative and sticky values", async (t) => {
    const classes = [
      "overflow-auto",
      "overflow-hidden",
      "overflow-visible",
      "overflow-scroll",
      "overflow-x-auto",
      "overflow-x-hidden",
      "overflow-x-visible",
      "overflow-x-scroll",
      "overflow-y-auto",
      "overflow-y-hidden",
      "overflow-y-visible",
      "overflow-y-scroll",
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .overflow-auto{overflow:auto;}
      .overflow-hidden{overflow:hidden;}
      .overflow-scroll{overflow:scroll;}
      .overflow-visible{overflow:visible;}
      .overflow-x-auto{overflow-x:auto;}
      .overflow-x-hidden{overflow-x:hidden;}
      .overflow-x-scroll{overflow-x:scroll;}
      .overflow-x-visible{overflow-x:visible;}
      .overflow-y-auto{overflow-y:auto;}
      .overflow-y-hidden{overflow-y:hidden;}
      .overflow-y-scroll{overflow-y:scroll;}
      .overflow-y-visible{overflow-y:visible;}"
    `);
  });
});
