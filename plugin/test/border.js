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
      .border-x-0{border-left-width:0;border-right-width:0;}
      .border-x-2{border-left-width:2px;border-right-width:2px;}
      .border-x-4{border-left-width:4px;border-right-width:4px;}
      .border-x-8{border-left-width:8px;border-right-width:8px;}
      .border-y-0{border-top-width:0;border-bottom-width:0;}
      .border-y-2{border-top-width:2px;border-bottom-width:2px;}
      .border-y-4{border-top-width:4px;border-bottom-width:4px;}
      .border-y-8{border-top-width:8px;border-bottom-width:8px;}"
    `);
  });

  test("supports setting border width", async (t) => {
    const classes = ["border", "border-0", "border-2", "border-4", "border-8"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .border,
      .border-2{border-width:2px;}
      .border-0{border-width:0;}
      .border-4{border-width:4px;}
      .border-8{border-width:8px;}"
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
      .border-b,
      .border-b-2{border-bottom-width:2px;}
      .border-l,
      .border-l-2{border-left-width:2px;}
      .border-r,
      .border-r-2{border-right-width:2px;}
      .border-t,
      .border-t-2{border-top-width:2px;}
      .border-b-0{border-bottom-width:0;}
      .border-b-4{border-bottom-width:4px;}
      .border-b-8{border-bottom-width:8px;}
      .border-l-0{border-left-width:0;}
      .border-l-4{border-left-width:4px;}
      .border-l-8{border-left-width:8px;}
      .border-r-0{border-right-width:0;}
      .border-r-4{border-right-width:4px;}
      .border-r-8{border-right-width:8px;}
      .border-t-0{border-top-width:0;}
      .border-t-4{border-top-width:4px;}
      .border-t-8{border-top-width:8px;}"
    `);
  });
});

describe("rounded", () => {
  test("supports x|y with value", async (t) => {
    const classes = ["rounded", "rounded-0", "rounded-2", "rounded-4", "rounded-8", "rounded-16", "rounded-full", "rounded-t", "rounded-t-0", "rounded-t-2", "rounded-t-4", "rounded-t-8", "rounded-t-16", "rounded-t-full", "rounded-r", "rounded-r-0", "rounded-r-2", "rounded-r-4", "rounded-r-8", "rounded-r-16", "rounded-r-full", "rounded-b", "rounded-b-0", "rounded-b-2", "rounded-b-4", "rounded-b-8", "rounded-b-16", "rounded-b-full", "rounded-l", "rounded-l-0", "rounded-l-2", "rounded-l-4", "rounded-l-8", "rounded-l-16", "rounded-l-full", "rounded-tl-0", "rounded-tl-2", "rounded-tl-4", "rounded-tl-8", "rounded-tl-16", "rounded-tl-full", "rounded-tr-0", "rounded-tr-2", "rounded-tr-4", "rounded-tr-8", "rounded-tr-16", "rounded-tr-full", "rounded-br-0", "rounded-br-2", "rounded-br-4", "rounded-br-8", "rounded-br-16", "rounded-br-full", "rounded-bl-0", "rounded-bl-2", "rounded-bl-4", "rounded-bl-8", "rounded-bl-16", "rounded-bl-full"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .rounded,
      .rounded-2{border-radius:2px;}
      .rounded-0{border-radius:0;}
      .rounded-16{border-radius:16px;}
      .rounded-4{border-radius:4px;}
      .rounded-8{border-radius:8px;}
      .rounded-full{border-radius:9999px;}
      .rounded-b,
      .rounded-b-2{border-bottom-left-radius:2px;border-bottom-right-radius:2px;}
      .rounded-b-0{border-bottom-left-radius:0;border-bottom-right-radius:0;}
      .rounded-b-16{border-bottom-left-radius:16px;border-bottom-right-radius:16px;}
      .rounded-b-4{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}
      .rounded-b-8{border-bottom-left-radius:8px;border-bottom-right-radius:8px;}
      .rounded-b-full{border-bottom-left-radius:9999px;border-bottom-right-radius:9999px;}
      .rounded-bl-0{border-bottom-left-radius:0;}
      .rounded-bl-16{border-bottom-left-radius:16px;}
      .rounded-bl-2{border-bottom-left-radius:2px;}
      .rounded-bl-4{border-bottom-left-radius:4px;}
      .rounded-bl-8{border-bottom-left-radius:8px;}
      .rounded-bl-full{border-bottom-left-radius:9999px;}
      .rounded-br-0{border-bottom-right-radius:0;}
      .rounded-br-16{border-bottom-right-radius:16px;}
      .rounded-br-2{border-bottom-right-radius:2px;}
      .rounded-br-4{border-bottom-right-radius:4px;}
      .rounded-br-8{border-bottom-right-radius:8px;}
      .rounded-br-full{border-bottom-right-radius:9999px;}
      .rounded-l,
      .rounded-l-2{border-top-left-radius:2px;border-bottom-left-radius:2px;}
      .rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0;}
      .rounded-l-16{border-top-left-radius:16px;border-bottom-left-radius:16px;}
      .rounded-l-4{border-top-left-radius:4px;border-bottom-left-radius:4px;}
      .rounded-l-8{border-top-left-radius:8px;border-bottom-left-radius:8px;}
      .rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px;}
      .rounded-r,
      .rounded-r-2{border-top-right-radius:2px;border-bottom-right-radius:2px;}
      .rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0;}
      .rounded-r-16{border-top-right-radius:16px;border-bottom-right-radius:16px;}
      .rounded-r-4{border-top-right-radius:4px;border-bottom-right-radius:4px;}
      .rounded-r-8{border-top-right-radius:8px;border-bottom-right-radius:8px;}
      .rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px;}
      .rounded-t,
      .rounded-t-2{border-top-left-radius:2px;border-top-right-radius:2px;}
      .rounded-t-0{border-top-left-radius:0;border-top-right-radius:0;}
      .rounded-t-16{border-top-left-radius:16px;border-top-right-radius:16px;}
      .rounded-t-4{border-top-left-radius:4px;border-top-right-radius:4px;}
      .rounded-t-8{border-top-left-radius:8px;border-top-right-radius:8px;}
      .rounded-t-full{border-top-left-radius:9999px;border-top-right-radius:9999px;}
      .rounded-tl-0{border-top-left-radius:0;}
      .rounded-tl-16{border-top-left-radius:16px;}
      .rounded-tl-2{border-top-left-radius:2px;}
      .rounded-tl-4{border-top-left-radius:4px;}
      .rounded-tl-8{border-top-left-radius:8px;}
      .rounded-tl-full{border-top-left-radius:9999px;}
      .rounded-tr-0{border-top-right-radius:0;}
      .rounded-tr-16{border-top-right-radius:16px;}
      .rounded-tr-2{border-top-right-radius:2px;}
      .rounded-tr-4{border-top-right-radius:4px;}
      .rounded-tr-8{border-top-right-radius:8px;}
      .rounded-tr-full{border-top-right-radius:9999px;}"
    `);
  });
});
