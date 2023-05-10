import { twReset } from './tw-reset.js';
import { formPreflight } from './forms/export.js';
import { transformBase } from './transform.js';
import { typographyBase } from './typography.js';

export const preflights = [twReset, transformBase, formPreflight, typographyBase];
