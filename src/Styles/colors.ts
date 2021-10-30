import { darken, lighten } from 'polished';

const primary = '#F8C843';
const secondary = '#343F4B';
const text = '#333';
const colors = {
  shadow: '#000',
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    contrast: '#ffffff',
  },
  text: {
    light: lighten(0.05, text),
    main: text,
    dark: darken(0.1, text),
    contrast: '#ffffff',
  },
};

export default colors;