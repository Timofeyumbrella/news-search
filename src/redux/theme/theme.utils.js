const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const prefersTheme = prefersDark ? "dark" : "light";
