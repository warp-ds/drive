import { escapeSelector } from "@unocss/core";
import { getClassesToPurge } from "./classesToPurge.js";

const prefix = "w-";
const classify = (str) => `.${escapeSelector(str)}`;

export const postprocess = (shouldExternalize, _externalClasses = []) => {
  let test;
  getClassesToPurge().then(async (response) => {
    const classes = await response.json();
    const externalClasses = _externalClasses.map(classify).concat(classes);
    console.log({ externalClasses });
    test = (obj) => {
      console.log({ classes });
      if (shouldExternalize && externalClasses.includes(obj.selector)) {
        return (obj.entries = []);
      }
      obj.entries.forEach((e) => {
        e[0] = e[0].replace(/^--un-/, `--${prefix}`);
        if (typeof e[1] === "string") {
          e[1] = e[1].replace(/var\(--un-/g, `var(--${prefix}`);
        }
      });
    };
  });
  return test;
};
