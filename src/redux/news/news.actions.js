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

const getNewsFailure = (error) => ({
  type: NewsActionTypes.GET_NEWS_FAILURE,
  payload: error,
});

export const getMoreNews = (news) => ({
  type: NewsActionTypes.GET_MORE_NEWS,
  payload: news,
});

export const setQuery = (query) => ({
  type: NewsActionTypes.SET_QUERY,
  payload: query,
});

export const setSortBy = (sortBy) => ({
  type: NewsActionTypes.SET_SORT_BY,
  payload: sortBy,
});

export const getNews =
  ({ query, sortBy }) =>
  (dispatch) => {
    const getNewsAsync = async () => {
      try {
        dispatch(getNewsRequest());

        const res = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: query || "everything",
            sortBy,
            apiKey: process.env.REACT_APP_KEY,
            page: 1,
            pageSize: 5,
          },
        });

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

export const fetchMoreNews =
  ({ query, sortBy, page, setPage }) =>
  (dispatch) => {
    const fetchMoreNewsAsync = async () => {
      try {
        setPage(page + 1);

        const res = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: query || "everything",
            sortBy,
            page,
            apiKey: process.env.REACT_APP_KEY,
            pageSize: 5,
          },
        });

        dispatch(
          getMoreNews(
            res.data.articles.map((article) => ({ id: uuidv4(), ...article }))
          )
        );
      } catch (error) {
        dispatch(getNewsFailure(error.message));
      }
    };

    fetchMoreNewsAsync();
  };
