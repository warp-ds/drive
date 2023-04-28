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
  const classes = [
    `bg-[url('/img/hero-pattern.svg')]`,
    `bg-[url("/img/hero-pattern.svg")]`,
    `peer-checked:before:bg-[url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 8L7 11L12.5 5" stroke="%2371717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E')]`,
    `bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")]`];
  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .bg-\\\\[url\\\\(\\\\'\\\\/img\\\\/hero-pattern\\\\.svg\\\\'\\\\)\\\\],
    .bg-\\\\[url\\\\(\\\\\\"\\\\/img\\\\/hero-pattern\\\\.svg\\\\\\"\\\\)\\\\]{background-image:url(\\"/img/hero-pattern.svg\\");}
    .bg-\\\\[url\\\\(\\\\\\"data\\\\:image\\\\/svg\\\\+xml\\\\,\\\\%3csvg\\\\ xmlns\\\\=\\\\'http\\\\:\\\\/\\\\/www\\\\.w3\\\\.org\\\\/2000\\\\/svg\\\\'\\\\ viewBox\\\\=\\\\'0\\\\ 0\\\\ 16\\\\ 16\\\\'\\\\ fill\\\\=\\\\'white\\\\'\\\\%3e\\\\%3cpath\\\\ d\\\\=\\\\'M12\\\\.207\\\\ 4\\\\.793a1\\\\ 1\\\\ 0\\\\ 010\\\\ 1\\\\.414l-5\\\\ 5a1\\\\ 1\\\\ 0\\\\ 01-1\\\\.414\\\\ 0l-2-2a1\\\\ 1\\\\ 0\\\\ 011\\\\.414-1\\\\.414L6\\\\.5\\\\ 9\\\\.086l4\\\\.293-4\\\\.293a1\\\\ 1\\\\ 0\\\\ 011\\\\.414\\\\ 0z\\\\'\\\\/\\\\%3e\\\\%3c\\\\/svg\\\\%3e\\\\\\"\\\\)\\\\]{background-image:url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\");}
    .peer:checked~.peer-checked\\\\:before\\\\:bg-\\\\[url\\\\(\\\\'data\\\\:image\\\\/svg\\\\+xml\\\\,\\\\%3Csvg\\\\ width\\\\=\\\\\\"16\\\\\\"\\\\ height\\\\=\\\\\\"16\\\\\\"\\\\ viewBox\\\\=\\\\\\"0\\\\ 0\\\\ 16\\\\ 16\\\\\\"\\\\ fill\\\\=\\\\\\"none\\\\\\"\\\\ xmlns\\\\=\\\\\\"http\\\\:\\\\/\\\\/www\\\\.w3\\\\.org\\\\/2000\\\\/svg\\\\\\"\\\\%3E\\\\%3Cpath\\\\ d\\\\=\\\\\\"M4\\\\ 8L7\\\\ 11L12\\\\.5\\\\ 5\\\\\\"\\\\ stroke\\\\=\\\\\\"\\\\%2371717A\\\\\\"\\\\ stroke-width\\\\=\\\\\\"1\\\\.5\\\\\\"\\\\ stroke-linecap\\\\=\\\\\\"round\\\\\\"\\\\ stroke-linejoin\\\\=\\\\\\"round\\\\\\"\\\\/\\\\%3E\\\\%3C\\\\/svg\\\\%3E\\\\'\\\\)\\\\]::before{background-image:url(\\"data:image/svg+xml,%3Csvg width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M4 8L7 11L12.5 5\\" stroke=\\"%2371717A\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/%3E%3C/svg%3E\\");}"
  `);
});
