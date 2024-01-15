import { expect, test } from 'vitest';
import { setup } from './_helpers.js';

setup();

const columns = Array.from({ length: 13 }, (_, index) => 1 + index);
const rows = Array.from({ length: 7 }, (_, index) => 1 + index);

test('grid span', async (t) => {
  const staticClasses = ['col-auto', 'row-auto', 'col-span-full', 'row-span-full'];

  const artbitraryClassesRows = rows.map((num) => `row-span-${num}`);
  const artbitraryClassesCols = columns.map((num) => `col-span-${num}`);

  const { css } = await t.uno.generate([...staticClasses, ...artbitraryClassesCols, ...artbitraryClassesRows]);

  expect(css).toMatchSnapshot();
});

test('grid starts and ends', async (t) => {
  const classesRows = rows.map((num) => [`row-start-${num}`, `row-end-${num}`]);
  const classesCols = columns.map((num) => [`col-start-${num}`, `col-end-${num}`]);

  const { css } = await t.uno.generate([...classesRows, ...classesCols].flat());
  expect(css).toMatchSnapshot();
});

test('grid template columns with arbitrary values', async (t) => {
  const arbitrary = ['grid-cols-[200px_minmax(900px,_1fr)_100px]', 'grid-cols-[320px_1fr]', 'grid-cols-minmax-200px'];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchSnapshot();
});

test('grid template rows with arbitrary values', async (t) => {
  const arbitrary = ['grid-rows-[200px_repeat(auto-fill, 100px)_300px]', 'grid-rows-minmax-400px', 'grid-rows-minmax-400px'];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchSnapshot();
});

test('grid template rows and cols with not correct arbitrary values', async (t) => {
  const arbitrary = ['grid-cols-200px_minmax(900px,_1fr)_100px', 'grid-rows-200px_repeat(auto-fill, 100px)_300px', 'grid-rows-minmax-[200px-400px]'];
  const { css } = await t.uno.generate(arbitrary);
  expect(css).toMatchInlineSnapshot('""');
});

test('grid auto flows', async (t) => {
  const gridFlows = ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr', 'auto-cols-auto', 'auto-cols-min', 'auto-cols-max', 'auto-cols-fr', 'grid-flow-row', 'grid-flow-col', 'grid-flow-dense', 'grid-flow-row-dense', 'grid-flow-col-dense'];
  const { css } = await t.uno.generate(gridFlows);

  expect(css).toMatchSnapshot();
});

test('grid auto rows and cols with arbitrary values', async (t) => {
  const gridRowsCols = ['auto-rows-[20]', 'auto-rows-[20px]', 'auto-rows-[20rem]', 'auto-rows-[20fr]', 'auto-rows-[20%]', 'auto-rows-[20cm]', 'auto-rows-[20fr_20cm_0%]', 'auto-rows-[20fr_20_0%]', 'auto-rows-[minmax(0,2fr)]', 'auto-rows-[min-content_max-content_auto]', 'auto-rows-[minmax(100px,auto)_minmax(max-content,2fr)_minmax(20%,80vmax)]', 'auto-cols-[20]', 'auto-cols-[20px]', 'auto-cols-[20rem]', 'auto-cols-[20fr]', 'auto-cols-[20%]', 'auto-cols-[20cm]', 'auto-cols-[20fr_20cm_0%]', 'auto-cols-[20fr_20_0%]', 'auto-cols-[minmax(0,2fr)]', 'auto-cols-[min-content_max-content_auto]', 'auto-cols-[minmax(100px,auto)_minmax(max-content,2fr)_minmax(20%,80vmax)]'];
  const { css } = await t.uno.generate(gridRowsCols);

  expect(css).toMatchSnapshot();
});

test('grid templates basic', async (t) => {
  const classesRows = rows.map((num) => `grid-rows-${num}`);
  const classesCols = columns.map((num) => `grid-cols-${num}`);
  const { css } = await t.uno.generate([...classesCols, ...classesRows]);

  expect(css).toMatchSnapshot();
});

test('grid templates none', async (t) => {
  const classes = ['grid-rows-none', 'grid-cols-none'];
  const { css } = await t.uno.generate(classes);

  expect(css).toMatchSnapshot();
});
