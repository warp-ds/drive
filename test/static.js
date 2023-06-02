import { setup } from './_helpers.js';
import { expect, test, describe } from 'vitest';
import { positionMap } from '#utils';
import * as staticRules from '../src/_rules/static.js';
// TODO: change this to a subpath import when this lands
// https://github.com/vitejs/vite/pull/7770

setup();

test('static rules do static things', async ({ uno }) => {
  const staticClasses = Object.values(staticRules).flat().filter(rule => typeof rule[0] === 'string').map(rule => rule[0]);
  const { css } = await uno.generate(staticClasses);
  expect(css).toMatchSnapshot();
});

test('static rules for page-container', async ({ uno }) => {
  const staticClasses = ['page-container'];
  const { css } = await uno.generate(staticClasses);
  expect(css).toMatchSnapshot();
});

describe('static rules for object position', () => {
  test('supports all predefined values in the position map', async ({ uno }) => {
    const staticClasses = Object.keys(positionMap).map(position => `object-${position}`);
    const arbitraryClasses = ['pb-safe-[32]'];
    const { css } = await uno.generate([...staticClasses, ...arbitraryClasses]);
    expect(css).toMatchSnapshot();
  });
  test('do not support invalid values', async ({ uno }) => {
    const staticClasses = ['object-position', 'object-right-left'];
    const { css } = await uno.generate(staticClasses);
    expect(css).toMatchInlineSnapshot('""');
  });
});
