import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { SearchedNewsActionTypes } from "./searchedNews.types";

const getSearchedNewsRequest = () => ({
  type: SearchedNewsActionTypes.GET_SEARCHED_NEWS_REQUEST,
});

const getSearchedNewsSuccess = (searchedNews) => ({
  type: SearchedNewsActionTypes.GET_SEARCHED_NEWS_SUCCESS,
  payload: searchedNews,
});

const getSearchedNewsFailure = (searchError) => ({
  type: SearchedNewsActionTypes.GET_SEARCHED_NEWS_FAILURE,
  payload: searchError,
});

export const getMoreSearchedNews = (news) => ({
  type: SearchedNewsActionTypes.GET_MORE_SEARCHED_NEWS,
  payload: news,
});

export const getSearchedNews = (search) => (dispatch) => {
  const getSearchedNewsAsync = async () => {
    try {
      dispatch(getSearchedNewsRequest());

      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_KEY}`
      );

      dispatch(
        getSearchedNewsSuccess(
          res.data.articles.map((article) => ({ id: uuidv4(), ...article }))
        )
      );
    } catch (error) {
      dispatch(getSearchedNewsFailure(error.message));
    }
  };

  getSearchedNewsAsync();
};
