import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";
import { getNumericArrayInRange } from '#utils';


setup();

describe('line-clamp', () => {
  test('should render styles for static classes', async ({ uno }) => {
    const staticClasses = getNumericArrayInRange(1, 9).map(n => `line-clamp-${n}`);

    const { css } = await uno.generate(staticClasses);
    expect(css).toMatchSnapshot();
  });
  test('should not render styles for invalid classes', async ({ uno }) => {
    const arbitraryClasses = ['line-clamp', 'line-clamp-foo'];

    const { css } = await uno.generate(arbitraryClasses);
    expect(css).toMatchInlineSnapshot('""');
  });
});

