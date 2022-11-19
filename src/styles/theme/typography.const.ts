import { baseFontSize, fontSizes, headingFont, primaryFont } from './fonts.const';

const typography = {
  fontFamily: primaryFont,
  htmlFontSize: baseFontSize,
  h1: {
    fontFamily: headingFont,
    fontSize: fontSizes.xxxxl,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.21,
    '@media (max-width:375px)': {
      fontSize: fontSizes.xxl,
    },
  },
  h2: {
    fontFamily: headingFont,
    fontSize: fontSizes.xxxl,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.22,
    '@media (max-width:375px)': {
      fontSize: fontSizes.xl,
    },
  },
  h3: {
    fontFamily: headingFont,
    fontSize: fontSizes.xxl,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.31,
    '@media (max-width:375px)': {
      fontSize: fontSizes.lg,
    },
  },
  h4: {
    fontFamily: headingFont,
    fontSize: fontSizes.xl,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.43,
    '@media (max-width:375px)': {
      fontSize: fontSizes.md,
    },
  },
  h5: {
    fontFamily: headingFont,
    fontSize: fontSizes.lg,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.42,
    '@media (max-width:375px)': {
      fontSize: fontSizes.base,
    },
  },
  h6: {
    fontFamily: headingFont,
    fontSize: fontSizes.md,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.78,
    '@media (max-width:375px)': {
      fontSize: fontSizes.sm,
    },
  },
  subtitle1: {
    fontSize: fontSizes.md,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 1.33,
  },
  subtitle2: {
    fontSize: fontSizes.base,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: 1.63,
  },
  body1: {
    fontSize: fontSizes.base,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.63,
  },
  body2: {
    fontSize: fontSizes.sm,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.71,
  },
  button: {
    fontSize: fontSizes.base,
    fontWeight: 600,
  },
  caption: {
    fontFamily: headingFont,
    fontSize: fontSizes.sm,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: fontSizes.sm,
  },
  // overline: {
  //   fontSize: fontSizes.xxs,
  //   fontWeight: 600,
  //   fontStyle: 'normal',
  //   lineHeight: 1.33,
  //   textTransform: 'uppercase',
  // },
};

export default typography;
