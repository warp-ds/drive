import { expect, test } from 'vitest';
import { setup } from './_helpers.js';

setup();

test('padding works', async ({ uno }) => {
  const classes = ['p-8', 'px-2', 'py-4', 'pl-32', 'pr-16', 'pb-8', 'pt-16', 'p-auto', 'pl-auto'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('padding skips bad values', async ({ uno }) => {
  const classes = ['p-7', 'px-3', 'py-5', 'pl-33', 'pr-19', 'pb-9', 'pt-17'];
  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});

test('margin works', async ({ uno }) => {
  const classes = ['m-8', 'mx-2', 'my-4', 'ml-32', 'mr-16', 'mb-8', 'mt-16', '-m-8', 'm-auto', 'ml-auto'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('margin skips bad values', async ({ uno }) => {
  const classes = ['m-7', 'mx-3', 'my-5', 'ml-33', 'mr-19', 'mb-9', 'mt-17', '-m-11'];
  const { css } = await uno.generate(classes);
  expect(css).toHaveLength(0);
});

test('arbitrary padding works', async ({ uno }) => {
  const classes = ['p-[8]', 'p-[8rem]', 'p-[8px]', 'px-[8]', 'px-[8rem]', 'px-[8px]', 'py-[8]', 'py-[8rem]', 'py-[8px]', 'pr-[8]', 'pr-[8rem]', 'pr-[8px]', 'pl-[8]', 'pl-[8rem]', 'pl-[8px]', 'pt-[8]', 'pt-[8rem]', 'pt-[8px]', 'pb-[8]', 'pb-[8rem]', 'pb-[8px]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary margin works', async ({ uno }) => {
  const classes = ['m-[8]', 'm-[8rem]', 'm-[8px]', 'mx-[8]', 'mx-[8rem]', 'mx-[8px]', 'my-[8]', 'my-[8rem]', 'my-[8px]', 'mr-[8]', 'mr-[8rem]', 'mr-[8px]', 'ml-[8]', 'ml-[8rem]', 'ml-[8px]', 'mt-[8]', 'mt-[8rem]', 'mt-[8px]', 'mb-[8]', 'mb-[8rem]', 'mb-[8px]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary padding with warp tokens works', async ({ uno }) => {
  const classes = ['p-[--w-spacing]', 'px-[--w-spacing]', 'py-[--w-spacing]', 'pt-[--w-spacing]', 'pb-[--w-spacing]', 'pl-[--w-spacing]', 'pr-[--w-spacing]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary padding with css variables works', async ({ uno }) => {
  const classes = ['p-[var(--w-spacing)]', 'px-[var(--w-spacing)]', 'py-[var(--w-spacing)]', 'pt-[var(--w-spacing)]', 'pb-[var(--w-spacing)]', 'pl-[var(--w-spacing)]', 'pr-[var(--w-spacing)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary padding with warp css var and default value works', async ({ uno }) => {
  const classes = ['p-[var(--w-spacing,_8px)]', 'px-[var(--w-spacing,_8px)]', 'py-[var(--w-spacing,_8px)]', 'pt-[var(--w-spacing,_8px)]', 'pb-[var(--w-spacing,_8px)]', 'pl-[var(--w-spacing,_8px)]', 'pr-[var(--w-spacing,_8px)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('should not render styles for padding with invalid arbitrary values', async ({ uno }) => {
  const classes = ['p-[kvar(--w-spacing,_8px)]', 'px-[hello]', 'py-[-hello]', 'pt-[]', 'pb-[..]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary margin with warp tokens works', async ({ uno }) => {
  const classes = ['m-[--w-spacing]', 'mx-[--w-spacing]', 'my-[--w-spacing]', 'mt-[--w-spacing]', 'mb-[--w-spacing]', 'ml-[--w-spacing]', 'mr-[--w-spacing]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary margin with css variables works', async ({ uno }) => {
  const classes = ['m-[var(--w-spacing)]', 'mx-[var(--w-spacing)]', 'my-[var(--w-spacing)]', 'mt-[var(--w-spacing)]', 'mb-[var(--w-spacing)]', 'ml-[var(--w-spacing)]', 'mr-[var(--w-spacing)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('arbitrary margin with warp css var and default value works', async ({ uno }) => {
  const classes = ['m-[var(--w-spacing,_8px)]', 'mx-[var(--w-spacing,_8px)]', 'my-[var(--w-spacing,_8px)]', 'mt-[var(--w-spacing,_8px)]', 'mb-[var(--w-spacing,_8px)]', 'ml-[var(--w-spacing,_8px)]', 'mr-[var(--w-spacing,_8px)]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
test('should not render styles for margin with invalid arbitrary values', async ({ uno }) => {
  const classes = ['m-[kvar(--w-spacing,_8px)]', 'mx-[hello]', 'my-[-hello]', 'mt-[]', 'mb-[..]'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
