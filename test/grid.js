import { expect, assert, test } from 'vitest';
import { gridCol, gridRow } from '#bounds';
import { setup } from './_helpers.js';

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

  const artbitraryClassesRows = rows.map((num) => {
    return `row-span-${num}`;
  });
  const artbitraryClassesCols = columns.map((num) => {
    return `col-span-${num}`;
  });

  const { css } = await t.uno.generate([
    ...staticClasses,
    ...artbitraryClassesCols,
    ...artbitraryClassesRows,
  ]);

  expect(css).toMatchSnapshot();
});

test('grid starts and ends', async (t) => {
  const classesRows = rows.map((num) => {
    return [`row-start-${num}`, `row-end-${num}`];
  });
  const classesCols = columns.map((num) => {
    return [`col-start-${num}`, `col-end-${num}`];
  });

  const { css } = await t.uno.generate([...classesRows, ...classesCols].flat());
  expect(css).toMatchSnapshot();
});

test('grid template columns with arbitrary values', async (t) => {
  const arbitrary = [
    'grid-cols-[200px_minmax(900px,_1fr)_100px]',
    'grid-cols-[320px_1fr]',
    'grid-cols-minmax-200px'
  ];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchSnapshot();
});

test('grid template rows with arbitrary values', async (t) => {
  const arbitrary = [
    'grid-rows-[200px_repeat(auto-fill, 100px)_300px]',
    'grid-rows-minmax-400px',
    'grid-rows-minmax-400px'
  ];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchSnapshot();
});

test('grid template rows and cols with not correct arbitrary values', async (t) => {
  const arbitrary = [
    'grid-cols-200px_minmax(900px,_1fr)_100px',
    'grid-rows-200px_repeat(auto-fill, 100px)_300px',
    'grid-rows-minmax-[200px-400px]'
  ];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchInlineSnapshot('""');
});

test('grid auto flows', async (t) => {
  const gridFlows = [
    'auto-rows-auto',
    'auto-rows-min',
    'auto-rows-max',
    'auto-rows-fr',
    'auto-cols-auto',
    'auto-cols-min',
    'auto-cols-max',
    'auto-cols-fr',
    'grid-flow-row',
    'grid-flow-col',
    'grid-flow-dense',
    'grid-flow-row-dense',
    'grid-flow-col-dense',
  ];
  const { css } = await t.uno.generate(gridFlows);

  expect(css).toMatchSnapshot();
});

test('grid templates basic', async (t) => {
  const classesRows = rows.map((num) => {
    return `grid-rows-${num}`;
  });
  const classesCols = columns.map((num) => {
    return `grid-cols-${num}`;
  });

  const { css } = await t.uno.generate([...classesCols, ...classesRows]);
  expect(css).toMatchSnapshot();
});

test('grid styling is not created if out of range', async (t) => {
  const outOfRangeRow = rows.length + 1;
  const outOfRangeColumn = columns.length + 1;
  const classes = [
    `grid-rows-${outOfRangeRow}`,
    `grid-columns-${outOfRangeColumn}`,
    `row-span-${outOfRangeRow}`,
    `col-span-${outOfRangeColumn}`,
    `col-start-${outOfRangeColumn}`,
    `col-end-${outOfRangeColumn}`,
    `row-start-${outOfRangeRow}`,
    `row-end-${outOfRangeRow}`,
  ];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchInlineSnapshot('""');
});

test('grid templates none', async (t) => {
  const classes = ['grid-rows-none', 'grid-cols-none'];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchSnapshot();
});
