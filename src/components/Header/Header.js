import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import { getSearchedNews } from "../../redux/news/news.actions";

import FavouritesIcon from "../FavouritesIcon/FavouritesIcon";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

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
          <ThemeIcon />
          <Link to="/favourites">
            <FavouritesIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
