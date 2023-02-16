import { escapeSelector } from '@unocss/core';
import { globalKeywords } from '../mappings.js';
import { numberRE, numberWithUnitRE, unitOnlyRE } from './regex.js';
// Not all, but covers most high frequency attributes
const cssProps = [
    // basic props
    'color', 'border-color', 'background-color', 'flex-grow', 'flex', 'flex-shrink',
    'caret-color', 'font', 'gap', 'opacity', 'visibility', 'z-index', 'font-weight',
    'zoom', 'text-shadow', 'transform', 'box-shadow',
    // positions
    'background-position', 'left', 'right', 'top', 'bottom', 'object-position',
    // sizes
    'max-height', 'min-height', 'max-width', 'min-width', 'height', 'width',
    'border-width', 'margin', 'padding', 'outline-width', 'outline-offset',
    'font-size', 'line-height', 'text-indent', 'vertical-align',
    'border-spacing', 'letter-spacing', 'word-spacing',
    // enhances
    'stroke', 'filter', 'backdrop-filter', 'fill', 'mask', 'mask-size', 'mask-border', 'clip-path', 'clip',
    'border-radius',
];
function round(n) {
    return n.toFixed(10).replace(/\.0+$/, '').replace(/(\.\d+?)0+$/, '$1');
}
export function numberWithUnit(str) {
    const match = str.match(numberWithUnitRE);
    if (!match)
        return;
    const [, n, unit] = match;
    const num = parseFloat(n);
    if (unit && !Number.isNaN(num))
        return `${round(num)}${unit}`;
}
export function auto(str) {
    if (str === 'auto' || str === 'a')
        return 'auto';
}
export function rem(str) {
    if (str.match(unitOnlyRE))
        return `1${str}`;
    const match = str.match(numberWithUnitRE);
    if (!match)
        return;
    const [, n, unit] = match;
    const num = parseFloat(n);
    if (!Number.isNaN(num))
        return unit ? `${round(num)}${unit}` : `${round(num / 10)}rem`;
}
export function px(str) {
    if (str.match(unitOnlyRE))
        return `1${str}`;
    const match = str.match(numberWithUnitRE);
    if (!match)
        return;
    const [, n, unit] = match;
    const num = parseFloat(n);
    if (!Number.isNaN(num))
        return unit ? `${round(num)}${unit}` : `${round(num)}px`;
}
export function number(str) {
    if (!numberRE.test(str))
        return;
    const num = parseFloat(str);
    if (!Number.isNaN(num))
        return round(num);
}
export function percent(str) {
    if (str.endsWith('%'))
        str = str.slice(0, -1);
    const num = parseFloat(str);
    if (!Number.isNaN(num))
        return `${round(num / 100)}`;
}
export function inverseFraction(str) {
    if (str === 'full')
        return '100%';
    const [left, right] = str.split('/');
    const num = parseFloat(right) / parseFloat(left);
    if (!Number.isNaN(num))
        return `${round(num * 100)}%`;
}
export function fraction(str) {
    if (str === 'full')
        return '100%';
    const [left, right] = str.split('/');
    const num = parseFloat(left) / parseFloat(right);
    if (!Number.isNaN(num))
        return `${round(num * 100)}%`;
}
const bracketTypeRe = /^\[(color|length|position|quoted|string):/i;
function bracketWithType(str, requiredType) {
    if (str && str.startsWith('[') && str.endsWith(']')) {
        let base;
        let hintedType;
        const match = str.match(bracketTypeRe);
        if (!match) {
            base = str.slice(1, -1);
        }
        else {
            if (!requiredType)
                hintedType = match[1];
            base = str.slice(match[0].length, -1);
        }
        if (!base)
            return;
        let curly = 0;
        for (const i of base) {
            if (i === '[') {
                curly += 1;
            }
            else if (i === ']') {
                curly -= 1;
                if (curly < 0)
                    return;
            }
        }
        if (curly)
            return;
        switch (hintedType) {
            case 'string': return base
                .replace(/(^|[^\\])_/g, '$1 ')
                .replace(/\\_/g, '_');
            case 'quoted': return base
                .replace(/(^|[^\\])_/g, '$1 ')
                .replace(/\\_/g, '_')
                .replace(/(["\\])/g, '\\$1')
                .replace(/^(.+)$/, '"$1"');
        }
        return base
            .replace(/(url\(.*?\))/g, v => v.replace(/_/g, '\\_'))
            .replace(/(^|[^\\])_/g, '$1 ')
            .replace(/\\_/g, '_')
            .replace(/(?:calc|clamp|max|min)\((.*)/g, (v) => {
            return v.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, '$1 $2 ');
        });
    }
}
export function bracket(str) {
    return bracketWithType(str);
}
export function bracketOfColor(str) {
    return bracketWithType(str, 'color');
}
export function bracketOfLength(str) {
    return bracketWithType(str, 'length');
}
export function bracketOfPosition(str) {
    return bracketWithType(str, 'position');
}
export function warpToken(str) {
    if (str.match(/^\$\S/))
        return `var(--w-${escapeSelector(str.slice(1))})`;
}
export function cssvar(str) {
    if (str.match(/^\$\S/))
        return `var(--${escapeSelector(str.slice(1))})`;
}
export function time(str) {
    const match = str.match(/^(-?[0-9.]+)(s|ms)?$/i);
    if (!match)
        return;
    const [, n, unit] = match;
    const num = parseFloat(n);
    if (!Number.isNaN(num))
        return unit ? `${round(num)}${unit}` : `${round(num)}ms`;
}
export function degree(str) {
    const match = str.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
    if (!match)
        return;
    const [, n, unit] = match;
    const num = parseFloat(n);
    if (!Number.isNaN(num))
        return unit ? `${round(num)}${unit}` : `${round(num)}deg`;
}
export function global(str) {
    if (globalKeywords.includes(str))
        return str;
}
export function properties(str) {
    if (str.split(',').every(prop => cssProps.includes(prop)))
        return str;
}
export function position(str) {
    if (['top', 'left', 'right', 'bottom', 'center'].includes(str))
        return str;
}
