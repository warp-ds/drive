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
  const classes = ['text' ,'text-inverted', 'text-inverted-subtle', 'text-subtle'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('text color invalid class', async({ uno }) => {
  const classes = ['text-color'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('bg colors', async({ uno }) => {
  const classes = [
    'bg',
    'bg-subtle',
    'bg-inherit',
    'bg-transparent',
    'bg-current'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg color invalid class', async({ uno }) => {
  const classes = ['bg-color'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('caret', async({ uno }) => {
  const classes = [
    'caret',
    'caret-inherit',
    'caret-current',
    'caret-transparent',
  ];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});