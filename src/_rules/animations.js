import { escapeSelector } from '@unocss/core';

/*----LOADING----*/
// Very hardcoded styling for loading, not decided if it will be themeable so let's have this for now and change if applicable later
const inProgress = 'background-image:linear-gradient(135deg,rgba(0,0,0,.05) 25%,transparent 0,transparent 50%,rgba(0,0,0,.05) 0,rgba(0,0,0,.05) 75%,transparent 0,transparent) !important;background-size: 30px 30px;animation: animate-inprogress 3s linear infinite;';
const keyFrames = '@keyframes animate-inprogress {0% {background-position: 0 0;}to {background-position: 60px 0;}}';

/*----SPINNER----*/
const spinner = '--spinner-size: 24px;height: var(--spinner-size);width: var(--spinner-size);border-radius: 50%;border: calc(var(--spinner-size) / 8) solid rgba(var(--w-s-rgb-border-primary-subtle),.5);border-top-color: var(--w-s-color-border-primary);position: relative;animation: animate-spinner 0.75s infinite linear;';
const spinnerPseudo = `content: ' ';height: calc(var(--spinner-size) / 8);width: calc(var(--spinner-size) / 8);border-radius: 50%;position: absolute;top: calc(var(--spinner-size) / 180);`;
const spinnerBefore = 'left:0;';
const spinnerAfter = 'right:0;';
const spinnerKeyframes = '@keyframes animate-spinner {to{transform:rotate(359deg);}}';

export const animations = [
  [
    /^animate-inprogress$/,
    ([_selector]) => {
      const selector = escapeSelector(_selector);
      const base = `.${selector}{${inProgress}}`;
      return base + keyFrames;
    },
  ],
  [
    /^animate-spinner$/,
    ([_selector]) => {
      const selector = escapeSelector(_selector);
      const baseSpinner = `.${selector}{${spinner}}`;
      const pseudo = `.${selector}::before,.${selector}::after{${spinnerPseudo}}`;
      const pseudoAfter = `.${selector}::after{${spinnerAfter}}`;
      const pseudoBefore = `.${selector}::before{${spinnerBefore}}`;
      return baseSpinner + pseudo + pseudoAfter + pseudoBefore + spinnerKeyframes;
    },
  ],
];
