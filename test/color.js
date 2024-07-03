import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

import { opacity } from '#theme';

setup();

test('opacity by theme', async ({ uno }) => {
  const classes = Object.keys(opacity).map((op) => `opacity-${op}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('opacity not created if invalid', async ({ uno }) => {
  const classes = ['opacity-1'];
  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});

test('text colors', async ({ uno }) => {
  const classes = ['text-transparent', 'text-current'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('supports setting arbitrary text colors', async ({ uno }) => {
  const classes = ['text-[--w-s-color-border]', 'text-[var(--w-s-color-border)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('supports setting arbitrary outline color variables with alpha channel', async ({ uno }) => {
  const classes = [
    'text-[--w-black/90]',
    'text-[--w-s-color-background-positive-selected-hover/100]',
    'text-[--w-rgb-white/0]',
    'text-[var(--w-color-text-link-active)/55]',
    'text-[var(--w-s-color-border)/60]',
    'text-[--w-s-color-background/5]',
    'text-[var(--w-black)/100]',
    'text-[--w-white/5]',
    'text-[--w-rgb-black/75]',
    'text-[var(--w-s-rgb-border-disabled)/12]',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('it should not generate css for arbitrary outline color variables with incorrect alpha channel values', async ({ uno }) => {
  const antiClasses = [
    'text-[--w-black/900]',
    'text-[--w-black/]',
    'text-[--w-black/101]',
    'text-[--w-black/001]',
    'text-[--w-black/1000]',
    'text-[--w-black/00]',
    'text-[--w-black/01]',
  ];
  const { css } = await uno.generate(antiClasses);
  expect(css).toHaveLength(0);
});

test('text color invalid class', async ({ uno }) => {
  const classes = ['text-color'];
  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});

test('bg colors', async ({ uno }) => {
  const classes = ['bg-inherit', 'bg-transparent', 'bg-current'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('caret', async ({ uno }) => {
  const classes = ['caret-inherit', 'caret-current', 'caret-transparent'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
