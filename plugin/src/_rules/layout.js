const overflowValues = ["auto", "hidden", "visible", "scroll"];

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
      overflowValues.includes(v) ? { [`overflow-${d}`]: v } : undefined,
  ],
];
