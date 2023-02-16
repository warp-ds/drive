import { handler as h, makeGlobalStaticRules, positionMap, xyzMap } from '#utils';

const transformValues = [
  'translate',
  'rotate',
  'scale',
];

const transformCpu = [
  'translateX(var(--w-translate-x))',
  'translateY(var(--w-translate-y))',
  'translateZ(var(--w-translate-z))',
  'rotate(var(--w-rotate))',
  'rotateX(var(--w-rotate-x))',
  'rotateY(var(--w-rotate-y))',
  'rotateZ(var(--w-rotate-z))',
  'skewX(var(--w-skew-x))',
  'skewY(var(--w-skew-y))',
  'scaleX(var(--w-scale-x))',
  'scaleY(var(--w-scale-y))',
  'scaleZ(var(--w-scale-z))',
].join(' ');

const transformGpu = [
  'translate3d(var(--w-translate-x), var(--w-translate-y), var(--w-translate-z))',
  'rotate(var(--w-rotate))',
  'rotateX(var(--w-rotate-x))',
  'rotateY(var(--w-rotate-y))',
  'rotateZ(var(--w-rotate-z))',
  'skewX(var(--w-skew-x))',
  'skewY(var(--w-skew-y))',
  'scaleX(var(--w-scale-x))',
  'scaleY(var(--w-scale-y))',
  'scaleZ(var(--w-scale-z))',
].join(' ');

export const transforms = [
  // origins
  [
    /^origin-(.+)$/,
    ([, s]) => ({ 'transform-origin': positionMap[s] }),
    { autocomplete: [`origin-(${Object.keys(positionMap).join('|')})`, `origin-(${Object.keys(positionMap).join('|')})`] },
  ],
  // modifiers
  [/^translate-([xyz])-(.+)$/, handleTranslate],
  [/^rotate-()(.+)$/, handleRotate],
  [/^rotate-([xyz])-(.+)$/, handleRotate],
  [/^scale-()(.+)$/, handleScale],
  [/^scale-([xyz])-(.+)$/, handleScale, { autocomplete: [`(${transformValues.join('|')})-<percent>`, `(${transformValues.join('|')})-(x|y|z)-<percent>`] }],
  [/^skew-([xy])-(.+)$/, handleSkew, { autocomplete: ['skew-(x|y)-<percent>'] }],
  // style
  [/^(?:transform-)?preserve-3d$/, () => ({ 'transform-style': 'preserve-3d' })],
  [/^(?:transform-)?preserve-flat$/, () => ({ 'transform-style': 'flat' })],
  // base
  ['transform', { transform: transformCpu }],
  ['transform-cpu', { transform: transformCpu }],
  ['transform-gpu', { transform: transformGpu }],
  ['transform-none', { transform: 'none' }],
  ...makeGlobalStaticRules('transform'),
];

function handleTranslate([, d, b], { theme }) {
  const v = theme.spacing?.[b] ?? h.fraction(b);
  if (v != null) {
    return [
      ...xyzMap[d].map((i) => [`--w-translate${i}`, v]),
      ['transform', transformCpu],
    ];
  }
}
function handleScale([, d, b]) {
  const v = h.fraction.percent(b);
  if (v != null) {
    return [
      ...xyzMap[d].map((i) => [`--w-scale${i}`, v]),
      ['transform', transformCpu],
    ];
  }
}
function handleRotate([, d = '', b]) {
  const v = h.degree(b);
  if (v != null) {
    if (d) {
      return {
        '--w-rotate': 0,
        [`--w-rotate-${d}`]: v,
        'transform': transformCpu,
      };
    } else {
      return {
        '--w-rotate-x': 0,
        '--w-rotate-y': 0,
        '--w-rotate-z': 0,
        '--w-rotate': v,
        'transform': transformCpu,
      };
    }
  }
}
function handleSkew([, d, b]) {
  const v = h.degree(b);
  if (v != null) {
    return {
      [`--w-skew-${d}`]: v,
      transform: transformCpu,
    };
  }
}
