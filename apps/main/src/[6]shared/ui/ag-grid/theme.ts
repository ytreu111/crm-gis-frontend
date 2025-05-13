import { themeQuartz } from '@ag-grid-community/theming'

export const customGridTheme = themeQuartz
  .withParams({
    headerFontSize: 14,
    accentColor: 'var(--color-accent)',
    headerBackgroundColor: 'var(--color-bg-additional)',
    checkboxUncheckedBorderColor: 'var(--color-accent)',
    checkboxCheckedShapeColor: 'var(--color-icon)',
    textColor: 'var(--color-text)',
    foregroundColor: 'var(--color-text-secondary)',
    backgroundColor: 'var(--color-bg)',
    headerRowBorder: {
      width: 0,
    },
    rowBorder: {
      width: 1,
    },
    wrapperBorder: {
      width: 0,
    },
    rowHeight: 45,
  })
