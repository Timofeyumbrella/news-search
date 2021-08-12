import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReactComponent as LightTheme } from "assets/icons/light-theme.svg";
import { ReactComponent as DarkTheme } from "assets/icons/dark-theme.svg";

import { toggleTheme } from "redux/theme/theme.actions";

import "./ThemeIcon.styles.scss";

const ThemeIcon = () => {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  return (
    <button className="theme-icon" onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? <DarkTheme /> : <LightTheme />}
    </button>
  );
};

export default ThemeIcon;
