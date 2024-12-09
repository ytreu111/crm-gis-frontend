export const generalTheme = {
  font: {
    size: {
      large: '16px',
      default: '14px',
      small: '12px',
    },
    weight: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
  },
  radius: {
    default: '8px',
    small: '4px',
  },
  spacing: {
    default: 8,
  },
} as const

export type GeneralTheme = typeof generalTheme
