import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";

import FavouritesIcon from "../../components/FavouritesIcon/FavouritesIcon";
import RemoveFavouritesIcon from "../../components/RemoveFavouriteIcon/RemoveFavouriteIcon";
import Image from "../../components/Image/Image";

import "./Article.styles.scss";

const Article = ({ match }) => {
  const { favourites } = useSelector((state) => state.favourites);
  const { theme } = useSelector((state) => state.theme);
  const { data } = useSelector((state) => state.news);
  const [article, setArticle] = useState({});

  const dispatch = useDispatch();

  const favourite = useMemo(
    () => favourites.find((favourite) => favourite.id === article.id),
    [favourites, article]
  );

  useEffect(() => {
    setArticle(data.find((article) => article.id === match.params.articleId));
  }, [data, match.params.articleId]);

  const { author, title, description, urlToImage, publishedAt, content } =
    article;

  return (
    <article
      className={`${
        theme === "light" ? "light-theme" : "dark-theme"
      } article-page`}
    >
      <div className="article-page__wrapper">
        <Image urlToImage={urlToImage} />
        <div className="article-page__info">
          <h2 className="article-page__title">{title}</h2>
          {favourite ? (
            <RemoveFavouritesIcon
              onClick={() => dispatch(removeFromFavourites(article))}
            />
          ) : (
            <FavouritesIcon
              onClick={() => dispatch(addToFavourites(article))}
            />
          )}
          <p className="article-page__description">{description}</p>
          <p className="article-page__content">{content}</p>
          <footer className="article-page__footer">
            <span className="article-page__author">{author}</span>
            <span className="article-page__published-at">{publishedAt}</span>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Article;
