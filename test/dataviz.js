import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('it generates css based on semantic dataviz tokens', async ({ uno }) => {
  const classes = [
    'dv-s-fill-border-warning',
    'dv-s-stroke-border-warning',
    'dv-s-border-warning',
    'dv-s-border-l-warning',
    'dv-s-border-r-warning',
    'dv-s-border-b-warning',
    'dv-s-border-t-warning',
    'dv-s-border-y-warning',
    'dv-s-border-x-warning',
    'dv-s-stroke-line-warning',
    'dv-s-line-warning',
    'dv-s-outline-neutral',
    'dv-s-outline-negative',
    'dv-s-outline-warning',
    'dv-s-outline-positive',
    'dv-s-outline-category6',
    'dv-s-fill-bg-neutral',
    'dv-s-bg-primary',
    'dv-s-bg-neutral',
    'dv-s-bg-negative',
    'dv-s-bg-warning',
    'dv-s-bg-positive',
    'dv-s-bg-category6',
    'dv-s-stroke-icon-category7',
    'dv-s-fill-icon-category7',
    'dv-s-icon-category7',
    'dv-s-icon-category8',
    'dv-s-icon-negative',
    'dv-s-icon-neutral',
    'dv-s-icon-positive',
    'dv-s-icon-warning',
    'dv-s-fill-text-category7',
    'dv-s-text-category7',
    'dv-s-text-category8',
    'dv-s-text-negative',
    'dv-s-text-neutral',
    'dv-s-text-positive',
    'dv-s-text-warning',
    'dv-s-chartline',
    'dv-s-fill-chartline',
    'dv-s-stroke-chartline',
    'dv-s-chartline-subtle',
    'dv-s-fill-chartline-subtle',
    'dv-s-stroke-chartline-subtle',
    'dv-s-chartbg',
    'dv-s-fill-chartbg',
    'dv-s-stroke-chartbg',
    'dv-s-charttext',
    'dv-s-fill-charttext',
    'dv-s-stroke-charttext',
    'dv-s-charttext-subtle',
    'dv-s-fill-charttext-subtle',
    'dv-s-stroke-charttext-subtle',
  ];
  const antiClasses = [
    'dv-s-background',
    'dv-s-background-positive-selected',
    'dv-s-font',
    'dv-s-font-link-active',
    'dv-s-bordercolor',
    'dv-s-bordercolor-l-disabled',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});

test('it generates css based on semantic dataviz tokens with alpha channel', async ({ uno }) => {
  const classes = [
    'dv-s-border-warning/90',
    'dv-s-fill-border-negative/90',
    'dv-s-stroke-line-negative/90',
    'dv-s-bg-positive/100',
    'dv-s-fill-bg-neutral/15',
    'dv-s-outline-category7/5',
    'dv-s-icon-category8/99',
    'dv-s-fill-icon-negative/1',
    'dv-s-stroke-icon-neutral/0',
    'dv-s-text-positive/4',
    'dv-s-fill-text-warning/25',
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
    'dv-s-bg-positive-selected-highlight/00',
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
    'focus:dv-s-icon-category7-highlight',
    'focus:dv-s-fill-icon-category8-highlight',
    'focus:dv-s-stroke-icon-negative-highlight',
    'focus:dv-s-icon-neutral-highlight',
    'focus:dv-s-icon-positive-highlight',
    'focus:dv-s-icon-warning-highlight',
    'hover:dv-s-border-primary-highlight',
    'hover:dv-s-bg-secondary-highlight',
    'hover:dv-s-icon-negative-highlight',
    'hover:dv-s-icon-neutral-highlight',
    'hover:dv-s-stroke-line-neutral-highlight',
    'hover:dv-s-line-neutral-highlight',
    'hover:dv-s-text-positive-highlight',
    'hover:dv-s-text-warning-highlight',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
