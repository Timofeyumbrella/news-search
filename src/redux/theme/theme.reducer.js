import { ThemeActionTypes } from "./theme.types";
import { prefersTheme } from "./theme.utils";

const INITIAL_THEME = {
  theme: prefersTheme,
};

const themeReducer = (state = INITIAL_THEME, action) => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
