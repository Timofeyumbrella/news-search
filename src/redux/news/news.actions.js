import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { NewsActionTypes } from "./news.types";

const getNewsRequest = () => ({
  type: NewsActionTypes.GET_NEWS_REQUEST,
});

const getNewsSuccess = (news) => ({
  type: NewsActionTypes.GET_NEWS_SUCCESS,
  payload: news,
});

const getSearchedNewsSuccess = (news) => ({
  type: NewsActionTypes.GET_SEARCHED_NEWS_SUCCESS,
  payload: news,
});

const getNewsFailure = (error) => ({
  type: NewsActionTypes.GET_NEWS_FAILURE,
  payload: error,
});

export const getMoreNews = (news) => ({
  type: NewsActionTypes.GET_MORE_NEWS,
  payload: news,
});

export const getNews = () => (dispatch) => {
  const getNewsAsync = async () => {
    try {
      dispatch(getNewsRequest());

      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=everything&sortBy=publishedAt&page=1&pageSize=5&apiKey=${process.env.REACT_APP_KEY}`
      );

      dispatch(
        getNewsSuccess(
          res.data.articles.map((article) => ({ id: uuidv4(), ...article }))
        )
      );
    } catch (error) {
      dispatch(getNewsFailure(error.message));
    }
  };

  getNewsAsync();
};

export const getSearchedNews = (query) => (dispatch) => {
  const getSearchedNewsAsync = async () => {
    try {
      dispatch(getNewsRequest());

      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&page=1&pageSize=5&apiKey=${process.env.REACT_APP_KEY}`
      );

      dispatch(
        getSearchedNewsSuccess(
          res.data.articles.map((article) => ({ id: uuidv4(), ...article }))
        )
      );
    } catch (error) {
      dispatch(getNewsFailure(error.message));
    }
  };

  getSearchedNewsAsync();
};

export const fetchMoreNews = async (page, setPage) => (dispatch) => {
  const fetchMoreNewsAsync = async () => {
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
      dispatchEvent(getNewsFailure(error.message));
    }
  };

  fetchMoreNewsAsync();
};
