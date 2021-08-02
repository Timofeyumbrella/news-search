import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import "./Header.styles.scss";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
