import { setup } from './_helpers.js';
import { expect, test } from 'vitest';
import { positionMap, globalKeywords } from '#utils';

setup();

test('bg positions', async ({ uno }) => {
  const positions = Object.values(positionMap);
  const classes = positions.map(e => `bg-${e}`);
  const twoDimensionClasses = positions.flatMap(e => positions.map(f => `bg-${e}-${f}`));
  const { css } = await uno.generate([...classes, ...twoDimensionClasses]);
  expect(css).toMatchSnapshot();
});

test('bg repeats', async ({ uno }) => {
  const classes = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg origins', async ({ uno }) => {
  const classes = ['border', 'padding', 'content'].map(e => `bg-origin-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg size', async ({ uno }) => {
  const classes = ['auto', 'cover', 'contain'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg attachments', async ({ uno }) => {
  const classes = ['fixed', 'local', 'scroll'].map(e => `bg-${e}`);
  const { css } = await uno.generate(classes);
  expect(css).toMatchSnapshot();
});

test('bg clip', async ({ uno }) => {
  const staticClasses = ['bg-clip-border',
    'bg-clip-content',
    'bg-clip-padding',
    'bg-clip-text'];
  const globalKeyClasses = globalKeywords.map(keyword => `bg-clip-${keyword}`);
  const { css } = await uno.generate([...staticClasses, ...globalKeyClasses]);
  expect(css).toMatchSnapshot();
});

test('bg invalid', async ({ uno }) => {
  const classes = ['bg-white', 'bg-none'];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('bg arbitrary url', async ({ uno }) => {
  const classes = [`bg-[url('/img/hero-pattern.svg')]`, `peer-checked:before:bg-[url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 8L7 11L12.5 5" stroke="%2371717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')]`,
    `bg-[url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 8L7 11L12.5 5" stroke="%2371717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')]`];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .bg-\\\\[url\\\\(\\\\'\\\\/img\\\\/hero-pattern\\\\.svg\\\\'\\\\)\\\\]{background-image:url('/img/hero-pattern.svg');}
    .bg-\\\\[url\\\\(\\\\'data\\\\:image\\\\/svg\\\\+xml\\\\,\\\\%3Csvg\\\\ width\\\\=\\\\\\"16\\\\\\"\\\\ height\\\\=\\\\\\"16\\\\\\"\\\\ viewBox\\\\=\\\\\\"0\\\\ 0\\\\ 16\\\\ 16\\\\\\"\\\\ fill\\\\=\\\\\\"white\\\\\\"\\\\ xmlns\\\\=\\\\\\"http\\\\:\\\\/\\\\/www\\\\.w3\\\\.org\\\\/2000\\\\/svg\\\\\\"\\\\%3E\\\\%3Cpath\\\\ d\\\\=\\\\\\"M4\\\\ 8L7\\\\ 11L12\\\\.5\\\\ 5\\\\\\"\\\\ stroke\\\\=\\\\\\"\\\\%2371717A\\\\\\"\\\\ stroke-width\\\\=\\\\\\"1\\\\.5\\\\\\"\\\\ stroke-linecap\\\\=\\\\\\"round\\\\\\"\\\\ stroke-linejoin\\\\=\\\\\\"round\\\\\\"\\\\/\\\\%3E\\\\%3C\\\\/svg\\\\%3E\\\\'\\\\)\\\\]{background-image:url('data:image/svg+xml,%3Csvg width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" fill=\\"white\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M4 8L7 11L12.5 5\\" stroke=\\"%2371717A\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/%3E%3C/svg%3E');}
    .peer:checked~.peer-checked\\\\:before\\\\:bg-\\\\[url\\\\(\\\\'data\\\\:image\\\\/svg\\\\+xml\\\\,\\\\%3Csvg\\\\ width\\\\=\\\\\\"16\\\\\\"\\\\ height\\\\=\\\\\\"16\\\\\\"\\\\ viewBox\\\\=\\\\\\"0\\\\ 0\\\\ 16\\\\ 16\\\\\\"\\\\ fill\\\\=\\\\\\"none\\\\\\"\\\\ xmlns\\\\=\\\\\\"http\\\\:\\\\/\\\\/www\\\\.w3\\\\.org\\\\/2000\\\\/svg\\\\\\"\\\\%3E\\\\%3Cpath\\\\ d\\\\=\\\\\\"M4\\\\ 8L7\\\\ 11L12\\\\.5\\\\ 5\\\\\\"\\\\ stroke\\\\=\\\\\\"\\\\%2371717A\\\\\\"\\\\ stroke-width\\\\=\\\\\\"1\\\\.5\\\\\\"\\\\ stroke-linecap\\\\=\\\\\\"round\\\\\\"\\\\ stroke-linejoin\\\\=\\\\\\"round\\\\\\"\\\\/\\\\%3E\\\\%3C\\\\/svg\\\\%3E\\\\'\\\\)\\\\]::before{background-image:url('data:image/svg+xml,%3Csvg width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M4 8L7 11L12.5 5\\" stroke=\\"%2371717A\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/%3E%3C/svg%3E');}"
  `);
});
