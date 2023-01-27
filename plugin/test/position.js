import { setup } from './_helpers.js'
import { theme } from '#theme'
import { assert, test } from 'vitest'

setup()

// order

test('order allows values 1 to 12', async (t) => {
  const range = Array.from({ length: 12 }).map((_, i) => i + 1)

  const classes = range.map(value => `order-${value}`)

  const { css } = await t.uno.generate(classes)

  range.map((value) => {
    assert.include(css, `order:${value}`)
  })
})

test('ensure order-first, -last and -none is allowed and that the correct value is set', async (t) => {
  const styles = {
    ["order-first"]: "-9999",
    ["order-last"]: "9999",
    ["order-none"]: "0"
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.map((key) => {
    assert.include(css, `order:${styles[key]}`)
  })
});

test('order does not allow value to be 0 or above 12', async (t) => {
  const classes = ["order-0", "order-13"];

  // TODO: this throws errors since 0 and 13 isnt within the allowed bounds.
  // Make sure to catch and verify those errors being trown
  const { css } = await t.uno.generate(classes)

  assert.notInclude(css, "order:0")
  assert.notInclude(css, "order:13")
});


// justifies

test('check justify- classes and their expected justify-content values', async (t) => {
  const styles = {
    ['justify-start']: 'flex-start',
    ['justify-end']: 'flex-end',
    ['justify-center']: 'center',
    ['justify-between']: 'space-between',
    ['justify-around']: 'space-around',
    ['justify-evenly']: 'space-evenly',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.map((key) => {
    assert.include(css, `justify-content:${styles[key]}`)
  })
})

test('check justify-items- classes and their expected justify-itemns values', async (t) => {
  const styles = {
    ['justify-items-start']: 'start',
    ['justify-items-end']: 'end',
    ['justify-items-center']: 'center',
    ['justify-items-stretch']: 'stretch',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `justify-items:${styles[key]}`)
  })
})

test('check justify-self- classes and their expected justify-self values', async (t) => {
  const styles = {
    ['justify-self-auto']: 'auto',
    ['justify-self-start']: 'start',
    ['justify-self-end']: 'end',
    ['justify-self-center']: 'center',
    ['justify-self-stretch']: 'stretch'
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `justify-self:${styles[key]}`)
  })
})

// alignments

test('check content- classes and their expected align-content values', async (t) => {
  const styles = {
    ['content-center']: 'center',
    ['content-start']: 'flex-start',
    ['content-end']: 'flex-end',
    ['content-between']: 'space-between',
    ['content-around']: 'space-around',
    ['content-evenly']: 'space-evenly',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `align-content:${styles[key]}`)
  })
})

test('check items- classes and their expected align-items values', async (t) => {
  const styles = {
    ['items-start']: 'flex-start',
    ['items-end']: 'flex-end',
    ['items-center']: 'center',
    ['items-baseline']: 'baseline',
    ['items-stretch']: 'stretch',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `align-items:${styles[key]}`)
  })
})

test('check self- classes and their expected align-self values', async (t) => {
  const styles = {
    ['self-auto']: 'auto',
    ['self-start']: 'flex-start',
    ['self-end']: 'flex-end',
    ['self-center']: 'center',
    ['self-stretch']: 'stretch',
    ['self-baseline']: 'baseline',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `align-self:${styles[key]}`)
  })
})

// placements

test('check place-content- classes and their expected place-content values', async (t) => {
  const styles = {
    ['place-content-center']: 'center',
    ['place-content-start']: 'start',
    ['place-content-end']: 'end',
    ['place-content-between']: 'space-between',
    ['place-content-around']: 'space-around',
    ['place-content-evenly']: 'space-evenly',
    ['place-content-stretch']: 'stretch',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `place-content:${styles[key]}`)
  })
})

test('check place-items- classes and their expected place-items values', async (t) => {
  const styles = {
    ['place-items-start']: 'start',
    ['place-items-end']: 'end',
    ['place-items-center']: 'center',
    ['place-items-stretch']: 'stretch',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `place-items:${styles[key]}`)
  })
})

test('check place-self- classes and their expected place-self values', async (t) => {
  const styles = {
    ['place-self-auto']: 'auto',
    ['place-self-start']: 'start',
    ['place-self-end']: 'end',
    ['place-self-center']: 'center',
    ['place-self-stretch']: 'stretch',
  }

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, `place-self:${styles[key]}`)
  })
})

// insets

test('check inset- classes and their expected values', async (t) => {
  const { spacing } = theme;
  const styles = Object.keys(spacing).map((key) => {
    return {
      [`inset-${key}`]: `inset:${spacing[key]};`,
      [`inset-x-${key}`]: `left:${spacing[key]};right:${spacing[key]};`,
      [`inset-y-${key}`]: `top:${spacing[key]};bottom:${spacing[key]};`,
    }
  }).reduce((acc = {}, value) => {
    return { ...acc, ...value}
  })

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, styles[key])
  })
})

test('check negative -inset- classes and their expected values', async (t) => {
  const { spacing } = theme;

  const styles = Object.keys(spacing).map((key) => {
    if(spacing[key] === "0") return;

    return {
      [`-inset-${key}`]: `inset:-${spacing[key]};`,
      [`-inset-x-${key}`]: `left:-${spacing[key]};right:-${spacing[key]};`,
      [`-inset-y-${key}`]: `top:-${spacing[key]};bottom:-${spacing[key]};`,
    }
  }).reduce((acc = {}, value) => {
    return { ...acc, ...value}
  })

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, styles[key])
  })
})

test('check top-, left-, right-, bottom- classes and their expected values', async (t) => {
  const { spacing } = theme;

  const styles = Object.keys(spacing).map((key) => {
    return {
      [`top-${key}`]: `top:${spacing[key]};`,
      [`left-${key}`]: `left:${spacing[key]};`,
      [`right-${key}`]: `right:${spacing[key]};`,
      [`bottom-${key}`]: `bottom:${spacing[key]};`,
    }
  }).reduce((acc = {}, value) => {
    return { ...acc, ...value}
  })

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, styles[key])
  })
})

test('check negative -top-, -left-, -right-, -bottom- classes and their expected values', async (t) => {
  const { spacing } = theme;

  const styles = Object.keys(spacing).map((key) => {
    if(spacing[key] === "0") return;

    return {
      [`-top-${key}`]: `top:-${spacing[key]};`,
      [`-left-${key}`]: `left:-${spacing[key]};`,
      [`-right-${key}`]: `right:-${spacing[key]};`,
      [`-bottom-${key}`]: `bottom:-${spacing[key]};`,
    }
  }).reduce((acc = {}, value) => {
    return { ...acc, ...value}
  })

  const classes = Object.keys(styles)

  const { css } = await t.uno.generate(classes)

  classes.forEach((key) => {
    assert.include(css, styles[key])
  })
})
