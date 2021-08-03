import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Image from "../../components/Image/Image";

import "./Article.styles.scss";

const Article = ({ match }) => {
  const { news } = useSelector((state) => state.news);
  const { searchedNews } = useSelector((state) => state.searchedNews);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setArticle(
      news.find((article) => article.id === match.params.articleId) ||
        searchedNews.find((article) => article.id === match.params.articleId)
    );
  }, [news, searchedNews, match.params.articleId]);

  const { author, title, description, urlToImage, publishedAt, content } =
    article;

  return (
    <article className="article-page">
      <div className="article-page__wrapper">
        <Image urlToImage={urlToImage} />
        <div className="article-page__info">
          <h2 className="article-page__title">{title}</h2>
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
