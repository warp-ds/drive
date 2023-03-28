import { setup } from './_helpers.js';
import { expect, test } from 'vitest';

setup();

test('it generates css based on warp tokens', async ({ uno }) => {
  const classes = [
    'i-bg-$foo-bar',
    'i-text-$biz-baz',
    'i-border-$wombat-llama',
    'i-border-l-$color-alert-info-border',
    'i-border-r-$color-alert-info-border',
    'i-border-t-$color-alert-info-border',
    'i-border-b-$color-alert-info-border',
  ];
  const anticlasses = [
    'i-bg-foos-bars',
    'i-text-bizs-bazs',
    'i-border-wombats-llamas',
    'i-magnuseses',
    'i-border-tr-$color-alert-info-border',
    'i-border-br-$color-alert-info-border',
    'i-border-tl-$color-alert-info-border',
    'i-border-bl-$color-alert-info-border',
    'i-border-tbl-$color-alert-info-border',
  ];
  const { css } = await uno.generate([...classes, ...anticlasses]);
  expect(css).toMatchSnapshot();
});
