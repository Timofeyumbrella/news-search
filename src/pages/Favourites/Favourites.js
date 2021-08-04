import React from "react";
import { useSelector } from "react-redux";

import Article from "../../components/Article/Article";

import "./Favourites.styles.scss";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.favourites);
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`favourites favourites--${theme}`}>
      {favourites.length ? (
        favourites.map((article) => {
          return <Article key={article.id} article={article} />;
        })
      ) : (
        <h2 className="favourites__empty">
          You don't have any favourite news articles yet
        </h2>
      )}
    </div>
  );
};

export default Favourites;
