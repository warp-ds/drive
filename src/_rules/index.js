import * as align from './align.js';
import * as animations from './animations.js';
import * as arbitrary from './arbitrary.js';
import * as aspectRatio from './aspect-ratio.js';
import * as backdrop from './backdrop.js';
import * as backgrounds from './background.js';
import * as behaviors from './behaviors.js';
import * as border from './border.js';
import * as color from './color.js';
import * as dataviz from './dataviz.js';
import * as decoration from './decoration.js';
import * as display from './display.js';
import * as flex from './flex.js';
import * as focusRing from './focus-ring.js';
import * as gap from './gap.js';
import * as grid from './grid.js';
import * as layout from './layout.js';
import * as lineClamp from './line-clamp.js';
import * as list from './list.js';
import * as outline from './outline.js';
import * as position from './position.js';
import * as semantic from './semantic.js';
import * as shadow from './shadow.js';
import * as size from './size.js';
import * as spaceMargin from './space-margin.js';
import * as spacing from './spacing.js';
import * as staticRules from './static.js';
import * as table from './table.js';
import * as transform from './transform.js';
import * as transition from './transition.js';
import * as typography from './typography.js';

const ruleGroups = {
  ...align,
  ...animations,
  ...arbitrary,
  ...aspectRatio,
  ...backdrop,
  ...backgrounds,
  ...behaviors,
  ...border,
  ...table,
  ...color,
  ...dataviz,
  ...display,
  ...decoration,
  ...flex,
  ...focusRing,
  ...gap,
  ...grid,
  ...layout,
  ...lineClamp,
  ...list,
  ...outline,
  ...position,
  ...semantic,
  ...shadow,
  ...size,
  ...spaceMargin,
  ...spacing,
  ...staticRules,
  ...transform,
  ...transition,
  ...typography,
};

export const rules = [...Object.values(ruleGroups)].flat(1);

export * from './align.js';
export * from './animations.js';
export * from './arbitrary.js';
export * from './aspect-ratio.js';
export * from './backdrop.js';
export * from './background.js';
export * from './behaviors.js';
export * from './border.js';
export * from './color.js';
export * from './dataviz.js';
export * from './display.js';
export * from './decoration.js';
export * from './flex.js';
export * from './focus-ring.js';
export * from './gap.js';
export * from './grid.js';
export * from './layout.js';
export * from './line-clamp.js';
export * from './list.js';
export * from './outline.js';
export * from './position.js';
export * from './semantic.js';
export * from './shadow.js';
export * from './size.js';
export * from './space-margin.js';
export * from './spacing.js';
export * from './static.js';
export * from './table.js';
export * from './transform.js';
export * from './transition.js';
export * from './typography.js';
