import { handler as h } from '#utils';

const directions = {
    '': '',
    'x': 'column-',
    'y': 'row-',
};

const handleGap = ([, d = '', s], { theme }) => {
    const v = theme.spacing?.[s] ?? h.bracket.cssvar.global.rem(s);
    if (v != null) {
        return {
            [`${directions[d]}gap`]: v,
        };
    }
};

export const gap = [
    [/^gap-?()(\d+)$/, handleGap, { autocomplete: ['gap-$spacing', 'gap-<num>'] }],
    [/^gap-([xy])-?(\d+)$/, handleGap, { autocomplete: ['gap-(x|y)-$spacing', 'gap-(x|y)-<num>'] }],
];

