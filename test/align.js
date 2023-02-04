import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("align", () => {
  test("vertical align rules generates expected styles based on allowed classes", async (t) => {
    const classes = [
      "align-mid",
      "align-base",
      "align-btm",
      "align-baseline",
      "align-top",
      "align-start",
      "align-middle",
      "align-bottom",
      "align-end",
      "align-text-top",
      "align-text-bottom",
      "align-sub",
      "align-super",
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .align-base,
      .align-baseline{vertical-align:baseline;}
      .align-bottom,
      .align-btm,
      .align-end{vertical-align:bottom;}
      .align-mid,
      .align-middle{vertical-align:middle;}
      .align-start,
      .align-top{vertical-align:top;}
      .align-sub{vertical-align:sub;}
      .align-super{vertical-align:super;}
      .align-text-bottom{vertical-align:text-bottom;}
      .align-text-top{vertical-align:text-top;}"
    `);
  });

  test("vertical align rules does not render styles based on faulty classes", async (t) => {
    const classes = ["align-foo"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
  });

  test("text align rules generates expected styles based on allowed classes", async (t) => {
    const classes = [
      "text-center",
      "text-left",
      "text-right",
      "text-justify",
      "text-start",
      "text-end",
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-center{text-align:center;}
      .text-left{text-align:left;}
      .text-right{text-align:right;}
      .text-justify{text-align:justify;}
      .text-start{text-align:start;}
      .text-end{text-align:end;}"
    `);
  });

  test("text-align rules does not render styles based on faulty classes", async (t) => {
    const classes = ["text-foo"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
  });
});
