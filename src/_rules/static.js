import { globalKeywords, handler as h, makeGlobalStaticRules, positionMap } from '#utils';

export const appearances = [
  ['visible', { visibility: 'visible' }],
  ['invisible', { visibility: 'hidden' }],
  ['backface-visible', { 'backface-visibility': 'visible' }],
  ['backface-hidden', { 'backface-visibility': 'hidden' }],
  ...makeGlobalStaticRules('backface', 'backface-visibility'),
];

const cursorValues = [
  'auto',
  'default',
  'none',
  'context-menu',
  'help',
  'pointer',
  'progress',
  'wait',
  'cell',
  'crosshair',
  'text',
  'vertical-text',
  'alias',
  'copy',
  'move',
  'no-drop',
  'not-allowed',
  'grab',
  'grabbing',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
];
export const cursors = [
  [/^cursor-(.+)$/, ([, c]) => ({ cursor: h.global(c) })],
  ...cursorValues.map((v) => [`cursor-${v}`, { cursor: v }]),
];

export const pointerEvents = [
  ['pointer-events-auto', { 'pointer-events': 'auto' }],
  ['pointer-events-none', { 'pointer-events': 'none' }],
  ...makeGlobalStaticRules('pointer-events'),
];

export const resizes = [
  ['resize-x', { resize: 'horizontal' }],
  ['resize-y', { resize: 'vertical' }],
  ['resize', { resize: 'both' }],
  ['resize-none', { resize: 'none' }],
  ...makeGlobalStaticRules('resize'),
];

export const userSelects = [
  ['select-auto', { 'user-select': 'auto' }],
  ['select-all', { 'user-select': 'all' }],
  ['select-text', { 'user-select': 'text' }],
  ['select-none', { 'user-select': 'none' }],
  ...makeGlobalStaticRules('select', 'user-select'),
];

export const whitespaces = [
  [
    /^whitespace-([-\w]+)$/,
    ([, v]) =>
      ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces', ...globalKeywords].includes(v) ? { 'white-space': v } : undefined,
    { autocomplete: 'whitespace-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)' },
  ],
];

// this is left flexible intentionally
export const contents = [
  [/^content-(.+)$/, ([, v]) => ({ content: h.bracket.cssvar(v) })],
  ['content-empty', { content: '""' }],
  ['content-none', { content: 'none' }],
];

export const hyphens = [
  ...['manual', 'auto', 'none', ...globalKeywords].map((keyword) => [
    `hyphens-${keyword}`,
    {
      '-webkit-hyphens': keyword,
      '-ms-hyphens': keyword,
      hyphens: keyword,
    },
  ]),
];

export const breaks = [
  ['break-normal', { 'overflow-wrap': 'normal', 'word-break': 'normal' }],
  ['break-words', { 'overflow-wrap': 'break-word' }],
  ['break-all', { 'word-break': 'break-all' }],
  ['break-keep', { 'word-break': 'keep-all' }],
  ['break-inside-auto', { 'break-inside': 'auto' }],
  ['break-inside-avoid', { 'break-inside': 'avoid' }],
  ['break-inside-avoid-page', { 'break-inside': 'avoid-page' }],
  ['break-inside-avoid-column', { 'break-inside': 'avoid-column' }],
  ['break-before-auto', { 'break-before': 'auto' }],
  ['break-before-avoid', { 'break-before': 'avoid' }],
  ['break-before-all', { 'break-before': 'all' }],
  ['break-before-avoid-page', { 'break-before': 'avoid-page' }],
  ['break-before-page', { 'break-before': 'page' }],
  ['break-before-left', { 'break-before': 'left' }],
  ['break-before-right', { 'break-before': 'right' }],
  ['break-before-column', { 'break-before': 'column' }],
  ['break-after-auto', { 'break-after': 'auto' }],
  ['break-after-avoid', { 'break-after': 'avoid' }],
  ['break-after-all', { 'break-after': 'all' }],
  ['break-after-avoid-page', { 'break-after': 'avoid-page' }],
  ['break-after-page', { 'break-after': 'page' }],
  ['break-after-left', { 'break-after': 'left' }],
  ['break-after-right', { 'break-after': 'right' }],
  ['break-after-column', { 'break-after': 'column' }],
];

export const textOverflows = [
  ['truncate', { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
  ['text-ellipsis', { 'text-overflow': 'ellipsis' }],
  ['text-clip', { 'text-overflow': 'clip' }],
];

export const textTransforms = [
  ['uppercase', { 'text-transform': 'uppercase' }],
  ['lowercase', { 'text-transform': 'lowercase' }],
  ['capitalize', { 'text-transform': 'capitalize' }],
  ['normal-case', { 'text-transform': 'none' }],
];

export const fontStyles = [
  ['italic', { 'font-style': 'italic' }],
  ['not-italic', { 'font-style': 'normal' }],
];

export const fontWeight = [
  ['font-bold', { 'font-weight': 700 }],
  ['font-normal', { 'font-weight': 400 }],
];

export const fontSmoothings = [
  ['antialiased', { '-webkit-font-smoothing': 'antialiased', '-moz-osx-font-smoothing': 'grayscale', 'font-smoothing': 'grayscale' }],
  ['subpixel-antialiased', { '-webkit-font-smoothing': 'auto', '-moz-osx-font-smoothing': 'auto', 'font-smoothing': 'auto' }],
];

export const screenReadersAccess = [
  [
    'sr-only',
    {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      'white-space': 'nowrap',
      'border-width': 0,
    },
  ],
  [
    'not-sr-only',
    {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '0',
      margin: '0',
      overflow: 'visible',
      clip: 'auto',
      'white-space': 'normal',
    },
  ],
];

export const isolations = [
  ['isolate', { isolation: 'isolate' }],
  ['isolation-auto', { isolation: 'auto' }],
];

export const objectPositions = [
  // object fit
  ['object-cover', { 'object-fit': 'cover' }],
  ['object-contain', { 'object-fit': 'contain' }],
  ['object-fill', { 'object-fit': 'fill' }],
  ['object-scale-down', { 'object-fit': 'scale-down' }],
  ['object-none', { 'object-fit': 'none' }],

  // object position
  [
    /^object-(.+)$/,
    ([, d]) => {
      if (positionMap[d]) return { 'object-position': positionMap[d] };
    },
    { autocomplete: `object-(${Object.keys(positionMap).join('|')})` },
  ],
];

export const backgroundBlendModes = [
  ['bg-blend-multiply', { 'background-blend-mode': 'multiply' }],
  ['bg-blend-screen', { 'background-blend-mode': 'screen' }],
  ['bg-blend-overlay', { 'background-blend-mode': 'overlay' }],
  ['bg-blend-darken', { 'background-blend-mode': 'darken' }],
  ['bg-blend-lighten', { 'background-blend-mode': 'lighten' }],
  ['bg-blend-color-dodge', { 'background-blend-mode': 'color-dodge' }],
  ['bg-blend-color-burn', { 'background-blend-mode': 'color-burn' }],
  ['bg-blend-hard-light', { 'background-blend-mode': 'hard-light' }],
  ['bg-blend-soft-light', { 'background-blend-mode': 'soft-light' }],
  ['bg-blend-difference', { 'background-blend-mode': 'difference' }],
  ['bg-blend-exclusion', { 'background-blend-mode': 'exclusion' }],
  ['bg-blend-hue', { 'background-blend-mode': 'hue' }],
  ['bg-blend-saturation', { 'background-blend-mode': 'saturation' }],
  ['bg-blend-color', { 'background-blend-mode': 'color' }],
  ['bg-blend-luminosity', { 'background-blend-mode': 'luminosity' }],
  ['bg-blend-normal', { 'background-blend-mode': 'normal' }],
  ...makeGlobalStaticRules('bg-blend', 'background-blend'),
];

export const mixBlendModes = [
  ['mix-blend-multiply', { 'mix-blend-mode': 'multiply' }],
  ['mix-blend-screen', { 'mix-blend-mode': 'screen' }],
  ['mix-blend-overlay', { 'mix-blend-mode': 'overlay' }],
  ['mix-blend-darken', { 'mix-blend-mode': 'darken' }],
  ['mix-blend-lighten', { 'mix-blend-mode': 'lighten' }],
  ['mix-blend-color-dodge', { 'mix-blend-mode': 'color-dodge' }],
  ['mix-blend-color-burn', { 'mix-blend-mode': 'color-burn' }],
  ['mix-blend-hard-light', { 'mix-blend-mode': 'hard-light' }],
  ['mix-blend-soft-light', { 'mix-blend-mode': 'soft-light' }],
  ['mix-blend-difference', { 'mix-blend-mode': 'difference' }],
  ['mix-blend-exclusion', { 'mix-blend-mode': 'exclusion' }],
  ['mix-blend-hue', { 'mix-blend-mode': 'hue' }],
  ['mix-blend-saturation', { 'mix-blend-mode': 'saturation' }],
  ['mix-blend-color', { 'mix-blend-mode': 'color' }],
  ['mix-blend-luminosity', { 'mix-blend-mode': 'luminosity' }],
  ['mix-blend-plus-lighter', { 'mix-blend-mode': 'plus-lighter' }],
  ['mix-blend-normal', { 'mix-blend-mode': 'normal' }],
  ...makeGlobalStaticRules('mix-blend'),
];

export const touchAction = [
  ['touch-auto', { 'touch-action': 'auto' }],
  ['touch-none', { 'touch-action': 'none' }],
  ['touch-pan-x', { 'touch-action': 'pan-x' }],
  ['touch-pan-y', { 'touch-action': 'pan-y' }],
  ['touch-pan-left', { 'touch-action': 'pan-left' }],
  ['touch-pan-right', { 'touch-action': 'pan-right' }],
  ['touch-pan-up', { 'touch-action': 'pan-up' }],
  ['touch-pan-down', { 'touch-action': 'pan-down' }],
  ['touch-pinch-zoom', { 'touch-action': 'pinch-zoom' }],
  ['touch-manipulation', { 'touch-action': 'manipulation' }],
];

export const safeArea = [
  ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom, 0px)' }],
  ['mb-safe', { 'margin-bottom': 'env(safe-area-inset-bottom, 0px)' }],
  [/^pb-safe-\[([\d]+)]$/, ([, d]) => ({ 'padding-bottom': `calc(${d}px + env(safe-area-inset-bottom, 0px))` })],
];
