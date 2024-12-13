import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('it generates css based on semantic dataviz tokens', async ({ uno }) => {
  const classes = [
    'dv-s-border-warning',
    'dv-s-border-l-warning',
    'dv-s-border-r-warning',
    'dv-s-border-b-warning',
    'dv-s-border-t-warning',
    'dv-s-border-y-warning',
    'dv-s-border-x-warning',
    'dv-s-outline-neutral',
    'dv-s-outline-negative',
    'dv-s-outline-warning',
    'dv-s-outline-positive',
    'dv-s-outline-category6',
    'dv-s-divide-neutral',
    'dv-s-divide-neutral',
    'dv-s-divide-x-neutral',
    'dv-s-divide-y-neutral',
    'dv-s-divide-category6',
    'dv-s-fill-neutral',
    'dv-s-fill-negative',
    'dv-s-fill-warning',
    'dv-s-fill-positive',
    'dv-s-fill-category6',
    'dv-s-bg-neutral',
    'dv-s-bg-negative',
    'dv-s-bg-warning',
    'dv-s-bg-positive',
    'dv-s-bg-category6',
    'dv-s-icon-category7',
    'dv-s-icon-category8',
    'dv-s-icon-negative',
    'dv-s-icon-neutral',
    'dv-s-icon-positive',
    'dv-s-icon-warning',
    'dv-s-text-category7',
    'dv-s-text-category8',
    'dv-s-text-negative',
    'dv-s-text-neutral',
    'dv-s-text-positive',
    'dv-s-text-warning',
    'dv-s-line-category7',
    'dv-s-line-category8',
    'dv-s-line-negative',
    'dv-s-line-neutral',
    'dv-s-line-positive',
    'dv-s-line-warning',
  ];
  const antiClasses = [
    'dv-s-background',
    'dv-s-background-positive-selected',
    'dv-s-font',
    'dv-s-font-link-active',
    'dv-s-bordercolor',
    'dv-s-bordercolor-l-disabled',
    'dv-s-dividecolor',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});

test('it generates css based on semantic dataviz tokens with alpha channel', async ({ uno }) => {
  const classes = [
    'dv-s-border-warning/90',
    'dv-s-fill-positive/100',
    'dv-s-icon-category7/5',
    'dv-s-icon-category8/99',
    'dv-s-icon-negative/1',
    'dv-s-icon-neutral/0',
    'dv-s-icon-positive/4',
    'dv-s-icon-warning/25',
    'dv-s-text-neutral/15',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('it should not generate css with incorrect alpha channel values', async ({ uno }) => {
  const antiClasses = [
    'dv-s-bg/900',
    'dv-s-bg/',
    'dv-s-bg/101',
    'dv-s-bg/001',
    'dv-s-bg/1000',
    'dv-s-bg/00',
    'dv-s-bg/01',
    'dv-s-bg-positive-selected-hover/00',
    'dv-s-text/001',
    'dv-s-text-link-active/5566',
    'dv-s-border/1000',
    'dv-s-border-l/505',
  ];
  const { css } = await uno.generate(antiClasses);
  expect(css).toHaveLength(0);
});

test('pseudo', async ({ uno }) => {
  const classes = [
    'focus:dv-s-icon-category7-focus',
    'focus:dv-s-icon-category8-focus',
    'focus:dv-s-icon-negative-focus',
    'focus:dv-s-icon-neutral-focus',
    'focus:dv-s-icon-positive-focus',
    'focus:dv-s-icon-warning-focus',
    'hover:dv-s-border-primary-hover',
    'hover:dv-s-fill-secondary-hover',
    'hover:dv-s-icon-negative-hover',
    'hover:dv-s-icon-neutral-hover',
    'hover:dv-s-line-neutral-hover',
    'hover:dv-s-text-positive-hover',
    'hover:dv-s-text-warning-hover',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
