import { SearchedNewsActionTypes } from "./searchedNews.types";

const INITIAL_STATE = {
  searchLoading: false,
  searchedNews: [],
  searchError: "",
};

const searchedNewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_REQUEST:
      return {
        ...state,
        searchLoading: true,
      };
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchedNews: action.payload,
        searchError: "",
      };
    case SearchedNewsActionTypes.GET_MORE_SEARCHED_NEWS:
      return {
        ...state,
        searchLoading: false,
        searchedNews: [...state.searchedNews, ...action.payload],
        searchError: "",
      };
    case SearchedNewsActionTypes.GET_SEARCHED_NEWS_FAILURE:
      return {
        ...state,
        searchLoading: false,
        searchedNews: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchedNewsReducer;
