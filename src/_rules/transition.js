import { globalKeywords, handler as h, makeGlobalStaticRules } from '#utils';

const easings = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
};

const transitionPropertyGroup = {
  all: 'all',
  colors: ['color', 'background-color', 'border-color', 'text-decoration-color', 'fill', 'stroke'].join(','),
  none: 'none',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
};
const transitionProperty = (prop) => h.properties(prop) ?? transitionPropertyGroup[prop];
export const transitions = [
  // transition
  [/^transition(?:-([a-z-]+(?:,[a-z-]+)*))?(?:-(\d+))?$/, ([, prop, d], { theme }) => {
    const p = prop != null
      ? transitionProperty(prop)
      : [transitionPropertyGroup.colors, 'opacity', 'box-shadow', 'transform', 'filter', 'backdrop-filter'].join(',');
    if (p) {
      const duration = theme.duration?.[d || 'DEFAULT'] ?? h.time(d || '150');
      return {
        'transition-property': p,
        'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transition-duration': duration,
      };
    }
  }, { autocomplete: `transition-(${Object.keys(transitionPropertyGroup).join('|')})` }],
  // timings
  [
    /^duration-(.+)$/,
    ([, d], { theme }) => ({ 'transition-duration': theme.duration?.[d || 'DEFAULT'] ?? h.time(d) }),
    { autocomplete: 'duration-$duration' },
  ],
  [
    /^delay-(.+)$/,
    ([, d], { theme }) => ({ 'transition-delay': theme.duration?.[d || 'DEFAULT'] ?? h.time(d) }),
    { autocomplete: 'delay-$duration' },
  ],
  [/^ease-(.+)$/,
    ([, d]) => ({ 'transition-timing-function': easings[d] }),
    { autocomplete: 'ease-(linear|in|out|in-out)' },
  ],
  // matching arbitrary values transition-timing
  [/^ease-\[(cubic-bezier\(.*\))]$/,
    ([, value]) => ({ 'transition-timing-function': value }),
  ],
  // props
  [/^transition-property-(.+)$/,
    ([, v]) => ({ 'transition-property': h.global(v) || transitionProperty(v) }),
    { autocomplete: [`transition-property-(${[...globalKeywords, ...Object.keys(transitionPropertyGroup)].join('|')})`] }],
  // none
  ['transition-none', { transition: 'none' }],
  ...makeGlobalStaticRules('transition'),
];
