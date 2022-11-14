import { alpha } from '@mui/material';
import { fontSizes } from './fonts.const';
import shadows from './shadows.const';
import paletteLight from './palette-light.const';

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: fontSizes.sm,
        padding: '8px 20px',
        lineHeight: 1.14,
        boxShadow: shadows['0'],
        borderRadius: '23px',

        '&:hover': {
          boxShadow: shadows['1'],
        },

        '&:active': {
          boxShadow: shadows['1'],
        },

        '&:disabled': {
          pointerEvents: 'none',
          opacity: '0.65',
        },

        '&:focus': {
          outline: 'none',
        },

        '&.MuiButton-sizeLarge': {
          padding: '15px 25px',
          fontSize: fontSizes.base,
          lineHeight: 1,
        },
      },

      contained: {
        boxShadow: shadows['0'],
        backgroundColor: paletteLight.primary.main,

        '&:hover': {
          boxShadow: shadows['1'],
          backgroundColor: paletteLight.primary.dark,
        },

        '&:active': {
          boxShadow: shadows['1'],
        },
      },

      containedPrimary: {
        '&:hover': {
          backgroundColor: paletteLight.primary.light,
        },
      },
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        color: paletteLight.grey['500'],
        padding: '8px',

        '&.MuiIconButton-sizeSmall': {
          padding: '4px',
        },

        '&.Mui-disabled': {
          color: paletteLight.grey['300'],
        },

        '&:hover': {
          backgroundColor: alpha(paletteLight.grey['400'], 0.15),
        },

        '&:focus': {
          outline: 'none',
        },

        '&:active': {
          backgroundColor: alpha(paletteLight.grey['400'], 0.3),
        },
      },
    }
  },

  // MuiInputLabel: {
  //   shrink: {
  //     transform: 'translate(0, 1.5px) scale(1)',
  //   },
  //   asterisk: {
  //     color: paletteLight.primary.main,
  //     '&$error': {
  //       color: paletteLight.primary.main,
  //     },
  //   },
  // },

  // MuiInput: {
  //   root: {
  //     fontWeight: 600,
  //   },
  //   underline: {
  //     '&:before': {
  //       borderBottom: `2px solid ${paletteLight.grey['200']}`,
  //     },
  //
  //     '&:hover:not($disabled):before': {
  //       borderBottom: `2px solid ${paletteLight.grey['200']}`,
  //     },
  //   },
  // },
  //
  // MuiSelect: {
  //   select: {
  //     '&:focus': {
  //       backgroundColor: paletteLight.background?.default,
  //     },
  //   },
  // },
  //
  // MuiMenuItem: {
  //   root: {
  //     '&.Mui-selected': {
  //       color: paletteLight.secondary,
  //     },
  //   },
  // },
  //
  // MuiPaper: {
  //   root: {
  //     '&.MuiMenu-paper': {
  //       boxShadow: shadows[2],
  //     },
  //   },
  // },
  //
  // MuiFormHelperText: {
  //   root: {
  //     position: 'absolute',
  //     bottom: '-25px',
  //   },
  // },
  //
  // MuiBreadcrumbs: {
  //   separator: {
  //     fontWeight: 600,
  //   },
  // },
};

export default components;