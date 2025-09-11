import { createTheme, createThemeContract } from "@vanilla-extract/css";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  teal,
} from "@radix-ui/colors";

export const vars = createThemeContract({
  colors: {
    gray1: null,
    gray2: null,
    gray12: null,
    blue9: null,
    red9: null,
    green9: null,
    teal11: null,
  },
  space: {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
  },
});

const spaceValues = {
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "40px",
};

export const lightTheme = createTheme(vars, {
  colors: {
    gray1: gray.gray1,
    gray2: gray.gray2,
    gray12: gray.gray12,
    blue9: blue.blue9,
    red9: red.red9,
    green9: green.green9,
    teal11: teal.teal11,
  },
  space: spaceValues,
});

export const darkTheme = createTheme(vars, {
  colors: {
    gray1: grayDark.gray1,
    gray2: grayDark.gray2,
    gray12: grayDark.gray12,
    blue9: blueDark.blue9,
    red9: redDark.red9,
    green9: greenDark.green9,
    teal11: teal.teal11,
  },
  space: spaceValues,
});
