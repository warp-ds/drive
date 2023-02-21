import { createGenerator } from '@unocss/core';
import { presetWarp } from '#plugin';

const options = {};
const cliClasses = [];

process.argv.slice(2).map(t => {
  if (t.startsWith('--')) {
    const option = t.replace('--', '');
    options[option] = true;
  } else {
    cliClasses.push(t);
  }
});

const uno = createGenerator({ presets: [presetWarp(options)] });
const devClasses = ['m-16!', 'opacity-50'];
const classes = cliClasses.length ? cliClasses : devClasses;
const result = await uno.generate(classes);
console.log(result.css);
