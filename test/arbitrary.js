import { expect, test } from 'vitest';

import { setup } from './_helpers.js';

setup();

test('arbitrary', async ({ uno }) => {
  const classes = ['[--w-content: "I am awesome"]', '[--f-modal-max-height: 80%]'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});
