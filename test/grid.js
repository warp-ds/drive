import { setup } from './_helpers.js';
import { expect, assert, test } from 'vitest';
import { gridCol, gridRow } from '../src/bounds.js';

setup();

const arrRange = (first, last) =>
  Array.from({ length: last - first + 1 }, (_, index) => first + index);

const columns = arrRange(gridCol[0], gridCol[1]);
const rows = arrRange(gridRow[0], gridRow[1]);

test('grid span', async (t) => {
  const staticClasses = [
    'col-auto',
    'row-auto',
    'col-span-full',
    'row-span-full',
  ];

  const artbitraryClassesRows = rows.map((_, i) => {
    return `row-span-${i + 1}`;
  });
  const artbitraryClassesCols = columns.map((_, i) => {
    return `col-span-${i + 1}`;
  });

  const { css } = await t.uno.generate([
    ...staticClasses,
    ...artbitraryClassesCols,
    ...artbitraryClassesRows,
  ]);

  expect(css).toMatchSnapshot();
});

test('grid starts and ends', async (t) => {
  const classes = ['row-start-1', 'row-end-5', 'col-start-1', 'col-end-3'];
  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .row-start-1{grid-row-start:1;}
    .col-start-1{grid-column-start:1;}
    .row-end-5{grid-row-end:5;}
    .col-end-3{grid-column-end:3;}"
  `);
});

test('grid columns with arbitrary values', async (t) => {
  const arbitrary = [
    'grid-cols-[200px_minmax(900px,_1fr)_100px]',
    'grid-cols-[320px_1fr]',
  ];
  const { css } = await t.uno.generate(arbitrary);
  assert.include(css, 'grid-template-columns:200px minmax(900px, 1fr) 100px;');
  assert.include(css, 'grid-template-columns:320px 1fr;');
});

test('grid rows with arbitrary values', async (t) => {
  const arbitrary = ['grid-rows-[200px repeat(auto-fill, 100px) 300px]'];
  const { css } = await t.uno.generate(arbitrary);
  assert.include(
    css,
    'grid-template-rows:200px repeat(auto-fill, 100px) 300px;'
  );
});

test('grid auto flows', async (t) => {
  const gridFlows = [
    'auto-rows-auto',
    'auto-rows-min',
    'auto-rows-max',
    'auto-rows-fr',
    'grid-flow-row',
    'grid-flow-col',
    'grid-flow-dense',
    'grid-flow-row-dense',
    'grid-flow-col-dense',
  ];
  const { css } = await t.uno.generate(gridFlows);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .auto-rows-auto{grid-auto-rows:auto;}
    .auto-rows-fr{grid-auto-rows:minmax(0,1fr);}
    .auto-rows-max{grid-auto-rows:max-content;}
    .auto-rows-min{grid-auto-rows:min-content;}
    .grid-flow-row{grid-auto-flow:row;}
    .grid-flow-col{grid-auto-flow:column;}
    .grid-flow-dense{grid-auto-flow:dense;}
    .grid-flow-row-dense{grid-auto-flow:row dense;}
    .grid-flow-col-dense{grid-auto-flow:column dense;}"
  `);
});

test('grid templates basic', async (t) => {
  const numbers = Array.from({ length: 5 });

  const classesRows = rows.map((_, i) => {
    return `grid-rows-${i + 1}`;
  });
  const classesCols = columns.map((_, i) => {
    return `grid-cols-${i + 1}`;
  });

  const { css } = await t.uno.generate([...classesCols, ...classesRows]);
  expect(css).toMatchSnapshot();
});

test('grid templates do not render if out of range', async (t) => {
  const classes = ['grid-rows-8', 'grid-rows-13'];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot('""');
});

test('grid templates none', async (t) => {
  const classes = ['grid-rows-none', 'grid-cols-none'];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .grid-rows-none{grid-template-rows:none;}
    .grid-cols-none{grid-template-columns:none;}"
  `);
});
