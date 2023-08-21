import { directionSize } from '#utils';
import { spaceBase } from '#theme';

// negatives come in via the negative variant
export const paddingEmptyCapture =
  spaceBase.map(s => {
    // empty capture group here sets an empty string for 'direction' instead of undefined
    var ruleEmptyCapture = new RegExp('^p()-' + s + '$');
    return [ruleEmptyCapture, directionSize('padding', s.toString())];
  });
// negatives come in via the negative variant
export const paddingAxis =
  spaceBase.map(s => {
    var ruleAxis = new RegExp('^p([xy])-' + s + '$');
    return [ruleAxis, directionSize('padding', s.toString())];
  });
// negatives come in via the negative variant
export const paddingSides =
  spaceBase.map(s => {
    var ruleSides = new RegExp('^p([rltb])-' + s + '$');
    return [ruleSides, directionSize('padding', s.toString())];
  });

export const marginEmptyCapture =
  spaceBase.map(s => {
    var ruleEmptyCapture = new RegExp('^m()-' + s + '$');
    return [ruleEmptyCapture, directionSize('margin', s.toString())];
  });
export const marginAxis =
  spaceBase.map(s => {
    var ruleAxis = new RegExp('^m([xy])-' + s + '$');
    return [
      [ruleAxis, directionSize('margin', s.toString())],
    ];
  });
export const marginSides =
  spaceBase.map(s => {
    var ruleSides = new RegExp('^m([rltb])-' + s + '$');
    return [ruleSides, directionSize('margin', s.toString())];
  });

export const spacingAuto = [
  [/^m([xyrltb]?)-(.+)/, directionSize('margin')],
  [/^p([xyrltb]?)-(.+)/, directionSize('padding')],
];