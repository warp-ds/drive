import { createValueHandler } from '@unocss/rule-utils';

import * as valueHandlers from './handlers.js';

export const handler = createValueHandler(valueHandlers);
export const h = handler;
export { valueHandlers };
export * from './regex.js';
