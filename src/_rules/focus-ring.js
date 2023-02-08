// TODO: use actual variables and values when those has been defined
const focusRingStyle = {
  'outline': '2px solid var(--w-outline)',
  'outline-offset': 'var(--w-outline-offset, 1px)',
}

const focusRingInsetStyle = {
  '--w-outline-offset': '-3px',
}

export const focusRing = [
  ["focusable:focus", focusRingStyle],
  ["focusable:focus:not(:focus-visible)", { 'outline': 'none'}],
  ["focusable:focus-visible", focusRingStyle],
  ["focusable-inset", { ... focusRingInsetStyle }],
];
