import { handler as h, directionMap } from '#utils';

export const internalRules = [
  [/^i-bg-(.+)$/, ([, cssvar]) => ({ 'background-color': h.warpToken(cssvar) })],
  [/^i-text-(.+)$/, ([, cssvar]) => ({ color: h.warpToken(cssvar) })],
  [/^i-border-(.+)$/, ([, cssvar]) => ({ 'border-color': h.warpToken(cssvar) })],
  [/^i-elevation-(.+)$/, ([, cssvar]) => ({ 'box-shadow': h.warpToken(cssvar) })],
  [/^i-border-([rltb])-(.+)$/, ([, direction, cssvar]) => {
    if (direction in directionMap && cssvar != null) {
      return directionMap[direction].map(
        (dir) => [`border${dir}-color`, h.warpToken(cssvar)],
      );
    }
  }],
];
