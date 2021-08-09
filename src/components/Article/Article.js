import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";

import Image from "../Image/Image";
import FavouritesIcon from "../FavouritesIcon/FavouritesIcon";
import RemoveFavouritesIcon from "../RemoveFavouriteIcon/RemoveFavouriteIcon";

import "./Article.styles.scss";

const Article = ({ article }) => {
  const { id, author, title, description, urlToImage, publishedAt } = article;
  const { favourites } = useSelector((state) => state.favourites);

  const dispatch = useDispatch();

  const favourite = useMemo(
    () => favourites.find((favourite) => favourite.id === article.id),
    [favourites, article]
  );

  return (
    <article className="article">
      <Link to={`news/${id}`} className="article__title">
        {title}
      </Link>
      {favourite ? (
        <RemoveFavouritesIcon
          onClick={() => dispatch(removeFromFavourites(article))}
        />
      ) : (
        <FavouritesIcon onClick={() => dispatch(addToFavourites(article))} />
      )}
      <p className="article__description">{description}</p>
      <Image urlToImage={urlToImage} isListed />
      <footer className="article__footer">
        <span className="article__author">{author}</span>
        <span className="article__published-at">{publishedAt}</span>
      </footer>
    </article>
  );
};

export default Article;
