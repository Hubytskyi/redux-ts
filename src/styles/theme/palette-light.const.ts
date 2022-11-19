import COLORS from './colors.const';

const palleteLight = {
  type: 'light',
  common: {
    white: COLORS.white['400'],
    black: COLORS.black['400'],
  },
  primary: {
    light: COLORS.primary['300'],
    main: COLORS.primary['400'],
    dark: COLORS.primary['700'],
    lightError: COLORS.primary['100'],
  },
  secondary: {
    light: COLORS.secondary['300'],
    main: COLORS.secondary['400'],
    dark: COLORS.secondary['700'],
    lightError: COLORS.secondary['100'],
  },
  error: {
    main: COLORS.error['400'],
  },
  grey: {
    50: COLORS.grey['50'],
    100: COLORS.grey['100'],
    200: COLORS.grey['200'],
    300: COLORS.grey['300'],
    400: COLORS.grey['400'],
    500: COLORS.grey['500'],
    700: COLORS.grey['700'],
    800: COLORS.grey['800'],
    A100: COLORS.grey['300'],
    A200: COLORS.grey['400'],
    A400: COLORS.black['400'],
    A700: COLORS.black['400'],
  },
  divider: COLORS.grey['400'],
  background: {
    default: COLORS.white['400'],
  },
};

export default palleteLight;
