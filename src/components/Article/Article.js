import React from "react";
import { Link } from "react-router-dom";

import Image from "../Image/Image";

import "./Article.styles.scss";

const Article = ({ article }) => {
  const { id, author, title, description, urlToImage, publishedAt } = article;

  return (
    <article className="article">
      <Link to={`/news/${id}`} className="article__title">
        {title}
      </Link>
      <p className="article__description">{description}</p>
      <Image urlToImage={urlToImage} />
      <footer className="article__footer">
        <span className="article__author">{author}</span>
        <span className="article__published-at">{publishedAt}</span>
      </footer>
    </article>
  );
};

export default Article;
