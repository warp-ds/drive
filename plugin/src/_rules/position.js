import { handler as h, insetMap } from '#utils';

function handleInsetValue(v, { theme }) {
    return theme.spacing?.[v] ?? h.fraction.auto(v); // TODO: warn if no value
}
function handleInsetValues([, d, v], ctx) {
    const r = handleInsetValue(v, ctx);
    if (r != null && d in insetMap)
        return insetMap[d].map(i => [i.slice(1), r]);
}
export const insets = [
    [/^inset-(.+)$/, ([, v], ctx) => ({ inset: handleInsetValue(v, ctx) }),
        {
            autocomplete: [
                '(inset-$spacing',
                '(inset-<direction>-$spacing',
                '(top|left|right|bottom)-$spacing',
            ],
        },
    ],
    [/^inset-([xy])-(.+)$/, handleInsetValues],
    [/^(top|left|right|bottom)-(.+)$/, ([, d, v], ctx) => ({ [d]: handleInsetValue(v, ctx) })],
];
