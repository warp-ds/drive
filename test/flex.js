import { expect, test } from 'vitest';
import { setup } from './_helpers.js';

setup();

test('flex with arbitrary values', async (t) => {
  const classes = ['flex-[2_2_0%]'];

  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .flex-\\[2_2_0\\%\\]{flex:2 2 0%;}"
  `);
});

test('flex directions', async (t) => {
  const classes = ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'];

  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .flex-row{flex-direction:row;}
      .flex-row-reverse{flex-direction:row-reverse;}
      .flex-col{flex-direction:column;}
      .flex-col-reverse{flex-direction:column-reverse;}"
    `);
});

test('flex wraps', async (t) => {
  const classes = ['flex-wrap', 'flex-wrap-reverse', 'flex-nowrap'];

  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .flex-wrap{flex-wrap:wrap;}
      .flex-wrap-reverse{flex-wrap:wrap-reverse;}
      .flex-nowrap{flex-wrap:nowrap;}"
    `);
});

test('flex vitals', async (t) => {
  const classes = ['flex-1', 'flex-auto', 'flex-initial', 'flex-none'];

  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .flex-1{flex:1 1 0%;}
      .flex-auto{flex:1 1 auto;}
      .flex-initial{flex:0 1 auto;}
      .flex-none{flex:none;}"
    `);
});

test('flex invalid', async (t) => {
  const classes = ['flex-0', 'flex-shrink', 'flex-shrink-0', 'flex-grow-0'];

  const { css } = await t.uno.generate(classes);
  expect(css).toMatchInlineSnapshot('""');
});

test('flex shrink/grow', async (t) => {
  const autoClasses = ['grow', 'shrink'];
  const classes = Array.from({ length: 6 }, (_, index) => [`shrink-${index}`, `grow-${index}`]).flat();

  const { css } = await t.uno.generate([...classes, ...autoClasses]);
  expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .shrink,
      .shrink-1{flex-shrink:1;}
      .shrink-0{flex-shrink:0;}
      .shrink-2{flex-shrink:2;}
      .shrink-3{flex-shrink:3;}
      .shrink-4{flex-shrink:4;}
      .shrink-5{flex-shrink:5;}
      .grow,
      .grow-1{flex-grow:1;}
      .grow-0{flex-grow:0;}
      .grow-2{flex-grow:2;}
      .grow-3{flex-grow:3;}
      .grow-4{flex-grow:4;}
      .grow-5{flex-grow:5;}"
    `);

});

test('flex shrink/grow with arbitrary values', async (t) => {
  const autoClasses = ['grow', 'shrink'];
  const classes = Array.from({ length: 6 }, (_, index) => [`shrink-[${index}]`, `grow-[${index}]`]).flat();

  const { css } = await t.uno.generate([...classes, ...autoClasses]);
  expect(css).toMatchSnapshot();
});

test('flex-basis', async (t) => {
  const autoClasses = ['basis'];
  const classes = [
    'basis-1',
    'basis-2',
    'basis-4',
    'basis-8',
    'basis-16',
    'basis-32',
    'basis-48',
    'basis-64',
    'basis-1/2',
    'basis-1/5',
    'basis-1/4',
    'basis-2/5',
  ];

  const { css } = await t.uno.generate([...classes, ...autoClasses]);
  expect(css).toMatchSnapshot();
});
test('flex-basis with arbitrary values', async (t) => {
  const autoClasses = ['basis'];
  const classes = [
    'basis-[15]',
    'basis-[15rem]',
    'basis-[15px]',
    'basis-[15%]',
  ];

  const { css } = await t.uno.generate([...classes, ...autoClasses]);
  expect(css).toMatchSnapshot();
});
