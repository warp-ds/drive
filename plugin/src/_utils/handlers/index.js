import { createValueHandler } from '@unocss/core';
import * as valueHandlers from './handlers.js';

export const handler = createValueHandler(valueHandlers);
export const h = handler;
export { valueHandlers };
