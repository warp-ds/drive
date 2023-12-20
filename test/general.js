import { rules, display } from '#rules';
import { assert, expect, test } from 'vitest';
import { setup, getGenerator } from './_helpers.js';
import { createAutocomplete } from '@unocss/autocomplete';

setup();

test('all static rules generate', async ({ uno }) => {
  const staticClasses = rules.filter(r => typeof r[0] === 'string').map(r => r[0]);
  const generated = await uno.generate(staticClasses);
  // generated.matched is a Set
  assert.equal(generated.matched.size, staticClasses.length);
});

test('display rules are sane', async ({ uno }) => {
  // filter 'hidden' because it doesn't map 1:1 with the CSS it generates
  const displayClasses = display.filter(r => typeof r[0] === 'string').map(r => r[0]).filter(r => r !== 'hidden');
  const buildDisplayRule = c => `display:${c};`;
  const displayExpectations = displayClasses.map(buildDisplayRule);
  displayClasses.push('hidden', 'display-unset', 'display-revert', 'display-inherit');
  displayExpectations.push(buildDisplayRule('none'), buildDisplayRule('unset'), buildDisplayRule('revert'), buildDisplayRule('inherit'));
  const { css } = await uno.generate(displayClasses);
  for (const expected of displayExpectations) assert.include(css, expected);
});

test(`autocomplete doesn't throw`, async ({ uno }) => {
  assert.doesNotThrow(() => {
    const ac = createAutocomplete(uno);
    ac.enumerate();
  });
});

test(`the HTML parser is sane`, async ({ uno }) => {
  const { css } = await uno.generate([`before:content-['before-stuff']`, 'sm:grid']);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .before\\\\:content-\\\\[\\\\'before-stuff\\\\'\\\\]::before{content:'before-stuff';}
    @media (min-width: 480px){
    .sm\\\\:grid{display:grid;}
    }"
  `);
});
test(`testing content-empty`, async ({ uno }) => {
  const { css } = await uno.generate([`before:content-empty`, 'sm:grid']);
  expect(css).toMatchSnapshot()
});

test(`testing content-none`, async ({ uno }) => {
  const { css } = await uno.generate([`before:content-none`, 'sm:grid']);
  expect(css).toMatchSnapshot()
});

test('can generate pixel values for theme', async () => {
  const uno = getGenerator({ usePixels: true });
  const { css } = await uno.generate(['pt-8', 'bottom-4', '-ml-32']);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .bottom-4{bottom:4px;}
    .pt-8{padding-top:8px;}
    .-ml-32{margin-left:-32px;}"
  `);
});

test('it can externalize classes', async () => {
  const uno = getGenerator({ externalizeClasses: true, externalClasses: ['p-16', '-ml-32'] });
  const { css } = await uno.generate(['pt-8', 'bottom-4', '-ml-32']);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .bottom-4{bottom:0.4rem;}
    .pt-8{padding-top:0.8rem;}"
  `);
});
