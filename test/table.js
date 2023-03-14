import { expect, test } from 'vitest';
import { spaceBase } from '#theme';
import { setup } from './_helpers.js';

setup();

test('border-collapse', async (t) => {
  const classes = ['border-collapse', 'border-separate'];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .border-collapse{border-collapse:collapse;}
    .border-separate{border-collapse:separate;}"
  `);
});

test('border-collapse', async (t) => {
  const classes = ['table-auto', 'table-fixed'];

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .table-auto{table-layout:auto;}
    .table-fixed{table-layout:fixed;}"
  `);
});

test('border-spacing', async (t) => {
  const classes = spaceBase
    .map((spacingUnit) => [
      `border-spacing-x-${spacingUnit}`,
      `border-spacing-y-${spacingUnit}`,
      `border-spacing-${spacingUnit}`,
    ])
    .flat();

  const { css } = await t.uno.generate(classes);

  expect(css).toMatchSnapshot();
});
