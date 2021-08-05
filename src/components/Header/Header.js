import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import { getSearchedNews } from "../../redux/news/news.actions";
import { toggleTheme } from "../../redux/theme/theme.actions";

import FavouritesIcon from "../FavouritesIcon/FavouritesIcon";

import "./Header.styles.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getSearchedNews(search));
  };

  return (
    <header className={`header header--${theme}`}>
      <div className="header__wrapper">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <form className="header__search-form" onSubmit={handleSubmit}>
          <input
            className={`header__search header__search--${theme}`}
            type="search"
            value={search}
            placeholder="search..."
            onChange={handleChange}
          />
        </form>
        <div className="header__utils">
          <button
            className={`header__toggler header__toggler--${theme}`}
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? "dark" : "light"}
          </button>
          <Link to="/favourites">
            <FavouritesIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
