import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fontsSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "./tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors: colors,
    fontSizes: fontsSizes,
    fontWeights: fontWeights,
    radii: radii,
    space: space,
    lineHeights: lineHeights,
  },
});
