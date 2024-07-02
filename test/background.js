import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

import { positionMap, globalKeywords } from '#utils';

setup();

test('bg positions', async ({ uno }) => {
  const positions = Object.values(positionMap);
  const classes = positions.map((e) => `bg-${e}`);
  const twoDimensionClasses = positions.flatMap((e) => positions.map((f) => `bg-${e}-${f}`));
  const { css } = await uno.generate([...classes, ...twoDimensionClasses]);
  expect(css).toMatchSnapshot();
});

test('bg repeats', async ({ uno }) => {
  const classes = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space'].map((e) => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg origins', async ({ uno }) => {
  const classes = ['border', 'padding', 'content'].map((e) => `bg-origin-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg size', async ({ uno }) => {
  const classes = ['auto', 'cover', 'contain'].map((e) => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg attachments', async ({ uno }) => {
  const classes = ['fixed', 'local', 'scroll'].map((e) => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg clip', async ({ uno }) => {
  const staticClasses = ['bg-clip-border', 'bg-clip-content', 'bg-clip-padding', 'bg-clip-text'];
  const globalKeyClasses = globalKeywords.map((keyword) => `bg-clip-${keyword}`);
  const { css } = await uno.generate([...staticClasses, ...globalKeyClasses]);
  expect(css).toMatchSnapshot();
});

test('bg images', async ({ uno }) => {
  const classes = [
    'bg-none',
    `bg-[url(/img/hero-pattern.svg)]`,
    `bg-[url('/img/hero-pattern.svg')]`,
    `bg-[url("/img/hero-pattern.svg")]`,
    `before:bg-[url(var(--w-form-check-mark))]`,
    `peer-checked:before:bg-[url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 8L7 11L12.5 5" stroke="%2371717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')]`,
    `bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")]`,
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('supports setting arbitrary background colors', async ({ uno }) => {
  const classes = ['bg-[--w-s-color-background]', 'bg-[var(--w-s-color-background)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('supports setting arbitrary background color variables with alpha channel', async ({ uno }) => {
  const classes = [
    'bg-[--w-black/90]',
    'bg-[--w-s-color-background-positive-selected-hover/100]',
    'bg-[--w-rgb-white/0]',
    'bg-[var(--w-color-text-link-active)/55]',
    'bg-[var(--w-s-color-border)/60]',
    'bg-[--w-s-color-background/5]',
    'bg-[var(--w-black)/100]',
    'bg-[--w-white/5]',
    'bg-[--w-rgb-black/75]',
    'bg-[var(--w-s-rgb-border-disabled)/12]',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('it should not generate css for arbitrary background color variables with incorrect alpha channel values', async ({ uno }) => {
  const antiClasses = [
    'bg-[--w-black/900]',
    'bg-[--w-black/]',
    'bg-[--w-black/101]',
    'bg-[--w-black/001]',
    'bg-[--w-black/1000]',
    'bg-[--w-black/00]',
    'bg-[--w-black/01]',
  ];
  const { css } = await uno.generate(antiClasses);
  expect(css).toHaveLength(0);
});

test('supports setting arbitrary background positions', async ({ uno }) => {
  const classes = ['bg-[25%_75%]', 'bg-[right_3em_bottom_10px]', 'bg-[center_top_1rem]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('invalid background color classes', async ({ uno }) => {
  const classes = ['bg-white', 'bg-color', 'background-[--w-s-color-background]', 'background-[var(--w-s-color-background)]'];
  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});
