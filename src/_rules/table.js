export const borderCollapse = [
  ['border-collapse', { 'border-collapse': 'collapse' }],
  ['border-separate', { 'border-collapse': 'separate' }],
];

export const tableLayout = [
  ['table-auto', { 'table-layout': 'auto' }],
  ['table-fixed', { 'table-layout': 'fixed' }],
];

export const borderSpacing = [
  [/^border-spacing-()(\d+)?$/, handleBorderSpacing],
  [/^border-spacing-([xy])-(\d+)?$/, handleBorderSpacing],
];

function handleBorderSpacing([, direction, spacing], { theme }) {
  const spacingValue = theme.spacing?.[spacing];
  const defaultValue = theme.spacing[1];

  if (!Boolean(spacingValue)) return;

  const borderSpacingValue = () => {
    switch (direction) {
      case 'x':
        return `${spacingValue} ${defaultValue}`;
      case 'y':
        return `${defaultValue} ${spacingValue}`;
      default:
        return `${spacingValue} ${spacingValue}`;
    }
  };

  return {
    'border-spacing': borderSpacingValue(),
  };
}
