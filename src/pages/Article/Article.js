import React, { useState, useEffect } from "react";
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
  const { data: news } = useSelector((state) => state.news);
  const { data: searchedNews } = useSelector((state) => state.searchedNews);
  const { favourites } = useSelector((state) => state.favourites);
  const { theme } = useSelector((state) => state.theme);
  const [article, setArticle] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setArticle(
      news.find((article) => article.id === match.params.articleId) ||
        searchedNews.find((article) => article.id === match.params.articleId)
    );
  }, [news, searchedNews, match.params.articleId]);

  const { author, title, description, urlToImage, publishedAt, content } =
    article;

  return (
    <article className={`article-page article-page--${theme}`}>
      <div className={`article-page__wrapper article-page__wrapper--${theme}`}>
        <Image urlToImage={urlToImage} />
        <div className="article-page__info">
          <h2 className="article-page__title">{title}</h2>
          {favourites.find((favourite) => favourite.id === article.id) ? (
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
