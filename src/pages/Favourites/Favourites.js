import React, { useState } from "react";
import { useSelector } from "react-redux";

import Article from "components/Article/Article";

import "./Favourites.styles.scss";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.favourites);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const searchedFavourites = favourites.filter((favourite) =>
    favourite.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="favourites">
      <input
        type="search"
        value={search}
        placeholder="search through your favourites"
        onChange={handleChange}
        className="favourites__search"
      />
      {search.length > 0 && (
        <h2 className="favourites__search-results">
          {searchedFavourites.length} search results for: <span>{search}</span>
        </h2>
      )}
      {searchedFavourites.length > 0 &&
        searchedFavourites.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      {!favourites.length && (
        <h2 className="favourites__empty">
          You don't have any favourite news articles yet
        </h2>
      )}
    </div>
  );
};

export default Favourites;
