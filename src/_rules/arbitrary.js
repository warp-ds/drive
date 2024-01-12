export const cssVariables = [[/^\[(--(.*)):(.*)\]$/, ([, variable, _, value]) => ({ [variable]: value?.trim() })]];
