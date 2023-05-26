const DARK_PALETTE = {
  primaryLight: "#f0ffffff",
  primaryDark: "#363744ff",
  primaryDarkLighter: "#4e4e5a",
  primaryAccent: "#65cebb",
  secondaryAccent: "#9feaea",
  secondaryDark: "#27282FFF",
};

const LIGHT_PALETTE = {
  primaryDark: "#000000FF",
  primaryLight: "#F5DEB3FF",
  primaryLightDarker: "#eed19a",
  primaryAccent: "#d3ad68",
  primaryAccentDarker: "#5d563c",
  secondaryAccent: "#a11919",
};

const DARK_THEME_STYLE = {
  "main-text-color": DARK_PALETTE.primaryLight,
  "app-background": DARK_PALETTE.primaryDarkLighter,
  "button-background-color": DARK_PALETTE.primaryDark,
  "button-active-background-color": DARK_PALETTE.primaryAccent,
  "button-active-text-color": DARK_PALETTE.secondaryDark,
  "border-color": DARK_PALETTE.secondaryAccent,
  "title-color": DARK_PALETTE.primaryLight,
  "title-shadow": DARK_PALETTE.primaryAccent,
  "title-hover-brightness": "130%",
  "items-list-hover-el-background": DARK_PALETTE.primaryDark,
  "items-list-active-el-background": DARK_PALETTE.secondaryDark,
  "error-div-color": DARK_PALETTE.primaryAccent,
  "global-background": DARK_PALETTE.secondaryDark,
};
const LIGHT_THEME_STYLE = {
  "main-text-color": LIGHT_PALETTE.primaryDark,
  "app-background": LIGHT_PALETTE.primaryLight,
  "button-background-color": LIGHT_PALETTE.primaryLightDarker,
  "button-active-background-color": LIGHT_PALETTE.primaryAccent,
  "button-active-text-color": LIGHT_PALETTE.primaryDark,
  "border-color": LIGHT_PALETTE.primaryAccentDarker,
  "title-color": LIGHT_PALETTE.primaryAccentDarker,
  "title-shadow": LIGHT_PALETTE.primaryAccent,
  "title-hover-brightness": "70%",
  "items-list-hover-el-background": LIGHT_PALETTE.primaryLightDarker,
  "items-list-active-el-background": LIGHT_PALETTE.primaryAccent,
  "error-div-color": LIGHT_PALETTE.secondaryAccent,
  "global-background": LIGHT_PALETTE.primaryLightDarker,
};
export const THEMES = {
  darkTheme: {
    text: "Dark Theme",
    name: "darkTheme",
    style: DARK_THEME_STYLE,
    switchTo: "lightTheme",
  },
  lightTheme: {
    text: "Light Theme",
    name: "lightTheme",
    style: LIGHT_THEME_STYLE,
    switchTo: "darkTheme",
  },
};

export function ConvertStyleJSToCss(styleObj) {
  let cssStyleObj = {};
  Object.keys(styleObj).forEach((key) => {
    cssStyleObj[`--global-${key}`] = styleObj[key];
  });
  return cssStyleObj;
}
