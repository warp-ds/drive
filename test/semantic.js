import { setup } from './_helpers.js';
import { expect, test } from 'vitest';

setup();

test('it generates css based on semantic warp tokens', async ({ uno }) => {
  const classes = [
    's-bg-default',
    's-bg-positive-active-hover',
    's-text-default',
    's-text-link-active',
    's-border-default',
    's-border-l-disabled',
    's-border-r-primary-active-hover',
    's-border-t-positive-default',
    's-border-b-negative-hover',
    's-border-x-warning-active',
    's-border-y-info-subtle-active-hover',
    's-icon-default',
    's-icon-hover',
    's-icon-active',
    's-icon-active-hover',
    's-icon-disabled',
    's-icon-subtle-default',
    's-icon-subtle-hover',
    's-icon-subtle-active',
    's-icon-subtle-active-hover',
    's-icon-inverted',
    's-icon-primary',
    's-icon-positive',
    's-icon-negative',
    's-icon-warning',
    's-icon-info',
  ];
  const antiClasses = [
    's-background-default',
    's-background-positive-active-hover',
    's-font-default',
    's-font-link-active',
    's-bordercolor-default',
    's-bordercolor-l-disabled',
  ];
  const { css } = await uno.generate([...classes, ...antiClasses]);
  expect(css).toMatchSnapshot();
});
