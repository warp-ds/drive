import { setup } from "./_helpers.js";
import { describe, expect, test } from "vitest";

setup();

describe('line-clamp', () => {
  test('should render styles for static classes', async ({ uno }) => {
    const staticClasses = Array.from({ length: 9 }, (_, index) => `line-clamp-${1 + index}`);
    const { css } = await uno.generate(staticClasses);
    expect(css).toMatchSnapshot();
  });
  test('should not render styles for invalid classes', async ({ uno }) => {
    const arbitraryClasses = ['line-clamp', 'line-clamp-foo'];
    const { css } = await uno.generate(arbitraryClasses);
    expect(css).toMatchInlineSnapshot('""');
  });
});

