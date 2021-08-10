import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { Link, withRouter } from "react-router-dom";

import { getSearchedNews } from "redux/news/news.actions";

import FavouritesIcon from "../FavouritesIcon/FavouritesIcon";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

import "./Header.styles.scss";

const Header = ({ history }) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("");

    dispatch(getSearchedNews(search));
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <form className="header__search-form" onSubmit={handleSubmit}>
          <input
            className="header__search"
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

export default withRouter(Header);
