import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InifiniteScroll from "react-infinite-scroll-component";

import { fetchMoreNews } from "redux/news/news.actions";

import Article from "components/Article/Article";
import Spinner from "components/Spinner/Spinner";
import Error from "components/Error/Error";

import "./Home.styles.scss";

const Home = () => {
  const [page, setPage] = useState(2);
  const { loading, data, error, query, sortBy } = useSelector(
    (state) => state.news
  );

  const dispatch = useDispatch();

  return (
    <div className="home">
      {loading && (
        <div className="home__loading">
          <Spinner />
        </div>
      )}
      {data.length > 0 && (
        <InifiniteScroll
          dataLength={data.length}
          next={() => dispatch(fetchMoreNews({ query, sortBy, page, setPage }))}
          hasMore={page <= 20}
        >
          {data.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </InifiniteScroll>
      )}
      {!data.length && !loading && (
        <h2 className="home__news-not-found">news not found</h2>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

export default Home;
