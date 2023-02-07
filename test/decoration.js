import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe("text decoration", () => {
  test("supports underline and line-through", async (t) => {
    const classes = ['underline', 'line-through']

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("supports no-underline", async (t) => {
    const classes = ["no-underline"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
})
