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
  expect(css).toHaveLength(0);
});

test('text colors', async({ uno }) => {
  const classes = ['text-transparent', 'text-current'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test("supports setting arbitrary text colors", async ({ uno }) => {
  const classes = ["text-[--w-s-color-border]", "text-[var(--w-s-color-border)]"];

  const { css } = await uno.generate(classes);

  expect(css).toMatchSnapshot();
});

test('text color invalid class', async({ uno }) => {
  const classes = ['text-color'];

  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});

test('bg colors', async({ uno }) => {
  const classes = [
    'bg-inherit',
    'bg-transparent',
    'bg-current'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
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