import { handler as h } from '#utils';

const overflowValues = ["auto", "hidden", "visible", "scroll", "clip"];

export const overflows = [
  [
    /^overflow-(.+)$/,
    ([, v]) => (overflowValues.includes(v) ? { overflow: v } : undefined),
    {
      autocomplete: [
        `overflow-(${overflowValues.join("|")})`,
        `overflow-(x|y)-(${overflowValues.join("|")})`,
      ],
    },
  ],
  [
    /^(?:overflow)-([xy])-(.+)$/,
    ([, d, v]) =>
      (overflowValues.includes(v) ? { [`overflow-${d}`]: v } : undefined),
  ],
];

export const columns = [
  ['columns-auto', { 'columns': 'auto' }],
  
  [/^columns-([1-9]|1[0-2])$/,
    ([, d]) => ({ 'columns': h.number(d) }),
    { autocomplete: 'columns-<num>' },
  ],
  // matching arbitrary values
  [/^columns-\[(\d+)?]$/,
    ([, d]) => ({ 'columns': h.number(d) }),
    { autocomplete: 'columns-<num>' },
  ],
];
