import { directionSize } from '#utils';
import { spaceBase } from '#theme';
export const padding =
  spaceBase.map(s => {
    var rule = new RegExp('^p([xyrltb]?)' + '-' + s + '$');
    return [rule, directionSize('padding', s.toString())];
  });

export const margin =
  spaceBase.map(s => {
    var rule = new RegExp('^m([xyrltb]?)' + '-' + s + '$');
    return [rule, directionSize('margin', s.toString())];
  });

export const spacingAuto = [
  [/^m([xyrltb]?)-(.+)/, directionSize('margin')],
  [/^p([xyrltb]?)-(.+)/, directionSize('padding')],
];