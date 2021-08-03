import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import { getSearchedNews } from "../../redux/searchedNews/searchedNews.actions";

import "./Header.styles.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
      </div>
    </header>
  );
};

export default Header;
