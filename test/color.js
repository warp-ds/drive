import { setup } from "./_helpers.js";
import { expect, test } from "vitest";
import { opacity } from '#theme';


setup();

test('opacity by theme', async ({ uno }) => {
  const classes = Object.keys(opacity).map((op => `opacity-${op}`));

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('opacity not created if invalid', async ({ uno }) => {
  const classes = ['opacity-1'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('text colors', async({ uno }) => {
  const classes = ['text-transparent', 'text-current'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('text color invalid class', async({ uno }) => {
  const classes = ['text-color'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test("supports setting arbitrary background colors", async (t) => {
  const classes = ["bg-[--w-s-color-background]", "bg-[var(--w-s-color-background)]"];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchSnapshot();
});

test('bg colors', async({ uno }) => {
  const classes = [
    'bg-inherit',
    'bg-transparent',
    'bg-current'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test("supports setting arbitrary border colors", async (t) => {
  const classes = ["border-[--w-s-color-border]", "border-[var(--w-s-color-border)]"];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchSnapshot();
});

test('bg color invalid class', async({ uno }) => {
  const classes = ['bg-color'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('caret', async({ uno }) => {
  const classes = [
    'caret-inherit',
    'caret-current',
    'caret-transparent',
  ];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});