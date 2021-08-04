import { SearchedNewsActionTypes } from "./searchedNews.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const searchedNewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case SearchedNewsActionTypes.GET_MORE_SEARCHED_NEWS:
      return {
        ...state,
        loading: false,
        data: [...state.searchedNews, ...action.payload],
        error: "",
      };
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchedNewsReducer;
