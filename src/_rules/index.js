import * as align from "./align.js";
import * as behaviors from "./behaviors.js";
import * as border from "./border.js";
import * as color from "./color.js";
import * as display from "./display.js";
import * as flex from "./flex.js";
import * as gap from "./gap.js";
import * as grid from "./grid.js";
import * as layout from "./layout.js";
import * as lineClamp from "./line-clamp.js";
import * as position from "./position.js";
import * as size from "./size.js"
import * as spaceMargin from './space-margin.js'
import * as spacing from "./spacing.js";
import * as staticRules from "./static.js";
import * as transform from "./transform.js";

const ruleGroups = {
  ...align,
  ...behaviors,
  ...border,
  ...color,
  ...display,
  ...flex,
  ...gap,
  ...grid,
  ...layout,
  ...lineClamp,
  ...position,
  ...size,
  ...spaceMargin,
  ...spacing,
  ...staticRules,
  ...transform
}

export const rules = [
  ...Object.values(ruleGroups)
].flat(1);

export * from "./align.js";
export * from "./behaviors.js";
export * from "./border.js";
export * from "./color.js";
export * from "./display.js";
export * from "./flex.js";
export * from "./gap.js";
export * from "./grid.js";
export * from "./layout.js";
export * from "./line-clamp.js"
export * from "./position.js";
export * from "./size.js";
export * from './space-margin.js'
export * from "./spacing.js";
export * from "./static.js";
export * from "./transform.js";
