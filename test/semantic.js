import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('it generates css based on semantic warp tokens', async ({ uno }) => {
  const classes = [
    's-bg',
    's-bg-positive-selected-hover',
    's-text',
    's-text-link-active',
    's-border',
    's-border-l',
    's-border-r',
    's-border-t',
    's-border-b',
    's-border-x',
    's-border-y',
    's-border-l-disabled',
    's-border-r-primary-selected-hover',
    's-border-t-positive',
    's-border-b-negative-hover',
    's-border-x-warning-active',
    's-border-y-info-subtle-active',
    's-divide',
    's-divide-disabled',
    's-divide-negative',
    's-divide-x-disabled',
    's-divide-y-negative',
    's-divide-info-subtle-active',
    's-outline',
    's-outline-focus',
    's-outline-negative',
    's-icon',
    's-icon-hover',
    's-icon-active',
    's-icon-selected-hover',
    's-icon-disabled',
    's-icon-subtle',
    's-icon-subtle-hover',
    's-icon-subtle-active',
    's-icon-inverted',
    's-icon-primary',
    's-icon-positive',
    's-icon-negative',
    's-icon-warning',
    's-icon-info',
  ];
  const antiClasses = [
    's-background',
    's-background-positive-selected',
    's-font',
    's-font-link-active',
    's-bordercolor',
    's-bordercolor-l-disabled',
    's-dividecolor',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});

test('it generates css based on semantic warp tokens with alpha channel', async ({ uno }) => {
  const classes = [
    's-bg/90',
    's-bg-positive-selected-hover/100',
    's-text/0',
    's-text-link-active/55',
    's-border/60',
    's-border-l/5',
    's-border-r/100',
    's-border-t/99',
    's-border-b/1',
    's-border-x/5',
    's-border-y/75',
    's-border-l-disabled/12',
    's-border-r-primary-selected-hover/45',
    's-border-t-positive/45',
    's-border-b-negative-hover/7',
    's-border-x-warning-active/23',
    's-border-y-info-subtle-active/15',
    's-divide/76',
    's-divide-disabled/23',
    's-divide-negative/100',
    's-divide-x-disabled/10',
    's-divide-y-negative/53',
    's-divide-info-subtle-active/4',
    's-outline/0',
    's-outline-focus/100',
    's-outline-negative/77',
    's-icon/4',
    's-icon-hover/55',
    's-icon-active/23',
    's-icon-selected-hover/22',
    's-icon-disabled/23',
    's-icon-subtle/25',
    's-icon-subtle-hover/2',
    's-icon-subtle-active/9',
    's-icon-inverted/99',
    's-icon-primary/35',
    's-icon-positive/5',
    's-icon-negative/55',
    's-icon-warning/2',
    's-icon-info/100',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('it should not generate css with incorrect alpha channel values', async ({ uno }) => {
  const antiClasses = [
    's-bg/900',
    's-bg/',
    's-bg/101',
    's-bg/001',
    's-bg/1000',
    's-bg/00',
    's-bg/01',
    's-bg-positive-selected-hover/00',
    's-text/001',
    's-text-link-active/5566',
    's-border/1000',
    's-border-l/505',
  ];
  const { css } = await uno.generate(antiClasses);
  expect(css).toHaveLength(0);
});

test('it generates css based on semantic surface tokens', async ({ uno }) => {
  const classes = [
    's-surface-sunken',
    's-surface-elevated-100',
    's-surface-elevated-100-hover',
    's-surface-elevated-100-active',
    's-surface-elevated-200',
    's-surface-elevated-200-hover',
    's-surface-elevated-200-active',
    's-surface-elevated-300',
    's-surface-elevated-300-hover',
    's-surface-elevated-300-active',
  ];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('it should not generate css for incorrect surface classes', async ({ uno }) => {
  const antiClasses = ['s-surface', 's-surface-sunken-100', 's-surface-elevated', 'surface-elevated-100', 'surface-sunken'];
  const { css } = await uno.generate(antiClasses);
  expect(css).toHaveLength(0);
});
