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

describe("rounded", () => {
  test("supports x|y with value", async (t) => {
    const classes = ["rounded-0", "rounded-2", "rounded-4", "rounded-8", "rounded-16", "rounded-full", "rounded-t-0", "rounded-t-2", "rounded-t-4", "rounded-t-8", "rounded-t-16", "rounded-t-full", "rounded-r-0", "rounded-r-2", "rounded-r-4", "rounded-r-8", "rounded-r-16", "rounded-r-full", "rounded-b-0", "rounded-b-2", "rounded-b-4", "rounded-b-8", "rounded-b-16", "rounded-b-full", "rounded-l-0", "rounded-l-2", "rounded-l-4", "rounded-l-8", "rounded-l-16", "rounded-l-full", "rounded-tl-0", "rounded-tl-2", "rounded-tl-4", "rounded-tl-8", "rounded-tl-16", "rounded-tl-full", "rounded-tr-0", "rounded-tr-2", "rounded-tr-4", "rounded-tr-8", "rounded-tr-16", "rounded-tr-full", "rounded-br-0", "rounded-br-2", "rounded-br-4", "rounded-br-8", "rounded-br-16", "rounded-br-full", "rounded-bl-0", "rounded-bl-2", "rounded-bl-4", "rounded-bl-8", "rounded-bl-16", "rounded-bl-full"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .rounded-0{border-radius:0rem;}
      .rounded-16{border-radius:1.6rem;}
      .rounded-2{border-radius:0.2rem;}
      .rounded-4{border-radius:0.4rem;}
      .rounded-8{border-radius:0.8rem;}
      .rounded-full{border-radius:100%;}
      .rounded-b-0{border-bottom-left-radius:0rem;border-bottom-right-radius:0rem;}
      .rounded-b-16{border-bottom-left-radius:1.6rem;border-bottom-right-radius:1.6rem;}
      .rounded-b-2{border-bottom-left-radius:0.2rem;border-bottom-right-radius:0.2rem;}
      .rounded-b-4{border-bottom-left-radius:0.4rem;border-bottom-right-radius:0.4rem;}
      .rounded-b-8{border-bottom-left-radius:0.8rem;border-bottom-right-radius:0.8rem;}
      .rounded-b-full{border-bottom-left-radius:100%;border-bottom-right-radius:100%;}
      .rounded-bl-0{border-bottom-left-radius:0rem;}
      .rounded-bl-16{border-bottom-left-radius:1.6rem;}
      .rounded-bl-2{border-bottom-left-radius:0.2rem;}
      .rounded-bl-4{border-bottom-left-radius:0.4rem;}
      .rounded-bl-8{border-bottom-left-radius:0.8rem;}
      .rounded-bl-full{border-bottom-left-radius:100%;}
      .rounded-br-0{border-bottom-right-radius:0rem;}
      .rounded-br-16{border-bottom-right-radius:1.6rem;}
      .rounded-br-2{border-bottom-right-radius:0.2rem;}
      .rounded-br-4{border-bottom-right-radius:0.4rem;}
      .rounded-br-8{border-bottom-right-radius:0.8rem;}
      .rounded-br-full{border-bottom-right-radius:100%;}
      .rounded-l-0{border-top-left-radius:0rem;border-bottom-left-radius:0rem;}
      .rounded-l-16{border-top-left-radius:1.6rem;border-bottom-left-radius:1.6rem;}
      .rounded-l-2{border-top-left-radius:0.2rem;border-bottom-left-radius:0.2rem;}
      .rounded-l-4{border-top-left-radius:0.4rem;border-bottom-left-radius:0.4rem;}
      .rounded-l-8{border-top-left-radius:0.8rem;border-bottom-left-radius:0.8rem;}
      .rounded-l-full{border-top-left-radius:100%;border-bottom-left-radius:100%;}
      .rounded-r-0{border-top-right-radius:0rem;border-bottom-right-radius:0rem;}
      .rounded-r-16{border-top-right-radius:1.6rem;border-bottom-right-radius:1.6rem;}
      .rounded-r-2{border-top-right-radius:0.2rem;border-bottom-right-radius:0.2rem;}
      .rounded-r-4{border-top-right-radius:0.4rem;border-bottom-right-radius:0.4rem;}
      .rounded-r-8{border-top-right-radius:0.8rem;border-bottom-right-radius:0.8rem;}
      .rounded-r-full{border-top-right-radius:100%;border-bottom-right-radius:100%;}
      .rounded-t-0{border-top-left-radius:0rem;border-top-right-radius:0rem;}
      .rounded-t-16{border-top-left-radius:1.6rem;border-top-right-radius:1.6rem;}
      .rounded-t-2{border-top-left-radius:0.2rem;border-top-right-radius:0.2rem;}
      .rounded-t-4{border-top-left-radius:0.4rem;border-top-right-radius:0.4rem;}
      .rounded-t-8{border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;}
      .rounded-t-full{border-top-left-radius:100%;border-top-right-radius:100%;}
      .rounded-tl-0{border-top-left-radius:0rem;}
      .rounded-tl-16{border-top-left-radius:1.6rem;}
      .rounded-tl-2{border-top-left-radius:0.2rem;}
      .rounded-tl-4{border-top-left-radius:0.4rem;}
      .rounded-tl-8{border-top-left-radius:0.8rem;}
      .rounded-tl-full{border-top-left-radius:100%;}
      .rounded-tr-0{border-top-right-radius:0rem;}
      .rounded-tr-16{border-top-right-radius:1.6rem;}
      .rounded-tr-2{border-top-right-radius:0.2rem;}
      .rounded-tr-4{border-top-right-radius:0.4rem;}
      .rounded-tr-8{border-top-right-radius:0.8rem;}
      .rounded-tr-full{border-top-right-radius:100%;}"
    `);
  });
});
