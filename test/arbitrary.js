import { setup } from './_helpers.js';
import { expect, test } from 'vitest';

setup();

test('arbitrary', async ({ uno }) => {
  const classes = ['[--w-content: "I am awesome"]', '[--f-modal-max-height: 80%]'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
