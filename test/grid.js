import { setup } from "./_helpers.js";
import { expect, assert, test } from "vitest";

setup();

test("grid span", async (t) => {
  const classes = [
    "col-auto",
    "row-auto",
    "col-span-full",
    "row-span-full",
    "row-span-5",
    "col-span-3",
  ];
  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .col-auto{grid-column:auto;}
    .row-auto{grid-row:auto;}
    .col-span-full{grid-column:1 / -1;}
    .row-span-full{grid-row:1 / -1;}
    .row-span-5{grid-row:span 5/span 5;}
    .col-span-3{grid-column:span 3/span 3;}"
  `);
});

test("grid starts and ends", async (t) => {
  const classes = ["row-start-1", "row-end-5", "col-start-1", "col-end-3"];
  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .row-start-1{grid-row-start:1;}
    .col-start-1{grid-column-start:1;}
    .row-end-5{grid-row-end:5;}
    .col-end-3{grid-column-end:3;}"
  `);
});

test("grid columns", async (t) => {
  const arbitrary = [
    "grid-cols-[200px_minmax(900px,_1fr)_100px]",
    "grid-cols-[320px_1fr]",
  ];
  const { css } = await t.uno.generate(arbitrary);
  assert.include(css, "grid-template-columns:200px minmax(900px, 1fr) 100px;");
  assert.include(css, "grid-template-columns:320px 1fr;");
});

test("grid auto flows", async (t) => {
  const gridFlows = [
    "auto-rows-auto",
    "auto-rows-min",
    "auto-rows-max",
    "auto-rows-fr",
    "grid-flow-row",
    "grid-flow-col",
    "grid-flow-dense",
    "grid-flow-row-dense",
    "grid-flow-col-dense",
  ];
  const { css } = await t.uno.generate(gridFlows);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .auto-rows-auto{grid-auto-rows:auto;}
    .auto-rows-fr{grid-auto-rows:minmax(0,1fr);}
    .auto-rows-max{grid-auto-rows:max-content;}
    .auto-rows-min{grid-auto-rows:min-content;}
    .grid-flow-row{grid-auto-flow:row;}
    .grid-flow-col{grid-auto-flow:column;}
    .grid-flow-dense{grid-auto-flow:dense;}
    .grid-flow-row-dense{grid-auto-flow:row dense;}
    .grid-flow-col-dense{grid-auto-flow:column dense;}"
  `);
});

test("grid templates basic", async (t) => {
  const numbers = Array.from({ length: 5 });
  const classes = numbers
    .map((_, i) => {
      return [`grid-rows-${i + 1}`, `grid-cols-${i + 1}`];
    })
    .flat();
  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr));}
    .grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr));}
    .grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr));}
    .grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr));}
    .grid-rows-5{grid-template-rows:repeat(5,minmax(0,1fr));}
    .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr));}
    .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
    .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
    .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
    .grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr));}"
  `);
});

test("grid templates do not render if out of range", async (t) => {
  const classes = ["grid-rows-8", "grid-rows-13"];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot('""');
});

test("grid templates none", async (t) => {
  const classes = ["grid-rows-none", "grid-cols-none"];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .grid-rows-none{grid-template-rows:none;}
    .grid-cols-none{grid-template-columns:none;}"
  `);
});
