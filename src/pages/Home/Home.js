import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InifiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { getNews, getMoreNews } from "../../redux/news/news.actions";

import Article from "../../components/Article/Article";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

import "./Home.styles.scss";

const Home = () => {
  const [page, setPage] = useState(2);

  const { loading, news, error } = useSelector((state) => state.news);
  const { searchLoading, searchedNews, searchError } = useSelector(
    (state) => state.searchedNews
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const fetchMoreNews = async () => {
    try {
      setPage(page + 1);

      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&page=${page}&pageSize=5&apiKey=${process.env.REACT_APP_KEY}`
      );

      dispatch(
        getMoreNews(
          res.data.articles.map((article) => ({ id: uuidv4(), ...article }))
        )
      );
    } catch (error) {
      <Error error={error} />;
    }
  };

  return (
    <div className="home">
      {loading || searchLoading ? (
        <div className="home__loading">
          <Spinner />
        </div>
      ) : searchedNews.length ? (
        searchedNews.map((article) => {
          return <Article key={article.id} article={article} />;
        })
      ) : news.length ? (
        <InifiniteScroll
          dataLength={news.length}
          next={fetchMoreNews}
          hasMore={page <= 20}
        >
          {news.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </InifiniteScroll>
      ) : error || searchError ? (
        <Error error={error} />
      ) : null}
    </div>
  );
};

export default Home;
