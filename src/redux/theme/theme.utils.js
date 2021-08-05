const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const prefersNotSet = window.matchMedia(
  "(prefers-color-scheme: no-preference)"
).matches;

let themeByDefault;

if (prefersDark) themeByDefault = "dark";
if (prefersLight) themeByDefault = "light";
if (prefersNotSet) themeByDefault = "light";

export default themeByDefault;
