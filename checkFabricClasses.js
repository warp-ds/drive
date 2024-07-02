import { createGenerator } from '@unocss/core';
import { buildList } from '@warp-ds/fabric-parity-checker';

import presetEngine from '#plugin';

const fabricClassListWithoutClassDots = buildList().map((e) => e.replace('.', ''));

const uno = createGenerator({ presets: [presetEngine()] });
const fabricClasses = await uno.generate(fabricClassListWithoutClassDots);

fabricClassListWithoutClassDots.forEach((className) => {
  if (!fabricClasses.matched.has(className)) console.log('MISSING', className);
});
