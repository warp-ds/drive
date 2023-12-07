import { expect, test } from "vitest";
import { setup } from "./_helpers.js";

setup();

test("padding works", async ({ uno }) => {
  const classes = ["p-8", "px-2", "py-4", "pl-32", "pr-16", "pb-8", "pt-16"];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .p-8{padding:0.8rem;}
    .px-2{padding-left:0.2rem;padding-right:0.2rem;}
    .py-4{padding-top:0.4rem;padding-bottom:0.4rem;}
    .pb-8{padding-bottom:0.8rem;}
    .pl-32{padding-left:3.2rem;}
    .pr-16{padding-right:1.6rem;}
    .pt-16{padding-top:1.6rem;}"
  `);
});

test("padding skips bad values", async ({ uno }) => {
  const classes = ["p-7", "px-3", "py-5", "pl-33", "pr-19", "pb-9", "pt-17"];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test("margin works", async ({ uno }) => {
  const classes = [
    "m-8",
    "mx-2",
    "my-4",
    "ml-32",
    "mr-16",
    "mb-8",
    "mt-16",
    "-m-8",
    "m-auto",
    "ml-auto",
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .-m-8{margin:-0.8rem;}
    .m-8{margin:0.8rem;}
    .m-auto{margin:auto;}
    .mx-2{margin-left:0.2rem;margin-right:0.2rem;}
    .my-4{margin-top:0.4rem;margin-bottom:0.4rem;}
    .mb-8{margin-bottom:0.8rem;}
    .ml-32{margin-left:3.2rem;}
    .ml-auto{margin-left:auto;}
    .mr-16{margin-right:1.6rem;}
    .mt-16{margin-top:1.6rem;}"
  `);
});

test("margin skips bad values", async ({ uno }) => {
  const classes = [
    "m-7",
    "mx-3",
    "my-5",
    "ml-33",
    "mr-19",
    "mb-9",
    "mt-17",
    "-m-11",
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test("arbitrary padding works", async ({ uno }) => {
  const classes = [
    "p-[8]",
    "p-[8rem]",
    "p-[8px]",
    "px-[8]",
    "px-[8rem]",
    "px-[8px]",
    "py-[8]",
    "py-[8rem]",
    "py-[8px]",
    "pr-[8]",
    "pr-[8rem]",
    "pr-[8px]",
    "pl-[8]",
    "pl-[8rem]",
    "pl-[8px]",
    "pt-[8]",
    "pt-[8rem]",
    "pt-[8px]",
    "pb-[8]",
    "pb-[8rem]",
    "pb-[8px]",
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .p-\\\\[8\\\\]{padding:0.8rem;}
    .p-\\\\[8px\\\\]{padding:8px;}
    .p-\\\\[8rem\\\\]{padding:8rem;}
    .px-\\\\[8\\\\]{padding-left:0.8rem;padding-right:0.8rem;}
    .px-\\\\[8px\\\\]{padding-left:8px;padding-right:8px;}
    .px-\\\\[8rem\\\\]{padding-left:8rem;padding-right:8rem;}
    .py-\\\\[8\\\\]{padding-top:0.8rem;padding-bottom:0.8rem;}
    .py-\\\\[8px\\\\]{padding-top:8px;padding-bottom:8px;}
    .py-\\\\[8rem\\\\]{padding-top:8rem;padding-bottom:8rem;}
    .pb-\\\\[8\\\\]{padding-bottom:0.8rem;}
    .pb-\\\\[8px\\\\]{padding-bottom:8px;}
    .pb-\\\\[8rem\\\\]{padding-bottom:8rem;}
    .pl-\\\\[8\\\\]{padding-left:0.8rem;}
    .pl-\\\\[8px\\\\]{padding-left:8px;}
    .pl-\\\\[8rem\\\\]{padding-left:8rem;}
    .pr-\\\\[8\\\\]{padding-right:0.8rem;}
    .pr-\\\\[8px\\\\]{padding-right:8px;}
    .pr-\\\\[8rem\\\\]{padding-right:8rem;}
    .pt-\\\\[8\\\\]{padding-top:0.8rem;}
    .pt-\\\\[8px\\\\]{padding-top:8px;}
    .pt-\\\\[8rem\\\\]{padding-top:8rem;}"
  `);
});
test("arbitrary margin works", async ({ uno }) => {
  const classes = [
    "m-[8]",
    "m-[8rem]",
    "m-[8px]",
    "mx-[8]",
    "mx-[8rem]",
    "mx-[8px]",
    "my-[8]",
    "my-[8rem]",
    "my-[8px]",
    "mr-[8]",
    "mr-[8rem]",
    "mr-[8px]",
    "ml-[8]",
    "ml-[8rem]",
    "ml-[8px]",
    "mt-[8]",
    "mt-[8rem]",
    "mt-[8px]",
    "mb-[8]",
    "mb-[8rem]",
    "mb-[8px]",
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .m-\\\\[8\\\\]{margin:0.8rem;}
    .m-\\\\[8px\\\\]{margin:8px;}
    .m-\\\\[8rem\\\\]{margin:8rem;}
    .mx-\\\\[8\\\\]{margin-left:0.8rem;margin-right:0.8rem;}
    .mx-\\\\[8px\\\\]{margin-left:8px;margin-right:8px;}
    .mx-\\\\[8rem\\\\]{margin-left:8rem;margin-right:8rem;}
    .my-\\\\[8\\\\]{margin-top:0.8rem;margin-bottom:0.8rem;}
    .my-\\\\[8px\\\\]{margin-top:8px;margin-bottom:8px;}
    .my-\\\\[8rem\\\\]{margin-top:8rem;margin-bottom:8rem;}
    .mb-\\\\[8\\\\]{margin-bottom:0.8rem;}
    .mb-\\\\[8px\\\\]{margin-bottom:8px;}
    .mb-\\\\[8rem\\\\]{margin-bottom:8rem;}
    .ml-\\\\[8\\\\]{margin-left:0.8rem;}
    .ml-\\\\[8px\\\\]{margin-left:8px;}
    .ml-\\\\[8rem\\\\]{margin-left:8rem;}
    .mr-\\\\[8\\\\]{margin-right:0.8rem;}
    .mr-\\\\[8px\\\\]{margin-right:8px;}
    .mr-\\\\[8rem\\\\]{margin-right:8rem;}
    .mt-\\\\[8\\\\]{margin-top:0.8rem;}
    .mt-\\\\[8px\\\\]{margin-top:8px;}
    .mt-\\\\[8rem\\\\]{margin-top:8rem;}"
  `);
});
