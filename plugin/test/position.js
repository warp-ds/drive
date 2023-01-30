import { setup } from './_helpers.js'
import { theme } from '#theme'
import { describe, expect, test } from 'vitest'

setup()

describe("position", () => {
  test("check static, fixed, absolute, relative and sticky values", async (t) => {
    const classes = ["static", "fixed", "absolute", "relative", "sticky"]

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .absolute{position:absolute;}
      .fixed{position:fixed;}
      .relative{position:relative;}
      .static{position:static;}
      .sticky{position:sticky;}"
    `)
  })
})

describe('order', () => {
  test('allows values 1 to 12', async (t) => {
    const range = Array.from({ length: 12 }).map((_, i) => i + 1)
    const classes = range.map(value => `order-${value}`)

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .order-1{order:1;}
      .order-10{order:10;}
      .order-11{order:11;}
      .order-12{order:12;}
      .order-2{order:2;}
      .order-3{order:3;}
      .order-4{order:4;}
      .order-5{order:5;}
      .order-6{order:6;}
      .order-7{order:7;}
      .order-8{order:8;}
      .order-9{order:9;}"
    `)
  })

  test('ensure -first, -last and -none is allowed and that the correct value is set', async (t) => {
    const styles = {
      ["order-first"]: "-9999",
      ["order-last"]: "9999",
      ["order-none"]: "0"
    }

    const classes = Object.keys(styles)

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .order-first{order:-9999;}
      .order-last{order:9999;}
      .order-none{order:0;}"
    `)
  });

  test('order does not allow value to be 0 or above 12', async (t) => {
    const classes = ["order-0", "order-13"];

    // TODO: this throws errors since 0 and 13 isnt within the allowed bounds.
    // Make sure to catch and verify those errors being trown
    const { css } = await t.uno.generate(classes)
    expect(css).toMatchInlineSnapshot('""');
  });
})



// justifies

describe("justifies", () => {
  test('check justify- classes and their expected justify-content values', async (t) => {
    const classes = ['justify-start', 'justify-end','justify-center','justify-between', ',justify-around', 'justify-evenly']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .justify-start{justify-content:flex-start;}
      .justify-end{justify-content:flex-end;}
      .justify-center{justify-content:center;}
      .justify-between{justify-content:space-between;}
      .justify-evenly{justify-content:space-evenly;}"
    `);
  })

  test('check justify-items- classes and their expected justify-itemns values', async (t) => {
    const classes = ['justify-items-start', 'justify-items-end', 'justify-items-center', 'justify-items-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .justify-items-start{justify-items:start;}
      .justify-items-end{justify-items:end;}
      .justify-items-center{justify-items:center;}
      .justify-items-stretch{justify-items:stretch;}"
    `)
  })

  test('check justify-self- classes and their expected justify-self values', async (t) => {
    const classes = ['justify-self-auto', 'justify-self-start', 'justify-self-end', 'justify-self-center', 'justify-self-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .justify-self-auto{justify-self:auto;}
      .justify-self-start{justify-self:start;}
      .justify-self-end{justify-self:end;}
      .justify-self-center{justify-self:center;}
      .justify-self-stretch{justify-self:stretch;}"
    `);
  })
})

describe("alignments", () => {
  test('check content- classes and their expected align-content values', async (t) => {
    const classes = ['content-center', 'content-start', 'content-end', 'content-between', 'content-around', 'content-evenly']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .content-center{align-content:center;}
      .content-start{align-content:flex-start;}
      .content-end{align-content:flex-end;}
      .content-between{align-content:space-between;}
      .content-around{align-content:space-around;}
      .content-evenly{align-content:space-evenly;}"
    `);
  })

  test('check items- classes and their expected align-items values', async (t) => {
    const classes = ['items-start', 'items-end', 'items-center', 'items-baseline' ,'items-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .items-start{align-items:flex-start;}
      .items-end{align-items:flex-end;}
      .items-center{align-items:center;}
      .items-baseline{align-items:baseline;}
      .items-stretch{align-items:stretch;}"
    `);
  })

  test('check self- classes and their expected align-self values', async (t) => {
    const classes = ['self-auto', 'auto', 'self-start', 'flex-start', 'self-end', 'flex-end', 'self-center', 'center', 'self-stretch', 'stretch', 'self-baseline', 'baseline']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .self-auto{align-self:auto;}
      .self-start{align-self:flex-start;}
      .self-end{align-self:flex-end;}
      .self-center{align-self:center;}
      .self-stretch{align-self:stretch;}
      .self-baseline{align-self:baseline;}"
    `);
  })
})


// placements

describe('placements', () => {
  test('check place-content- classes and their expected place-content values', async (t) => {
    const classes = ['place-content-center', 'place-content-start', 'place-content-end', 'place-content-between', 'place-content-around', 'place-content-evenly', 'place-content-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .place-content-center{place-content:center;}
      .place-content-start{place-content:start;}
      .place-content-end{place-content:end;}
      .place-content-between{place-content:space-between;}
      .place-content-around{place-content:space-around;}
      .place-content-evenly{place-content:space-evenly;}
      .place-content-stretch{place-content:stretch;}"
    `)
  })

  test('check place-items- classes and their expected place-items values', async (t) => {
    const classes = ['place-items-start', 'place-items-end' ,'place-items-center','place-items-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .place-items-start{place-items:start;}
      .place-items-end{place-items:end;}
      .place-items-center{place-items:center;}
      .place-items-stretch{place-items:stretch;}"
    `)
  })

  test('check place-self- classes and their expected place-self values', async (t) => {
    const classes = ['place-self-auto', 'place-self-start', 'place-self-end', 'place-self-center', 'place-self-stretch']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .place-self-auto{place-self:auto;}
      .place-self-start{place-self:start;}
      .place-self-end{place-self:end;}
      .place-self-center{place-self:center;}
      .place-self-stretch{place-self:stretch;}"
    `)
  })
})


describe('insets', () => {
  test('check inset- classes and their expected values', async (t) => {
    const { spacing } = theme;
    const classes = Object.keys(spacing).map((key) => [`inset-${key}`, `inset-x-${key}`, `inset-y-${key}`]).flat();

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .inset-0{inset:0;}
      .inset-1{inset:0.1rem;}
      .inset-10{inset:1rem;}
      .inset-112{inset:11.2rem;}
      .inset-12{inset:1.2rem;}
      .inset-128{inset:12.8rem;}
      .inset-14{inset:1.4rem;}
      .inset-144{inset:14.4rem;}
      .inset-16{inset:1.6rem;}
      .inset-2{inset:0.2rem;}
      .inset-20{inset:2rem;}
      .inset-24{inset:2.4rem;}
      .inset-28{inset:2.8rem;}
      .inset-32{inset:3.2rem;}
      .inset-4{inset:0.4rem;}
      .inset-40{inset:4rem;}
      .inset-44{inset:4.4rem;}
      .inset-48{inset:4.8rem;}
      .inset-56{inset:5.6rem;}
      .inset-6{inset:0.6rem;}
      .inset-64{inset:6.4rem;}
      .inset-8{inset:0.8rem;}
      .inset-80{inset:8rem;}
      .inset-96{inset:9.6rem;}
      .inset-x-0{left:0;right:0;}
      .inset-x-1{left:0.1rem;right:0.1rem;}
      .inset-x-10{left:1rem;right:1rem;}
      .inset-x-112{left:11.2rem;right:11.2rem;}
      .inset-x-12{left:1.2rem;right:1.2rem;}
      .inset-x-128{left:12.8rem;right:12.8rem;}
      .inset-x-14{left:1.4rem;right:1.4rem;}
      .inset-x-144{left:14.4rem;right:14.4rem;}
      .inset-x-16{left:1.6rem;right:1.6rem;}
      .inset-x-2{left:0.2rem;right:0.2rem;}
      .inset-x-20{left:2rem;right:2rem;}
      .inset-x-24{left:2.4rem;right:2.4rem;}
      .inset-x-28{left:2.8rem;right:2.8rem;}
      .inset-x-32{left:3.2rem;right:3.2rem;}
      .inset-x-4{left:0.4rem;right:0.4rem;}
      .inset-x-40{left:4rem;right:4rem;}
      .inset-x-44{left:4.4rem;right:4.4rem;}
      .inset-x-48{left:4.8rem;right:4.8rem;}
      .inset-x-56{left:5.6rem;right:5.6rem;}
      .inset-x-6{left:0.6rem;right:0.6rem;}
      .inset-x-64{left:6.4rem;right:6.4rem;}
      .inset-x-8{left:0.8rem;right:0.8rem;}
      .inset-x-80{left:8rem;right:8rem;}
      .inset-x-96{left:9.6rem;right:9.6rem;}
      .inset-y-0{top:0;bottom:0;}
      .inset-y-1{top:0.1rem;bottom:0.1rem;}
      .inset-y-10{top:1rem;bottom:1rem;}
      .inset-y-112{top:11.2rem;bottom:11.2rem;}
      .inset-y-12{top:1.2rem;bottom:1.2rem;}
      .inset-y-128{top:12.8rem;bottom:12.8rem;}
      .inset-y-14{top:1.4rem;bottom:1.4rem;}
      .inset-y-144{top:14.4rem;bottom:14.4rem;}
      .inset-y-16{top:1.6rem;bottom:1.6rem;}
      .inset-y-2{top:0.2rem;bottom:0.2rem;}
      .inset-y-20{top:2rem;bottom:2rem;}
      .inset-y-24{top:2.4rem;bottom:2.4rem;}
      .inset-y-28{top:2.8rem;bottom:2.8rem;}
      .inset-y-32{top:3.2rem;bottom:3.2rem;}
      .inset-y-4{top:0.4rem;bottom:0.4rem;}
      .inset-y-40{top:4rem;bottom:4rem;}
      .inset-y-44{top:4.4rem;bottom:4.4rem;}
      .inset-y-48{top:4.8rem;bottom:4.8rem;}
      .inset-y-56{top:5.6rem;bottom:5.6rem;}
      .inset-y-6{top:0.6rem;bottom:0.6rem;}
      .inset-y-64{top:6.4rem;bottom:6.4rem;}
      .inset-y-8{top:0.8rem;bottom:0.8rem;}
      .inset-y-80{top:8rem;bottom:8rem;}
      .inset-y-96{top:9.6rem;bottom:9.6rem;}"
    `);
  })

  test('check negative -inset- classes and their expected values', async (t) => {
    const { spacing } = theme;

    const classes = Object.keys(spacing).map((key) => {
      if(spacing[key] === "0") return;

      return [`-inset-${key}`, `-inset-x-${key}`, `-inset-y-${key}`];
    }).flat();

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .-inset-1{inset:-0.1rem;}
      .-inset-10{inset:-1rem;}
      .-inset-112{inset:-11.2rem;}
      .-inset-12{inset:-1.2rem;}
      .-inset-128{inset:-12.8rem;}
      .-inset-14{inset:-1.4rem;}
      .-inset-144{inset:-14.4rem;}
      .-inset-16{inset:-1.6rem;}
      .-inset-2{inset:-0.2rem;}
      .-inset-20{inset:-2rem;}
      .-inset-24{inset:-2.4rem;}
      .-inset-28{inset:-2.8rem;}
      .-inset-32{inset:-3.2rem;}
      .-inset-4{inset:-0.4rem;}
      .-inset-40{inset:-4rem;}
      .-inset-44{inset:-4.4rem;}
      .-inset-48{inset:-4.8rem;}
      .-inset-56{inset:-5.6rem;}
      .-inset-6{inset:-0.6rem;}
      .-inset-64{inset:-6.4rem;}
      .-inset-8{inset:-0.8rem;}
      .-inset-80{inset:-8rem;}
      .-inset-96{inset:-9.6rem;}
      .-inset-x-1{left:-0.1rem;right:-0.1rem;}
      .-inset-x-10{left:-1rem;right:-1rem;}
      .-inset-x-112{left:-11.2rem;right:-11.2rem;}
      .-inset-x-12{left:-1.2rem;right:-1.2rem;}
      .-inset-x-128{left:-12.8rem;right:-12.8rem;}
      .-inset-x-14{left:-1.4rem;right:-1.4rem;}
      .-inset-x-144{left:-14.4rem;right:-14.4rem;}
      .-inset-x-16{left:-1.6rem;right:-1.6rem;}
      .-inset-x-2{left:-0.2rem;right:-0.2rem;}
      .-inset-x-20{left:-2rem;right:-2rem;}
      .-inset-x-24{left:-2.4rem;right:-2.4rem;}
      .-inset-x-28{left:-2.8rem;right:-2.8rem;}
      .-inset-x-32{left:-3.2rem;right:-3.2rem;}
      .-inset-x-4{left:-0.4rem;right:-0.4rem;}
      .-inset-x-40{left:-4rem;right:-4rem;}
      .-inset-x-44{left:-4.4rem;right:-4.4rem;}
      .-inset-x-48{left:-4.8rem;right:-4.8rem;}
      .-inset-x-56{left:-5.6rem;right:-5.6rem;}
      .-inset-x-6{left:-0.6rem;right:-0.6rem;}
      .-inset-x-64{left:-6.4rem;right:-6.4rem;}
      .-inset-x-8{left:-0.8rem;right:-0.8rem;}
      .-inset-x-80{left:-8rem;right:-8rem;}
      .-inset-x-96{left:-9.6rem;right:-9.6rem;}
      .-inset-y-1{top:-0.1rem;bottom:-0.1rem;}
      .-inset-y-10{top:-1rem;bottom:-1rem;}
      .-inset-y-112{top:-11.2rem;bottom:-11.2rem;}
      .-inset-y-12{top:-1.2rem;bottom:-1.2rem;}
      .-inset-y-128{top:-12.8rem;bottom:-12.8rem;}
      .-inset-y-14{top:-1.4rem;bottom:-1.4rem;}
      .-inset-y-144{top:-14.4rem;bottom:-14.4rem;}
      .-inset-y-16{top:-1.6rem;bottom:-1.6rem;}
      .-inset-y-2{top:-0.2rem;bottom:-0.2rem;}
      .-inset-y-20{top:-2rem;bottom:-2rem;}
      .-inset-y-24{top:-2.4rem;bottom:-2.4rem;}
      .-inset-y-28{top:-2.8rem;bottom:-2.8rem;}
      .-inset-y-32{top:-3.2rem;bottom:-3.2rem;}
      .-inset-y-4{top:-0.4rem;bottom:-0.4rem;}
      .-inset-y-40{top:-4rem;bottom:-4rem;}
      .-inset-y-44{top:-4.4rem;bottom:-4.4rem;}
      .-inset-y-48{top:-4.8rem;bottom:-4.8rem;}
      .-inset-y-56{top:-5.6rem;bottom:-5.6rem;}
      .-inset-y-6{top:-0.6rem;bottom:-0.6rem;}
      .-inset-y-64{top:-6.4rem;bottom:-6.4rem;}
      .-inset-y-8{top:-0.8rem;bottom:-0.8rem;}
      .-inset-y-80{top:-8rem;bottom:-8rem;}
      .-inset-y-96{top:-9.6rem;bottom:-9.6rem;}"
    `);
  })

  test('check top-, left-, right-, bottom- classes and their expected values', async (t) => {
    const { spacing } = theme;

    const classes = Object.keys(spacing).map((key) => [`top-${key}`, `left-${key}`, `right-${key}`, `bottom-${key}`]).flat();

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .bottom-0{bottom:0;}
      .bottom-1{bottom:0.1rem;}
      .bottom-10{bottom:1rem;}
      .bottom-112{bottom:11.2rem;}
      .bottom-12{bottom:1.2rem;}
      .bottom-128{bottom:12.8rem;}
      .bottom-14{bottom:1.4rem;}
      .bottom-144{bottom:14.4rem;}
      .bottom-16{bottom:1.6rem;}
      .bottom-2{bottom:0.2rem;}
      .bottom-20{bottom:2rem;}
      .bottom-24{bottom:2.4rem;}
      .bottom-28{bottom:2.8rem;}
      .bottom-32{bottom:3.2rem;}
      .bottom-4{bottom:0.4rem;}
      .bottom-40{bottom:4rem;}
      .bottom-44{bottom:4.4rem;}
      .bottom-48{bottom:4.8rem;}
      .bottom-56{bottom:5.6rem;}
      .bottom-6{bottom:0.6rem;}
      .bottom-64{bottom:6.4rem;}
      .bottom-8{bottom:0.8rem;}
      .bottom-80{bottom:8rem;}
      .bottom-96{bottom:9.6rem;}
      .left-0{left:0;}
      .left-1{left:0.1rem;}
      .left-10{left:1rem;}
      .left-112{left:11.2rem;}
      .left-12{left:1.2rem;}
      .left-128{left:12.8rem;}
      .left-14{left:1.4rem;}
      .left-144{left:14.4rem;}
      .left-16{left:1.6rem;}
      .left-2{left:0.2rem;}
      .left-20{left:2rem;}
      .left-24{left:2.4rem;}
      .left-28{left:2.8rem;}
      .left-32{left:3.2rem;}
      .left-4{left:0.4rem;}
      .left-40{left:4rem;}
      .left-44{left:4.4rem;}
      .left-48{left:4.8rem;}
      .left-56{left:5.6rem;}
      .left-6{left:0.6rem;}
      .left-64{left:6.4rem;}
      .left-8{left:0.8rem;}
      .left-80{left:8rem;}
      .left-96{left:9.6rem;}
      .right-0{right:0;}
      .right-1{right:0.1rem;}
      .right-10{right:1rem;}
      .right-112{right:11.2rem;}
      .right-12{right:1.2rem;}
      .right-128{right:12.8rem;}
      .right-14{right:1.4rem;}
      .right-144{right:14.4rem;}
      .right-16{right:1.6rem;}
      .right-2{right:0.2rem;}
      .right-20{right:2rem;}
      .right-24{right:2.4rem;}
      .right-28{right:2.8rem;}
      .right-32{right:3.2rem;}
      .right-4{right:0.4rem;}
      .right-40{right:4rem;}
      .right-44{right:4.4rem;}
      .right-48{right:4.8rem;}
      .right-56{right:5.6rem;}
      .right-6{right:0.6rem;}
      .right-64{right:6.4rem;}
      .right-8{right:0.8rem;}
      .right-80{right:8rem;}
      .right-96{right:9.6rem;}
      .top-0{top:0;}
      .top-1{top:0.1rem;}
      .top-10{top:1rem;}
      .top-112{top:11.2rem;}
      .top-12{top:1.2rem;}
      .top-128{top:12.8rem;}
      .top-14{top:1.4rem;}
      .top-144{top:14.4rem;}
      .top-16{top:1.6rem;}
      .top-2{top:0.2rem;}
      .top-20{top:2rem;}
      .top-24{top:2.4rem;}
      .top-28{top:2.8rem;}
      .top-32{top:3.2rem;}
      .top-4{top:0.4rem;}
      .top-40{top:4rem;}
      .top-44{top:4.4rem;}
      .top-48{top:4.8rem;}
      .top-56{top:5.6rem;}
      .top-6{top:0.6rem;}
      .top-64{top:6.4rem;}
      .top-8{top:0.8rem;}
      .top-80{top:8rem;}
      .top-96{top:9.6rem;}"
    `);
  })

  test('check negative -top-, -left-, -right-, -bottom- classes and their expected values', async (t) => {
    const { spacing } = theme;

    const classes = Object.keys(spacing).map((key) => {
      if(spacing[key] === "0") return;

      return [`-top-${key}`,`-left-${key}`,`-right-${key}`,`-bottom-${key}`]
    }).flat()

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .-bottom-1{bottom:-0.1rem;}
      .-bottom-10{bottom:-1rem;}
      .-bottom-112{bottom:-11.2rem;}
      .-bottom-12{bottom:-1.2rem;}
      .-bottom-128{bottom:-12.8rem;}
      .-bottom-14{bottom:-1.4rem;}
      .-bottom-144{bottom:-14.4rem;}
      .-bottom-16{bottom:-1.6rem;}
      .-bottom-2{bottom:-0.2rem;}
      .-bottom-20{bottom:-2rem;}
      .-bottom-24{bottom:-2.4rem;}
      .-bottom-28{bottom:-2.8rem;}
      .-bottom-32{bottom:-3.2rem;}
      .-bottom-4{bottom:-0.4rem;}
      .-bottom-40{bottom:-4rem;}
      .-bottom-44{bottom:-4.4rem;}
      .-bottom-48{bottom:-4.8rem;}
      .-bottom-56{bottom:-5.6rem;}
      .-bottom-6{bottom:-0.6rem;}
      .-bottom-64{bottom:-6.4rem;}
      .-bottom-8{bottom:-0.8rem;}
      .-bottom-80{bottom:-8rem;}
      .-bottom-96{bottom:-9.6rem;}
      .-left-1{left:-0.1rem;}
      .-left-10{left:-1rem;}
      .-left-112{left:-11.2rem;}
      .-left-12{left:-1.2rem;}
      .-left-128{left:-12.8rem;}
      .-left-14{left:-1.4rem;}
      .-left-144{left:-14.4rem;}
      .-left-16{left:-1.6rem;}
      .-left-2{left:-0.2rem;}
      .-left-20{left:-2rem;}
      .-left-24{left:-2.4rem;}
      .-left-28{left:-2.8rem;}
      .-left-32{left:-3.2rem;}
      .-left-4{left:-0.4rem;}
      .-left-40{left:-4rem;}
      .-left-44{left:-4.4rem;}
      .-left-48{left:-4.8rem;}
      .-left-56{left:-5.6rem;}
      .-left-6{left:-0.6rem;}
      .-left-64{left:-6.4rem;}
      .-left-8{left:-0.8rem;}
      .-left-80{left:-8rem;}
      .-left-96{left:-9.6rem;}
      .-right-1{right:-0.1rem;}
      .-right-10{right:-1rem;}
      .-right-112{right:-11.2rem;}
      .-right-12{right:-1.2rem;}
      .-right-128{right:-12.8rem;}
      .-right-14{right:-1.4rem;}
      .-right-144{right:-14.4rem;}
      .-right-16{right:-1.6rem;}
      .-right-2{right:-0.2rem;}
      .-right-20{right:-2rem;}
      .-right-24{right:-2.4rem;}
      .-right-28{right:-2.8rem;}
      .-right-32{right:-3.2rem;}
      .-right-4{right:-0.4rem;}
      .-right-40{right:-4rem;}
      .-right-44{right:-4.4rem;}
      .-right-48{right:-4.8rem;}
      .-right-56{right:-5.6rem;}
      .-right-6{right:-0.6rem;}
      .-right-64{right:-6.4rem;}
      .-right-8{right:-0.8rem;}
      .-right-80{right:-8rem;}
      .-right-96{right:-9.6rem;}
      .-top-1{top:-0.1rem;}
      .-top-10{top:-1rem;}
      .-top-112{top:-11.2rem;}
      .-top-12{top:-1.2rem;}
      .-top-128{top:-12.8rem;}
      .-top-14{top:-1.4rem;}
      .-top-144{top:-14.4rem;}
      .-top-16{top:-1.6rem;}
      .-top-2{top:-0.2rem;}
      .-top-20{top:-2rem;}
      .-top-24{top:-2.4rem;}
      .-top-28{top:-2.8rem;}
      .-top-32{top:-3.2rem;}
      .-top-4{top:-0.4rem;}
      .-top-40{top:-4rem;}
      .-top-44{top:-4.4rem;}
      .-top-48{top:-4.8rem;}
      .-top-56{top:-5.6rem;}
      .-top-6{top:-0.6rem;}
      .-top-64{top:-6.4rem;}
      .-top-8{top:-0.8rem;}
      .-top-80{top:-8rem;}
      .-top-96{top:-9.6rem;}"
    `);
  })
})

// floats
describe("floats", () => {
  test("check float classes and corresponding values", async (t) => {
    const classes = ["float-left", "float-right", "float-none"]

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .float-left{float:left;}
      .float-right{float:right;}
      .float-none{float:none;}"
    `)
  })

  test("check clear classes and corresponding values", async (t) => {
    const classes = ["clear-left", "clear-right", "clear-both", "clear-none"]

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .clear-left{clear:left;}
      .clear-right{clear:right;}
      .clear-both{clear:both;}
      .clear-none{clear:none;}"
    `)
  })

  test("float and clear should work with global keywords", async (t) => {
    const classes = ["float", "clear"].map(prefix => globalKeywords.map(keyword => `${prefix}-${keyword}`)).flat()

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .float-inherit{float:inherit;}
      .float-initial{float:initial;}
      .float-revert{float:revert;}
      .float-revert-layer{float:revert-layer;}
      .float-unset{float:unset;}
      .clear-inherit{clear:inherit;}
      .clear-initial{clear:initial;}
      .clear-revert{clear:revert;}
      .clear-revert-layer{clear:revert-layer;}
      .clear-unset{clear:unset;}"
    `)
  })
})

// z-index

describe("z-index", () => {
  test("check z- classes and their expected values", async (t) => {
    const validLevels = [0, 10, 20, 30, 40, 50]
    const positiveClasses = validLevels.map(i => `z-${i}`)
    const negativeClasses = validLevels.map(i => `-z-${i}`)

    const { css } = await t.uno.generate([...positiveClasses, ...negativeClasses, 'z-auto'])

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .-z-10{z-index:-10;}
      .-z-20{z-index:-20;}
      .-z-30{z-index:-30;}
      .-z-40{z-index:-40;}
      .-z-50{z-index:-50;}
      .z-0{z-index:0;}
      .z-10{z-index:10;}
      .z-20{z-index:20;}
      .z-30{z-index:30;}
      .z-40{z-index:40;}
      .z-50{z-index:50;}
      .z-auto{z-index:auto;}"
    `)
  })


  test("skip invalid classes", async (t) => {
    const classes = ['z-none', 'z-2', '-z-9999']

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot('""')
  })
})

// box-sizing

describe("box sizing", () => {
  test("check box- classes and corresponding values", async (t) => {
    const classes = ["box-border", "box-content"]

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .box-border{box-sizing:border-box;}
      .box-content{box-sizing:content-box;}"
    `)
  })

  test("box- classes should work with global keywords", async (t) => {
    const classes = ["box"].map(prefix => globalKeywords.map(keyword => `${prefix}-${keyword}`)).flat()

    const { css } = await t.uno.generate(classes)

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .box-inherit{box-sizing:inherit;}
      .box-initial{box-sizing:initial;}
      .box-revert{box-sizing:revert;}
      .box-revert-layer{box-sizing:revert-layer;}
      .box-unset{box-sizing:unset;}"
    `)
  })
})