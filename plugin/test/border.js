import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("border", () => {
  test("supports x|y with value", async (t) => {
    const x = ["border-x-0", "border-x-2", "border-x-4", "border-x-8"];
    const y = ["border-y-0", "border-y-2", "border-y-4", "border-y-8"];

    const classes = [...x, ...y];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .border-x-0{border-left-width:0px;border-right-width:0px;border-left-style:solid;border-right-style:solid;}
      .border-x-2{border-left-width:2px;border-right-width:2px;border-left-style:solid;border-right-style:solid;}
      .border-x-4{border-left-width:4px;border-right-width:4px;border-left-style:solid;border-right-style:solid;}
      .border-x-8{border-left-width:8px;border-right-width:8px;border-left-style:solid;border-right-style:solid;}
      .border-y-0{border-top-width:0px;border-bottom-width:0px;border-top-style:solid;border-bottom-style:solid;}
      .border-y-2{border-top-width:2px;border-bottom-width:2px;border-top-style:solid;border-bottom-style:solid;}
      .border-y-4{border-top-width:4px;border-bottom-width:4px;border-top-style:solid;border-bottom-style:solid;}
      .border-y-8{border-top-width:8px;border-bottom-width:8px;border-top-style:solid;border-bottom-style:solid;}"
    `);
  });

  test("supports setting border width", async (t) => {
    const classes = ["border", "border-0", "border-2", "border-4", "border-8"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .border{border-width:1px;border-style:solid;}
      .border-0{border-width:0px;border-style:solid;}
      .border-2{border-width:2px;border-style:solid;}
      .border-4{border-width:4px;border-style:solid;}
      .border-8{border-width:8px;border-style:solid;}"
    `);
  });

  test("supports setting border style", async (t) => {
    const classes = [
      "border-solid",
      "border-dashed",
      "border-dotted",
      "border-double",
      "border-hidden",
      "border-none",
      "border-groove",
      "border-ridge",
      "border-inset",
      "border-outset",
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .border-dashed{border-style:dashed;}
      .border-dotted{border-style:dotted;}
      .border-double{border-style:double;}
      .border-groove{border-style:groove;}
      .border-hidden{border-style:hidden;}
      .border-inset{border-style:inset;}
      .border-none{border-style:none;}
      .border-outset{border-style:outset;}
      .border-ridge{border-style:ridge;}
      .border-solid{border-style:solid;}"
    `);
  });

  test("right, left, top bottom", async (t) => {
    const right = [
      "border-r",
      "border-r-0",
      "border-r-2",
      "border-r-4",
      "border-r-8",
    ];

    const left = [
      "border-l",
      "border-l-0",
      "border-l-2",
      "border-l-4",
      "border-l-8",
    ];

    const top = [
      "border-t",
      "border-t-0",
      "border-t-2",
      "border-t-4",
      "border-t-8",
    ];

    const bottom = [
      "border-b",
      "border-b-0",
      "border-b-2",
      "border-b-4",
      "border-b-8",
    ];

    const classes = [...right, ...left, ...top, ...bottom];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .border-b{border-bottom-width:1px;border-bottom-style:solid;}
      .border-l{border-left-width:1px;border-left-style:solid;}
      .border-r{border-right-width:1px;border-right-style:solid;}
      .border-t{border-top-width:1px;border-top-style:solid;}
      .border-b-0{border-bottom-width:0px;border-bottom-style:solid;}
      .border-b-2{border-bottom-width:2px;border-bottom-style:solid;}
      .border-b-4{border-bottom-width:4px;border-bottom-style:solid;}
      .border-b-8{border-bottom-width:8px;border-bottom-style:solid;}
      .border-l-0{border-left-width:0px;border-left-style:solid;}
      .border-l-2{border-left-width:2px;border-left-style:solid;}
      .border-l-4{border-left-width:4px;border-left-style:solid;}
      .border-l-8{border-left-width:8px;border-left-style:solid;}
      .border-r-0{border-right-width:0px;border-right-style:solid;}
      .border-r-2{border-right-width:2px;border-right-style:solid;}
      .border-r-4{border-right-width:4px;border-right-style:solid;}
      .border-r-8{border-right-width:8px;border-right-style:solid;}
      .border-t-0{border-top-width:0px;border-top-style:solid;}
      .border-t-2{border-top-width:2px;border-top-style:solid;}
      .border-t-4{border-top-width:4px;border-top-style:solid;}
      .border-t-8{border-top-width:8px;border-top-style:solid;}"
    `);
  });
});
