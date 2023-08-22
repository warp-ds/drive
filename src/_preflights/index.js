import { transformBase } from './transform.js';
import { resets } from './resets.js';

export const preflights = (skipResets) => (skipResets ? [transformBase] : [transformBase, resets]);
