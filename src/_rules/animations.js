import { escapeSelector } from '@unocss/core';

// Very hardcoded styling for loading, not decided if it will be themable so let's have this for now and change if applicable later
const inProgress = 'background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.05) 25%,transparent 0,transparent 50%,rgba(0, 0, 0, 0.05) 0,rgba(0, 0, 0, 0.05) 75%,transparent 0,transparent) !important;animation: animate-inprogress 3s linear infinite;';
const keyFrames = '@keyframes animate-inprogress {0% {background-position: 0 0;}to {background-position: 60px 0;}}';

export const animations = [
  [/^animate-inprogress$/, ([_selector]) => {
    const selector = escapeSelector(_selector);
    const base = `.${selector}{${inProgress}}`;
    return base + keyFrames;
  }],
];