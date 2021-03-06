import { darken, lighten } from 'polished';

const primary = '#3AEFEC';
const secondary = '#1E8B89';
const button = "#F3C120"
const text = '#333';
const colors = {
  shadow: '#000',
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    gradient: '#056f6d',
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    gradient: '#056F6D',
    dark: darken(0.1, secondary),
    contrast: '#ffffff',
  },
  text: {
    light: lighten(0.05, text),
    main: text,
    dark: darken(0.1, text),
    contrast: '#ffffff',
  },
  button: {
    light: lighten(0.05, button),
    main: button,
    dark: darken(0.1, button),
    contrast: '#ffffff',
  }
};

export default colors;