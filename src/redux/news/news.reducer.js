import { NewsActionTypes } from "./news.types";

const INITIAL_STATE = {
  loading: false,
  news: [],
  error: "",
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
        error: "",
      };
    case NewsActionTypes.GET_MORE_NEWS:
      return {
        ...state,
        loading: false,
        news: [...state.news, ...action.payload],
        error: "",
      };
    case NewsActionTypes.GET_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        news: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
