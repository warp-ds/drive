import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";
import * as displayRules from '../src/_rules/display.js';


setup();

describe('display', () => {
  test('should render styles for static classes', async ({ uno }) => {
    const staticClasses = Object.values(displayRules).flat().filter(rule => typeof rule[0] === 'string').map(rule => rule[0]);

    const { css } = await uno.generate(staticClasses);
    expect(css).toMatchSnapshot();
  });
  test('should render styles for arbitrary values', async ({ uno }) => {
    const arbitraryClasses = ['display-unset', 'display-inherit', 'display-revert', 'display-[revert]'];

    const { css } = await uno.generate(arbitraryClasses);
    expect(css).toMatchSnapshot();
  });
  test('should not render styles for invalid classes', async ({ uno }) => {
    const arbitraryClasses = ['unset'];

    const { css } = await uno.generate(arbitraryClasses);
    expect(css).toMatchInlineSnapshot('""');
  });
});

