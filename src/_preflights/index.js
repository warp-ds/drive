import { resets } from './resets.js';
import { transformBase } from './transform.js';

export const preflights = (skipResets) => (skipResets ? [transformBase] : [transformBase, resets]);
