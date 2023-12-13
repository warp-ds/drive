import { setup } from "./_helpers.js";
import { spaceBase } from "#theme";
import { expect, test } from "vitest";

setup();

test("gap allows to render css based of all units in spaceBase", async ({ uno }) => {
  const classes = spaceBase.map((spacingUnit) => `gap-${spacingUnit}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test("gap does not render css for invalid spacing units", async ({ uno }) => {
  const { css } = await uno.generate(["gap-9999"]);
  expect(css).toHaveLength(0);
});

test("gap does render css for arbitrary values", async ({ uno }) => {
  const classes = [
    "gap-[27]",
    "gap-[27px]",
    "gap-[27rem]",
    "gap-x-[27]",
    "gap-x-[27px]",
    "gap-x-[27rem]",
    "gap-y-[27]",
    "gap-y-[27px]",
    "gap-y-[27rem]",
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
