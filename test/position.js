import { setup } from './_helpers.js';
import { spaceBase } from '#theme';
import { globalKeywords } from "#utils";
import { describe, expect, test } from 'vitest';

setup();

describe("position", () => {
  test("check static, fixed, absolute, relative and sticky values", async (t) => {
    const classes = ["static", "fixed", "absolute", "relative", "sticky"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

describe('order', () => {
  test('allows values 1 to 12', async (t) => {
    const range = Array.from({ length: 12 }).map((_, i) => i + 1);
    const classes = range.map(value => `order-${value}`);

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('ensure -first, -last and -none is allowed and that the correct value is set', async (t) => {
    const styles = {
      ["order-first"]: "-9999",
      ["order-last"]: "9999",
      ["order-none"]: "0",
    };

    const classes = Object.keys(styles);

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('order does not allow value to be 0 or above 12', async (t) => {
    const classes = ["order-0", "order-13"];

    // TODO: this throws errors since 0 and 13 isnt within the allowed bounds.
    // Make sure to catch and verify those errors being trown
    const { css } = await t.uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
  });
});


// justifies

describe("justifies", () => {
  test('check justify- classes and their expected justify-content values', async (t) => {
    const classes = ['justify-start', 'justify-end','justify-center','justify-between', ',justify-around', 'justify-evenly'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check justify-items- classes and their expected justify-itemns values', async (t) => {
    const classes = ['justify-items-start', 'justify-items-end', 'justify-items-center', 'justify-items-stretch'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check justify-self- classes and their expected justify-self values', async (t) => {
    const classes = ['justify-self-auto', 'justify-self-start', 'justify-self-end', 'justify-self-center', 'justify-self-stretch'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

describe("alignments", () => {
  test('check content- classes and their expected align-content values', async (t) => {
    const classes = ['content-center', 'content-start', 'content-end', 'content-between', 'content-around', 'content-evenly'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check items- classes and their expected align-items values', async (t) => {
    const classes = ['items-start', 'items-end', 'items-center', 'items-baseline' ,'items-stretch'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check self- classes and their expected align-self values', async (t) => {
    const classes = ['self-auto', 'auto', 'self-start', 'flex-start', 'self-end', 'flex-end', 'self-center', 'center', 'self-stretch', 'stretch', 'self-baseline', 'baseline'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});


// placements

describe('placements', () => {
  test('check place-content- classes and their expected place-content values', async (t) => {
    const classes = ['place-content-center', 'place-content-start', 'place-content-end', 'place-content-between', 'place-content-around', 'place-content-evenly', 'place-content-stretch', 'place-content-baseline'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check place-items- classes and their expected place-items values', async (t) => {
    const classes = ['place-items-start', 'place-items-end' ,'place-items-center','place-items-stretch'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check place-self- classes and their expected place-self values', async (t) => {
    const classes = ['place-self-auto', 'place-self-start', 'place-self-end', 'place-self-center', 'place-self-stretch'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

describe("global keywords", () => {

  test('justify, alignments and placements should work with global keywords', async ({ uno }) => {
    const classes = ["justify", "justify-items", "justify-self", "content", "items", "self", "place-content", "place-items", "place-self"]
      .map(prefix => globalKeywords.map(keyword => `${prefix}-${keyword}`)).flat();

    const { css } = await uno.generate(classes);
    expect(css).toMatchSnapshot();
  });
});


describe('insets', () => {
  test('check inset- classes and their expected values', async (t) => {
    const classes = spaceBase.map(n => ([`inset-${n}`, `inset-x-${n}`, `inset-y-${n}`])).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check negative -inset- classes and their expected values', async (t) => {
    const classes = spaceBase.map((n) => ([`-inset-${n}`, `-inset-x-${n}`, `-inset-y-${n}`])).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check top-, left-, right-, bottom- classes and their expected values', async (t) => {
    const classes = spaceBase.map((n) => ([`top-${n}`, `left-${n}`, `right-${n}`, `bottom-${n}`])).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test('check negative -top-, -left-, -right-, -bottom- classes and their expected values', async (t) => {
    const classes = spaceBase.map((n) => ([`-top-${n}`,`-left-${n}`,`-right-${n}`,`-bottom-${n}`])).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

// floats
describe("floats", () => {
  test("check float classes and corresponding values", async (t) => {
    const classes = ["float-left", "float-right", "float-none"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("check clear classes and corresponding values", async (t) => {
    const classes = ["clear-left", "clear-right", "clear-both", "clear-none"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("float and clear should work with global keywords", async (t) => {
    const classes = ["float", "clear"].map(prefix => globalKeywords.map(keyword => `${prefix}-${keyword}`)).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});

// z-index

describe("z-index", () => {
  test("check z- classes and their expected values", async (t) => {
    const validLevels = [0, 10, 20, 30, 40, 50];
    const positiveClasses = validLevels.map(i => `z-${i}`);
    const negativeClasses = validLevels.map(i => `-z-${i}`);

    const { css } = await t.uno.generate([...positiveClasses, ...negativeClasses, 'z-auto']);

    expect(css).toMatchSnapshot();
  });


  test("skip invalid classes", async (t) => {
    const classes = ['z-none', 'z-2', '-z-9999'];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
  });
});

// box-sizing

describe("box sizing", () => {
  test("check box- classes and corresponding values", async (t) => {
    const classes = ["box-border", "box-content"];

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });

  test("box- classes should work with global keywords", async (t) => {
    const classes = ["box"].map(prefix => globalKeywords.map(keyword => `${prefix}-${keyword}`)).flat();

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchSnapshot();
  });
});
