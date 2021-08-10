import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { Link, withRouter } from "react-router-dom";

import { getNews } from "redux/news/news.actions";
import { useDebounce } from "utils/useDebounce";

import FavouritesIcon from "../FavouritesIcon/FavouritesIcon";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

import "./Header.styles.scss";

const Header = ({ history }) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    !debouncedSearch && !select && dispatch(getNews());
    debouncedSearch && !select && dispatch(getNews(search));
    debouncedSearch && history.push("");
    !debouncedSearch && select && dispatch(getNews(undefined, select));
    debouncedSearch && select && dispatch(getNews(search, select));
  }, [debouncedSearch, dispatch, history, select]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <form className="header__search-form">
          <input
            className="header__search"
            type="search"
            value={search}
            placeholder="search..."
            onChange={handleChange}
          />
        </form>
        <form className="header__sort-form">
          <select className="header__select" onChange={handleSelect}>
            <option value="relevancy">relevancy</option>
            <option value="popularity">popularity</option>
            <option value="publishedAt">published at</option>
          </select>
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
