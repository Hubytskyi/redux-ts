import { createTheme } from '@mui/material/styles';
import BREAKPOINTS from './breakpoints.const';
import palleteLight from './palette-light.const';
import typography from './typography.const';
import shadows from './shadows.const';
import components from './components.const';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: BREAKPOINTS.xs,
      sm: BREAKPOINTS.sm,
      md: BREAKPOINTS.md,
      lg: BREAKPOINTS.lg,
      xl: BREAKPOINTS.xl,
    },
  },

  palette: palleteLight,

  typography,

  shadows: [
    'none',
    shadows['1'],
    shadows['2'],
    shadows['3'],
    shadows['4'],
    shadows['5'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
  ],

  components,
});

export default theme;
