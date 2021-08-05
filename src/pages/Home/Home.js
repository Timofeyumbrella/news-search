import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InifiniteScroll from "react-infinite-scroll-component";

import { getNews, fetchMoreNews } from "../../redux/news/news.actions";

import Article from "../../components/Article/Article";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

import "./Home.styles.scss";

const Home = () => {
  const [page, setPage] = useState(2);

  const { loading, data, error } = useSelector((state) => state.news);
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"} home`}>
      {loading && (
        <div className="home__loading">
          <Spinner />
        </div>
      )}
      {data.length > 0 && (
        <InifiniteScroll
          dataLength={data.length}
          next={() => fetchMoreNews(page, setPage)}
          hasMore={page <= 20}
        >
          {data.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </InifiniteScroll>
      )}
      {!data.length && <h2 className="home__news-not-found">news not found</h2>}
      {error && <Error error={error} />}
    </div>
  );
};

export default Home;
