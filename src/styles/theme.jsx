export const theme = Object.freeze({
  colors: {
    white: '#FFF',
    black: '#000000',
    accent: '#632eb8',
    grey: '#5a5063',
    lightGrey: 'rgba(19, 22, 25, 0.50)',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '5px 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #635966',
    medium: '0 47px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});