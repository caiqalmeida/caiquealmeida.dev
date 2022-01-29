export type ThemeType = typeof theme;

export const theme = {
  colors: {
    purple: {
      dark: '#120836',
      medium: '#1A0C4C'
    },
    white: {
      ligth: 'rgba(255, 255, 255, 1)',
      medium: 'rgba(255, 255, 255, .8)',
      mediumDark: 'rgba(255, 255, 255, .7)'
    },
    gradient: 'linear-gradient(266.18deg, #B66AFF -4.75%, #465AF1 116.14%)',
  },
  font: {
    family: "'Poppins', sans-serif;",
    size: {
      xxxs: '0.75rem', // 12px
      xxs: '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.125rem', // 18px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '2.5rem', // 40px
      xxl: '3rem', // 48px
      xxxl: '4rem' // 64px
    },
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  borders: {
    radius: {
      sm: '4px',
      lg: '64px',
      bottomSmall: '0px 0px 4px 4px',
      circular: '50%',
    }
  },
  spacing: {
    nano: '0.5rem', // 8px
    xxxxs: '0.75rem', // 12px
    xxxs: '1rem', // 16px
    xxs: '1.5rem', // 24px
    xs: '2rem', // 32px
    sm: '2.5rem', // 40px
    md: '3rem', // 48px
    lg: '3.5rem', // 56px
    xl: '4rem', // 64px
    xxl: '5rem', // 80px
    xxxl: '7.5rem', // 120px
    huge: '10rem', // 160px
    giant: '12.5rem' // 200px
  }
}

export default theme;