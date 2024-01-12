import { expect, test } from 'vitest';
import { setup } from './_helpers.js';

setup();

test('padding works', async ({ uno }) => {
  const classes = ['p-8', 'px-2', 'py-4', 'pl-32', 'pr-16', 'pb-8', 'pt-16'];
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
