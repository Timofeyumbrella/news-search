import React from "react";

import Image from "../Image/Image";

import "./Article.styles.scss";

const Article = ({ article }) => {
  const { author, title, description, urlToImage, publishedAt } = article;

  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
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
